import propelLogo from "@/assets/propel-logo-white.png";
import stingLime from "@/assets/sting-logo-lime.png";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center justify-between">
        <a href="#top" className="flex flex-col items-start gap-1">
          <img src={propelLogo} alt="Propel Capital" className="h-16 md:h-20 w-auto" />
          <a href="https://www.sting.co" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-foreground/60 hover:text-foreground transition-colors pl-0.5">
            <span>Powered by</span>
            <img src={stingLime} alt="Sting" className="h-3 w-auto" />
          </a>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#process" className="hover:text-primary transition-colors">Process</a>
          <a href="#angels" className="hover:text-primary transition-colors">Angels</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="hero" size="sm">
            <a href="#pitch">Send pitch deck</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};