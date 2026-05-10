import stingLime from "@/assets/sting-logo-lime.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-base text-foreground/60">
          <span className="font-display text-foreground text-lg">Propel Capital</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <a href="https://www.sting.co" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors">
          <span>Powered by</span>
          <img src={stingLime} alt="Sting" className="h-5 w-auto" />
        </a>
      </div>
    </footer>
  );
};