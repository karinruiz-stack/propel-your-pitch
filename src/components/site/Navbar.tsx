import propelLogo from "@/assets/propel-logo-white.png";
import stingLime from "@/assets/sting-logo-lime.png";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center justify-between">
        <div className="flex items-end gap-3 min-w-0">
          <a href="#top" className="shrink-0">
            <img src={propelLogo} alt="Propel Capital" className="h-10 sm:h-14 md:h-20 w-auto" />
          </a>
          <a href="https://www.sting.co" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-1.5 pb-1 text-sm text-foreground/60 hover:text-foreground transition-colors">
            <span>Powered by</span>
            <img src={stingLime} alt="Sting" className="h-4 w-auto" />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#process" className="hover:text-primary transition-colors">Process</a>
          <a href="#angels" className="hover:text-primary transition-colors">Angels</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="hero" size="sm">
            <a href="mailto:propel@sting.co">Send pitch deck</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};