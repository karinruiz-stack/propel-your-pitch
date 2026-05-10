const COMPANIES = [
  "Beleco","Wehype","All Ears","Vyer Technologies","Waybler","Challengize","DP Organizer","Fairlo",
  "Float","Klimato","Mindmore","Imagi","Mendi","Foodla","Winteria","Pushappy","Learnster","Ugglo",
  "Relox Robotics","Pliance","Care to Translate","Defentry","Airmee","Zivi","Din Psykolog","Lylli",
  "Hypertype","All Aboard","Biorestore","EdAider","Dropmed","Boni Design","Sunt","Parsd","Revelate",
  "Hydroyal","Akira Science","Kura","Celluxtreme","Fictive Reality","Simulair","Brainzell","Utilizer",
  "PryvX","Hyggligt","Magnephy","Intellaif","Bright Materia","Occurence","Freya","Brave Onion",
  "ReBake","Seaqure Labs","Arkus AI",
];

const LogoChip = ({ name }: { name: string }) => (
  <div className="group flex items-center justify-center h-24 px-6 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-primary/40 transition-all duration-300">
    <span className="font-display text-lg md:text-xl text-foreground/70 group-hover:text-primary transition-colors whitespace-nowrap">
      {name}
    </span>
  </div>
);

export const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-primary">Portfolio</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.15] text-foreground text-balance">
            230+ startups.
            <br />
            <span className="text-primary">One mission:</span> build what matters.
          </h2>
          <p className="text-foreground/70 max-w-xl">
            From climate, health and deeptech to fintech, AI and space — a glimpse of the founders we&apos;ve been first to back.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {COMPANIES.map((c) => (
            <LogoChip key={c} name={c} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://www.sting.co/companies" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            Explore the full portfolio →
          </a>
        </div>
      </div>
    </section>
  );
};