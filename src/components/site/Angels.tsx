const FIRST_NAMES = ["Anna","Erik","Karin","Johan","Maria","Lars","Sara","Mikael","Linda","Anders","Petra","Magnus","Emma","Niklas","Sofia","Patrik","Helena","Fredrik","Camilla","Henrik","Lina","Daniel","Therese","Joakim","Cecilia","Andreas","Charlotta","Martin","Annika","Robert","Ida","Tobias","Malin","Christian","Sanna","Oskar","Jenny","David","Ulrika","Jonas","Caroline","Stefan","Julia","Filip","Frida","Marcus","Elin","Viktor","Hanna","Jesper"];
const LAST_NAMES = ["Andersson","Bergström","Carlsson","Dahl","Ek","Fors","Gustafsson","Hansen","Isaksson","Johansson","Karlsson","Lindberg","Magnusson","Nilsson","Olsson","Pettersson","Qvist","Rydberg","Sjögren","Törnqvist","Ulander","Viklund","Wahlberg","Yngvesson","Zetterberg","Åberg","Ödman","Holm","Sandberg","Lundgren","Forsberg","Engström","Norberg","Wikström","Hedlund","Söderberg","Lindström","Bergman","Holmberg","Ahlberg"];
const ROLES = ["Angel investor","Serial founder","Ex-CTO Spotify","Operator","Ex-CFO Klarna","Investor","Tech veteran","Ex-CMO","Founder & angel","Strategist","Ex-VP Eng","Board member","Climate investor","Deeptech angel","Fintech operator","SaaS founder","Healthtech angel","Marketplace expert","Growth lead","Ex-Northvolt"];

function seeded(i: number) {
  const f = FIRST_NAMES[i % FIRST_NAMES.length];
  const l = LAST_NAMES[(i * 7) % LAST_NAMES.length];
  const r = ROLES[(i * 3) % ROLES.length];
  return { name: `${f} ${l}`, initials: `${f[0]}${l[0]}`, role: r };
}

const ANGELS = Array.from({ length: 28 }, (_, i) => seeded(i));

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