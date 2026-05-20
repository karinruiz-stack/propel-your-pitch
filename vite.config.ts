import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { build as viteBuild } from "vite";
import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { componentTagger } from "lovable-tagger";

function prerenderPlugin() {
  return {
    name: "lovable-prerender",
    apply: "build" as const,
    async closeBundle() {
      if (process.env.SKIP_PRERENDER === "1") return;
      process.env.SKIP_PRERENDER = "1";
      try {
        const distDir = path.resolve(__dirname, "dist");
        const ssrDir = path.resolve(__dirname, "dist-ssr");
        const indexFile = path.resolve(distDir, "index.html");
        if (!existsSync(indexFile)) return;

        await viteBuild({
          build: {
            ssr: path.resolve(__dirname, "src/entry-server.tsx"),
            outDir: ssrDir,
            emptyOutDir: true,
          },
          configFile: false,
          resolve: {
            alias: { "@": path.resolve(__dirname, "./src") },
          },
          logLevel: "warn",
        });

        const ssrEntry = path.resolve(ssrDir, "entry-server.js");
        const { render } = await import(pathToFileURL(ssrEntry).href);
        const template = readFileSync(indexFile, "utf8");
        const appHtml = render("/");
        const html = template.replace(
          '<div id="root"></div>',
          `<div id="root" data-prerendered="true">${appHtml}</div>`,
        );
        writeFileSync(indexFile, html);
        rmSync(ssrDir, { recursive: true, force: true });
        console.log("[prerender] inlined SSR HTML into dist/index.html");
      } finally {
        delete process.env.SKIP_PRERENDER;
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" && prerenderPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
