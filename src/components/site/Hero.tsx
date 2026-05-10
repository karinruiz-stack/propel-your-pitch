import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-3 py-1 text-foreground/80 mb-8 text-base">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Sweden&apos;s most active angel club — by Sting since 2014
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tight text-foreground text-balance">
            We back bold
            <br />
            tech founders
            <br />
            <span className="text-primary">at the very start.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-foreground/75">
            Propel Capital invests in pre-seed Swedish tech startups with breakthrough ideas — pairing first-cheque capital with 120+ hands-on angels and the full force of the Sting ecosystem.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="hero" size="xl" id="pitch">
              <a href="https://www.sting.co" target="_blank" rel="noreferrer">
                Send us your pitch deck
                <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="#process">How we invest</a>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: "210+", l: "Startups backed" },
              { n: "120+", l: "Active angels" },
              { n: "57%", l: "Gets follow on investment" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-foreground/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative h-full w-full rounded-3xl border border-border bg-card/60 backdrop-blur-md p-8 shadow-card flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="uppercase tracking-[0.2em] text-foreground/60 text-2xl font-semibold">Propel Capital VII</span>
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              </div>
              <div>
                <div className="font-display text-foreground text-5xl">600,000 SEK</div>
                <div className="mt-2 text-foreground/70">Ticket size</div>
                <div className="mt-6 font-display text-foreground text-5xl">39 Propel angels</div>
                <div className="mt-6 h-px bg-border" />
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-foreground/60">Committed capital</div>
                    <div className="text-foreground font-medium mt-1">SEK 27M</div>
                  </div>
                  <div>
                    <div className="text-foreground/60">Stage</div>
                    <div className="text-foreground font-medium mt-1">Pre-seed</div>
                  </div>
                  <div>
                    <div className="text-foreground/60">Geography</div>
                    <div className="text-foreground font-medium mt-1">Sweden</div>
                  </div>
                  <div>
                    <div className="text-foreground/60">Sectors</div>
                    <div className="text-foreground font-medium mt-1">Climate, Health, AI, Deeptech</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};