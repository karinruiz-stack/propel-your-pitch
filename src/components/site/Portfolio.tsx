const COMPANIES = [
  "Airmee","Dreams","Enerpoly","Fairlo","Midsummer","BrainZell","Flox","Avanoro","Coverly","Empley",
  "Freya","Noctie","Olea","Peekerton","PryvX","Recapt","Revelate","Subscribly","SUNT","PaidTabs",
  "Buility","Mindforest","Watty","Tibber","Mentimeter","Bokio","Lendo","Karma","Anyfin","Detectify",
  "Mathem","Tictail","Trustly","Klarna","iZettle","Truecaller","Spotify","Northvolt","Voi","Einride",
  "Volta Greentech","Stilla","Polarium","Heart Aerospace","Kahoot","Acast","Epidemic Sound","Storytel",
  "Budbee","Instabox","Ageras","Ynvisible","Greenely","Modvion","Volumental","Gleechi","Univrses",
  "Imagimob","Watershed","Flasheye","Sensative","Soundtrap","Grok","Glooko","Lifesum","Joint Academy",
  "Doctrin","Min Doktor","Werlabs","Coala Life","Aifloo","Furhat Robotics","Embark Studios","Fishbrain",
  "Mojang","Resolution Games","Goodbye Kansas","Tobii","Voister","Yepstr","Tink","Toca Boca",
  "Universal Avenue","Babyshop","Footway","Lensway","Mathem","Refunder","Rebtel","Hövding","Tre",
  "Funnel","Mynewsdesk","Cervera","Apotea","Boozt","Pricerunner","Avanza","Hemnet","Wint","Mentimeter"
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
          {COMPANIES.slice(0, 48).map((c) => (
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