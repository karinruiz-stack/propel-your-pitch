const MEN = [
  "Christian Said","Erik Markman","Fredrik Cardelius","Jan-Eric Ramberg","Joao Champalimaud",
  "Johan Björksten","Jonas Deibbe","Jonas Nodler","Krister Sundling","Lars Appelstål",
  "Lars Gullikson","Magnus Sandberg","Maths Olsson","Niclas Lilja","Siam Choudhury",
  "Simon Josefsson","Tommy Forsell","Pär Uhlin","Robert Lagerström","Mathias Wilkne",
  "Marcus Hedlund","Ludvig Linge","Lars Lindgren","Richard Tejme","Mattias Weinhandl",
  "Martin Gren","Håkan Roos","Giovanni Fili","Erik Byrenius","Daniel Pilotti",
];

const WOMEN = [
  "Erika Åslund","Frida Schein","Ira Blinkovskaja","Louise Richnau","Louise Sander",
  "Sofia Chedivili","Susanne Elias","Alexandra Tsampikakis","Johana Landström","Magdalena Gerger",
  "Eva Reman","Anna Ljungbergh","Boel Rydenå Swartling","Louise Brandt","Shori Zand",
  "Charlotte Mattfolk","Christina Arnell","Ingrid Salén",
];

function interleave(men: string[], women: string[]) {
  const ratio = men.length / women.length;
  const result: string[] = [];
  let mi = 0, wi = 0;
  while (mi < men.length || wi < women.length) {
    const target = wi * ratio;
    if (mi < men.length && (mi <= target || wi >= women.length)) {
      result.push(men[mi++]);
    } else if (wi < women.length) {
      result.push(women[wi++]);
    }
  }
  return result;
}

const NAMES = interleave(MEN, WOMEN);

const ANGELS = NAMES.map((name) => {
  const parts = name.split(" ");
  const initials = `${parts[0][0]}${parts[parts.length - 1][0]}`;
  return { name, initials };
});

const AngelCard = ({ a }: { a: { name: string; initials: string; role: string } }) => (
  <div className="shrink-0 w-72 rounded-2xl border border-border bg-card/60 backdrop-blur p-6 mr-4">
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-display text-primary text-lg">
        {a.initials}
      </div>
      <div>
        <div className="font-medium text-foreground">{a.name}</div>
        <div className="text-xs text-foreground/60 mt-0.5">{a.role}</div>
      </div>
    </div>
  </div>
);

export const Angels = () => {
  const row = [...ANGELS, ...ANGELS];
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
          {row.map((a, i) => <AngelCard key={`a-${i}`} a={a} />)}
        </div>
        <div className="flex marquee-slow mt-4" style={{ width: "max-content", transform: "translateX(-100px)" }}>
          {row.slice().reverse().map((a, i) => <AngelCard key={`b-${i}`} a={a} />)}
        </div>
      </div>
    </section>
  );
};