import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const distDir = resolve("dist");
const ssrEntry = resolve("dist-ssr/entry-server.js");
const indexFile = resolve(distDir, "index.html");

if (!existsSync(ssrEntry)) {
  console.error("[prerender] SSR bundle not found at", ssrEntry);
  process.exit(1);
}

const template = readFileSync(indexFile, "utf8");
const { render } = await import(pathToFileURL(ssrEntry).href);

const routes = ["/"];
for (const url of routes) {
  const appHtml = render(url);
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );
  const outPath =
    url === "/" ? indexFile : resolve(distDir, url.replace(/^\//, ""), "index.html");
  writeFileSync(outPath, html);
  console.log(`[prerender] wrote ${outPath}`);
}