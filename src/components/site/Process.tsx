const STEPS = [
  { n: "01", t: "Send your deck", d: "Upload your pitch deck through our short form. We read every submission. Be bold and concise — we love a strong narrative and a clear wedge." },
  { n: "02", t: "First screening", d: "Our investment team screens your company within 2 weeks. We focus on the founders, the problem, the timing and the size of the opportunity." },
  { n: "03", t: "Founder meeting", d: "If there&apos;s a fit, we book a 45-minute call. This is your chance to bring the deck to life — and our chance to get to know you." },
  { n: "04", t: "Deep dive", d: "We do reference calls, dig into the market, and validate your tech and traction together with relevant angels from our network." },
  { n: "05", t: "Investment committee", d: "Your case is presented to the Propel investment committee. We give you a clear yes or no within days — never a maybe." },
  { n: "06", t: "Term sheet & onboarding", d: "We co-invest with our angels, sign a founder-friendly term sheet, and plug you into the full Sting ecosystem of coaches, partners and follow-on capital." },
];

export const Process = () => {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">How we invest</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1] text-foreground text-balance">
            From first email to first cheque in <span className="text-primary">4–6 weeks.</span>
          </h2>
          <p className="mt-6 text-foreground/70 text-lg">
            We respect your time. Our process is structured, transparent and moves fast — because great founders don&apos;t wait around.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((s) => (
            <div key={s.n} className="group relative rounded-2xl border border-border bg-background/60 backdrop-blur p-8 hover:border-primary/50 transition-all duration-300">
              <div className="font-display text-5xl text-primary/80 group-hover:text-primary transition-colors">{s.n}</div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{s.t}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.d }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};