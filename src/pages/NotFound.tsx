import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Page not found — Propel Capital";

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", content);
      return () => {
        if (prev === null) el?.remove();
        else el?.setAttribute("content", prev);
      };
    };

    const url = `https://propelcapital.sting.co${location.pathname}`;
    const desc = "The page you're looking for doesn't exist. Head back to Propel Capital's homepage.";

    const restores = [
      setMeta('meta[name="description"]', "name", "description", desc),
      setMeta('meta[property="og:title"]', "property", "og:title", "Page not found — Propel Capital"),
      setMeta('meta[property="og:description"]', "property", "og:description", desc),
      setMeta('meta[property="og:url"]', "property", "og:url", url),
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", "Page not found — Propel Capital"),
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", desc),
      setMeta('meta[name="robots"]', "name", "robots", "noindex"),
    ];

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href") ?? null;
    canonical?.remove();

    return () => {
      document.title = prevTitle;
      restores.forEach((r) => r());
      if (prevCanonical && !document.head.querySelector('link[rel="canonical"]')) {
        const link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        link.setAttribute("href", prevCanonical);
        document.head.appendChild(link);
      }
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
