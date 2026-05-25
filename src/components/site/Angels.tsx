const TOP_ROW = [
  "Google's first European R&D pioneer",
  "Built Pliance. Sold it.",
  "The brain behind Truecaller's growth",
  "Zero to 1,400 employees in healthcare",
  "Four tech giants",
  "Built and listed Addnode",
  "Ex Volvo Ventures and Inter IKEA",
  "Serial entrepreneur with three exits",
  "Founded PIR. Sold to Cision.",
  "From RSA Labs to serial angel",
  "From McKinsey to startup boards",
  "Half a career in China, now impact investor",
  "Media entrepreneur. Climate tech angel",
  "SaaS, medtech and listed companies",
];

const BOTTOM_ROW = [
  "Board WWF Sweden",
  "Top-tier real-estate M&A lawyer",
  "Ex-Marketing Director Microsoft Nordic",
  "PM Google Cloud Security",
  "Serial founder, ex-Microsoft",
  "Ex-Goldman Sachs / Morgan Stanley",
  "Banking/IT investor, 20+ yrs",
  "Professor KTH, Google Cloud Security",
  "Sr Director Enterprise New Relic",
  "Ex-Scania senior tech",
  "Steel-industry founder",
  "PhD epidemiology",
  "Founder, scaled software 0→€80M",
];

const AngelCard = ({ text }: { text: string }) => (
  <div className="shrink-0 w-72 rounded-2xl border border-border bg-card/60 backdrop-blur p-6 mr-4 flex items-center">
    <div className="font-medium text-foreground text-sm leading-relaxed">{text}</div>
  </div>
);

export const Angels = () => {
  const topRow = [...TOP_ROW, ...TOP_ROW];
  const bottomRow = [...BOTTOM_ROW, ...BOTTOM_ROW];
  return (
    <section id="angels" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-16">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">The Propel Angels</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1] text-foreground text-balance">
            120+ angels who&apos;ve built it before.
          </h2>
          <p className="mt-6 text-foreground/70 text-lg">
            When you raise from Propel, you don&apos;t just get capital — you get a hand-picked syndicate of operators, founders and investors who roll up their sleeves and help you win.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex marquee" style={{ width: "max-content" }}>
          {topRow.map((text, i) => <AngelCard key={`a-${i}`} text={text} />)}
        </div>
        <div className="flex marquee-slow mt-4" style={{ width: "max-content", transform: "translateX(-100px)" }}>
          {bottomRow.slice().reverse().map((text, i) => <AngelCard key={`b-${i}`} text={text} />)}
        </div>
      </div>
    </section>
  );
};
