import { Mail, Linkedin, ChevronDown, FileText } from "lucide-react";
import { useState } from "react";

const FAQS = [
  { q: "What stage do you invest in?", a: "Pre-seed. We&apos;re typically the first institutional cheque and often the first external investor. We&apos;re often pre-revenue, sometimes pre-product but normally at least MVP or functional prototype in place with initial traction." },
  { q: "How much do you invest?", a: "Our standard ticket is 600 kSEK. You receive 400 kSEK upfront as a convertible note and 200 kSEK is co-invested as equity in the next round. After the upfront investment you&apos;ll get introduced to the Propel Capital VII angel network. Many companies later raise follow-on rounds from our angel network, leveraging our ~60% follow-on rate. A Propel Capital investment is a great way to kick-start your startup journey." },
  { q: "What are you looking for?", a: "Ambitious founders building tech-driven companies with global potential from Sweden. We back teams that are ready to go all-in — typically with at least an MVP or functional prototype and some early signal of traction. We care more about founder drive, market insight and the ability to execute than a polished pitch." },
  { q: "What are the investment terms?", a: "Ambitious founders building tech-driven companies with global potential from Sweden. We back exceptional teams that are ready to go all-in, and that have a bold idea that is solving a big important problem. You're typically 2-3 founders with an MVP or functional prototype in place, some early signals of traction, and a feasible business case. We care more about founder drive, market insight and the ability to execute than a polished pitch." },
  { q: "Do I have to be in the Sting program?", a: "Most Propel-backed companies go through a Sting program, but it&apos;s not a hard requirement. We evaluate every pitch on its own merit." },
  { q: "Who's behind Propel Capital?", a: "Propel Capital is run and managed by the team at Sting, Sweden's leading startup accelerator and ecosystem builder since 2002. We combine an experienced investment team with a network of 120+ angel investors — many of them successful founders, operators and executives from the Nordic tech ecosystem." },
  { q: "How does Propel Capital work?", a: "Propel Capital is a rolling pre-seed fund. We invest 600 kSEK per company — 400 kSEK upfront as a convertible and 200 kSEK as equity in the next round — and introduce you to our Propel Capital angel network for follow-on capital, advice and connections. Each fund vintage (we&apos;re currently on Propel Capital VII) backs a new cohort of founders alongside our angels." },
  { q: "Who are the investors in Propel Capital?", a: "Propel Capital is backed by a network of 120+ Nordic angel investors — successful founders, operators and executives — together with institutional anchors. The angels co-invest alongside the fund and often follow on in later rounds, which is a big reason behind our ~60% follow-on rate." },
  { q: "What sectors do you focus on?", a: "Tech-driven solutions across software, AI, climate, fintech, health and deeptech. If your idea has the potential to scale globally from Sweden, we want to hear from you." },
  { q: "How long does the process take?", a: "From first contact to signed term sheet, typically 4–6 weeks. We give you a clear yes or no — never a slow maybe.<br />If you get a no, you can still apply to Sting, and if you get accepted you can get reconsidered for an investment later, when you have come a bit further and have a stronger case." },
  { q: "Can international founders apply?", a: "We invest in companies registered in Sweden. If you&apos;re relocating, let&apos;s talk." },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border-b border-border py-5 group"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium text-foreground group-hover:text-primary transition-colors">{q}</span>
        <ChevronDown className={`h-4 w-4 text-foreground/60 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && (
        <p className="mt-3 text-sm text-foreground/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: a }} />
      )}
    </button>
  );
};

export const InfoCards = () => {
  return (
    <section id="faq" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-3 gap-6">
        {/* FAQ */}
        <div className="lg:col-span-2 rounded-3xl border border-border bg-card/40 p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">FAQ</div>
          <h3 className="font-display text-3xl md:text-4xl text-foreground mb-8">Questions, answered.</h3>
          <div>
            {FAQS.map((f) => <FaqItem key={f.q} {...f} />)}
          </div>
        </div>

        {/* Side column: Contact + Follow */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card/40 p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Contact</div>
            <h3 className="font-display text-2xl text-foreground mb-4">Let&apos;s talk.</h3>
            <p className="text-sm text-foreground/70 mb-6">Have a deck or just an idea? Send it over and we&apos;ll get back to you within two weeks.</p>
            <a href="mailto:hello@sting.co" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors mb-3">
              <Mail className="h-4 w-4" /> hello@sting.co
            </a>
            <a href="https://www.sting.co" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <FileText className="h-4 w-4" /> Submit pitch deck
            </a>
            <div className="mt-6 pt-6 border-t border-border text-xs text-foreground/60 leading-relaxed">
              Propel Capital<br />
              c/o Sting, A House<br />
              Östermalmsgatan 26A<br />
              114 26 Stockholm
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/40 p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Follow us</div>
            <h3 className="font-display text-2xl text-foreground mb-4">Stay in the loop.</h3>
            <p className="text-sm text-foreground/70 mb-6">News, portfolio updates and the occasional founder story.</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/company/sting-stockholm/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://www.sting.co" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
                sting.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};