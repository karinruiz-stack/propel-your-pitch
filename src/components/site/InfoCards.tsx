import { Mail, Linkedin, ChevronDown, FileText } from "lucide-react";
import { useState } from "react";

const FAQS = [
  { q: "Why is Propel Capital a good early investor for my startup?", a: "Because we offer more than just capital. As Sting&apos;s investment arm, a Propel investment comes paired with the Sting Core program — giving you hands-on support, structured sparring and access to Sweden&apos;s most experienced startup ecosystem from day one. You also get plugged into our network of 120+ Propel angels — successful founders, operators and executives who actively open doors, share know-how and often follow on in later rounds (we have a ~57% follow-on rate). We move fast, give clear answers, and back you with founder-friendly terms designed for the long run." },
  { q: "What stage do you invest in?", a: "Pre-seed. We&apos;re typically the first institutional cheque and often the first external investor. We&apos;re often pre-revenue, sometimes pre-product but normally at least MVP or functional prototype in place with initial traction." },
  { q: "How much do you invest?", a: "Our standard ticket is 600 kSEK. You receive 400 kSEK upfront as a convertible note and 200 kSEK is co-invested as equity in the next round. After the upfront investment you&apos;ll get introduced to the Propel Capital VII angel network. Many companies soon after raise rounds from our angel network, leveraging our 57% follow-on rate. A Propel Capital investment is a great way to kick-start your startup journey." },
  { q: "What are you looking for?", a: "Exceptional founders building tech-driven impact companies with global potential from Sweden. We back ambitious teams that are ready to go all-in, and that have a bold idea with strong moat, solving a big important societal problem with a large market. You're typically 2-3 founders with an MVP or functional prototype in place, some early signals of traction, and a scalable business. We care more about founder drive, market insight and the ability to execute than a polished pitch." },
  { q: "What are the investment terms?", a: "We invest 600 kSEK in total: 400 kSEK upfront on a standard convertible note and 200 kSEK as equity in your next priced round on the same terms as the lead. The convertible usually converts in the next round with a 30% discount and a cap. We keep terms founder-friendly, transparent and aligned with market standard for pre-seed in the Nordics.<br /><br />A Propel investment decision also means you're automatically accepted to the Sting Core program, and you will need to sign the Sting Core agreement at the same time as the Propel investment agreement. It will give you the full force of the Sting brand and ecosystem to help you achieve success faster, while de-risking the investment for the Propel angels. The Sting Core program fee - a 2% warrant - is additional to the Propel investment." },
  { q: "Do I have to be in the Sting program?", a: "Yes. Propel Capital is Sting's investment arm and to receive a Propel investment you need to be a Sting company. You become a Sting company by joining the Sting Core or Sting Race program.<br /><br />There are two paths you can receive an investment from Propel Capital, and join Sting. You can either start with applying for a Propel-investment, and a positive investment decision then means you're also accepted into the Sting Core program. In this case you need to sign the Sting Core agreement at the same time as the investment agreement. Or you can start with applying to Sting Core or Sting Race, and if you're accepted you may be considered for a Propel Capital investment once you've started the program. In this case an investment is not guaranteed." },
  { q: "How long does the process take?", a: "From first contact to signed investment agreement, typically 4–6 weeks. We give you a clear yes or no — never a slow maybe.<br /><br />If you get a no, you can still apply to Sting Core or Sting Race, and if you get accepted you can get reconsidered for an investment later, when you have come a bit further and have a stronger case." },
  { q: "Who's behind Propel Capital?", a: "Propel Capital is run and managed by the team at Sting, Sweden's leading startup accelerator and ecosystem builder since 2002. Propel Capital combines an experienced investment team with a network of 120+ angel investors — many of them successful founders, operators and executives from the Nordic tech ecosystem.<br /><br />Propel Capital I was launched in 2014. It's currently on its seventh generation - Propel Capital VII - and has since the start made 230+ investments and engaged 120+ Propel angels. This makes Propel Capital the most active private investor in the Nordics.<br /><br />Propel Capital VII was launched in 2025 and has 27 MSEK in committed capital from 39 angel investors and Saminvest. Emanuel Andersson is the CEO of Propel Capital. Propel Capital has a board of director consisting of five Propel angels and the CEO of Sting." },
  { q: "How does Propel Capital work?", a: "Propel Capital is a rolling pre-seed angel investment company. We invest 600 kSEK per company — 400 kSEK upfront as a convertible and 200 kSEK as equity in the next round — and introduce you to our Propel Capital angel network for follow-on capital, advice and connections. Each fund vintage (we're currently on Propel Capital VII) backs a new cohort of founders and provides curated dealflow to our Propel angels.<br /><br />You apply for a Propel investment by sending in your pitch deck. An investment decision is paired with an intake decision to Sting Core for full force support from the Sting team and ecosystem. You need to be headquartered in Sweden to be able to receive a Propel investment." },
  { q: "What should my pitch deck cover?", a: "Keep it concise (10–15 slides) and tell a clear story. We want to understand: your vision and why; the problem you're solving and why it matters now; your solution and what makes it hard to copy; the market size and opportunity; your business model, go-to-market and scalability; traction so far (users, revenue, pilots, LOIs); the competitive landscape and your wedge; the founding team and why you're the ones to win; cap table and any investments or grants so far; 12-18 months roadmap and how you will use the Propel investment.<br /><br />Be bold and specific — we'd rather see strong opinions and a sharp narrative than a polished but vague deck. A short demo video or product screenshots help a lot." },
  { q: "What sectors do you focus on?", a: "Tech-driven solutions across climate, energy, health, industrials, security, and more, powered by frontier technologies such as AI, next-gen compute, biotech and advanced materials. If your idea has the potential to reshape the future and scale globally from Sweden, we want to hear from you." },
  { q: "Can international founders apply?", a: "We invest in companies registered in Sweden. If you&apos;re relocating your HQ, let&apos;s talk." },
   { q: "How can I join Propel Capital and become a Propel angel?", a: "Propel angels are experienced founders, operators, investors and executives from the Nordic and European tech ecosystem who want to back the next generation of ambitious startups in Sweden — and stay close to the action at Sting. <br /><br />As a Propel angel you commit capital to the Propel angel investment company, get access to all investment opportunities, and can choose to follow on directly into companies you find particularly exciting. You also get access to the Propel Capital investment platform,  and join a tight-knit angel club of 120+ peers who actively share deal flow, expertise and networks. You are expected to be interested in doing follow on investments and open to share your network and advice with the Propel portfolio companies you are an indirect shareholder in. <br /><br />If you're interested in joining Propel Capital VIII, reach out to us at propel@sting.co and we'll take it from there." },
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
             <a href="mailto:propel@sting.co" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors mb-3">
               <Mail className="h-4 w-4" /> propel@sting.co
            </a>
            <a href="mailto:propel@sting.co" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
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
              <a href="https://www.linkedin.com/company/stingsthlm/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
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