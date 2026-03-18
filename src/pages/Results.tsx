import AnimatedSection from "@/components/AnimatedSection";
import { SectionEyebrow, SectionHeading, CtaButton, DarkCard } from "@/components/SharedUI";

const cases = [
  {
    icon: "🏫", sector: "Education", org: "Greenfield Academy", pkg: "Pro Website + AI Chatbot",
    metrics: [{ big: "6", label: "Days to launch" }, { big: "3hrs", label: "Saved weekly on calls" }, { big: "40%", label: "More enquiries" }],
    quote: "Linda delivered our school website in under a week. We went from having nothing online to a professional site our parents actually compliment. The chatbot saves our secretary hours every single week.",
    problem: "Greenfield Academy had no online presence. Parents couldn't find basic information like school fees, term dates, or admission requirements — leading to a constant flood of repetitive phone calls to the school office.",
    built: ["10-page Pro Website", "Admissions Portal", "Events Calendar", "AI Chatbot", "Photo Gallery", "WhatsApp Integration"],
    author: { initials: "JM", name: "James Mutua", role: "Principal, Greenfield Academy · Nairobi" },
  },
  {
    icon: "🌍", sector: "Non-Profit / NGO", org: "Jua Foundation", pkg: "Pro Website + Automations",
    metrics: [{ big: "5", label: "Days to launch" }, { big: "3×", label: "Online donations" }, { big: "80%", label: "Less manual admin" }],
    quote: "We needed a donation page and volunteer sign-up before our fundraiser — urgently. Linda built and launched everything in 5 days. Our online donations tripled that month. I still can't believe it.",
    problem: "Jua Foundation was preparing for a major fundraising drive but had no online donation mechanism. Volunteers had to be signed up via WhatsApp and manually tracked in spreadsheets — a time-consuming, error-prone process.",
    built: ["NGO Website", "Donation Page", "Volunteer Sign-Up", "Email Automation", "Impact Dashboard", "Donor Reports"],
    author: { initials: "AW", name: "Amina Wanjiku", role: "Executive Director, Jua Foundation · Nairobi" },
  },
  {
    icon: "🛍️", sector: "Retail / E-commerce", org: "Zawadi Boutique", pkg: "E-commerce + AI Chatbot",
    metrics: [{ big: "8", label: "Days to launch" }, { big: "M-Pesa", label: "Live from day 1" }, { big: "24/7", label: "Store always open" }],
    quote: "I was told by other agencies it would take 3 months. Linda had my full e-commerce store live in 8 days. The M-Pesa integration worked perfectly from day one. Truly done for me — I didn't have to think about anything.",
    problem: "Zawadi Boutique was selling exclusively through Instagram DMs — manually quoting prices, coordinating payments via M-Pesa screenshots, and tracking orders in WhatsApp. The owner was spending 4+ hours a day managing orders instead of growing the business.",
    built: ["Full E-commerce Store", "M-Pesa STK Push", "Order Dashboard", "AI Size Assistant", "Stock Tracking", "Customer Accounts"],
    author: { initials: "SK", name: "Sharon Kamau", role: "Founder, Zawadi Boutique · Nairobi" },
  },
];

const moreTestimonials = [
  { quote: "I kept putting off getting a website because every quote I received was overwhelming — both in price and timeline. Linda changed that completely. Clear price, clear timeline, clear result. Our church now has a beautiful site that our congregation shares with pride. And it took less than a week.", initials: "PO", name: "Pastor Paul Odhiambo", role: "Senior Pastor, Grace Community Church", tag: "Pro Website" },
  { quote: "The chatbot Linda built for us answers admissions questions at 2am. Parents love it. Our team loves the break.", initials: "RN", name: "Ruth Njoroge", role: "Head of Admissions, Sunshine School", tag: "AI Chatbot" },
  { quote: "We launched our online store during the December rush. M-Pesa worked from day one. Best investment of the year.", initials: "BK", name: "Brian Kariuki", role: "Owner, Savanna Crafts", tag: "E-commerce" },
  { quote: "Our donors can now read about our impact, see our projects, and donate online. Our grant applications have become so much stronger with a professional web presence.", initials: "CM", name: "Christine Mwangi", role: "Programs Manager, Uhai Initiative", tag: "Pro Website + Automations" },
  { quote: "I run a small clinic and Linda built us a booking system and informational website in 5 days. Patients can find us and book appointments. It's transformed how we operate.", initials: "DW", name: "Dr. Daniel Waweru", role: "Director, Afya Medical Centre", tag: "Pro Website" },
];

const industries = [
  { icon: "🏫", title: "Schools & Colleges", label: "Most served sector", desc: "Websites, admission systems, chatbots, and parent portals." },
  { icon: "🌍", title: "NGOs & Non-Profits", label: "Strong portfolio", desc: "Donor pages, impact dashboards, volunteer management, automations." },
  { icon: "🛍️", title: "Retail & E-commerce", label: "M-Pesa specialists", desc: "Full online stores with M-Pesa integration, order tracking, AI assistants." },
  { icon: "⛪", title: "Churches & Faith Orgs", label: "Growing sector", desc: "Church websites, giving pages, event calendars, sermon archives." },
];

const loveWall = [
  { quote: "Delivered exactly what she promised, exactly when she promised. That alone put her above every other person I've worked with.", author: "Grace O., School Administrator" },
  { quote: "The handover video she sent after launch was incredibly thoughtful. I finally feel like I understand my own website.", author: "Peter K., Business Owner" },
  { quote: "I was nervous about spending the money. Three months later, I only wish I'd done it sooner. The ROI is obvious.", author: "Janet M., Founder" },
  { quote: "She asked great questions upfront and barely needed to come back to me during the build. Completely painless process.", author: "Samuel N., NGO Director" },
  { quote: "Our parents now direct other school families to our website. It's become one of our best marketing tools.", author: "Mary W., School Principal" },
  { quote: "Fast, professional, and genuinely cares about the result. Linda is the only person I'll ever call for digital work.", author: "Alex C., Retail Business Owner" },
];

const Results = () => {
  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, hsl(8 79% 57% / 0.3), transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-[5%] text-center">
          <AnimatedSection>
            <SectionEyebrow>Client Results</SectionEyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Real organizations.<br />Real results.<br /><span className="italic text-primary">Real fast.</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every project on this page was built in under 10 days — and every client came in with a problem and left with a solution that's still working for them today.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { big: "3–7", small: "Days avg. delivery" },
                { big: "100%", small: "Done-for-you" },
                { big: "★5.0", small: "Average client rating" },
                { big: "0", small: "Projects missed deadline" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-2xl md:text-3xl font-bold">{s.big}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{s.small}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow>Featured Projects</SectionEyebrow>
            <SectionHeading>Case Studies</SectionHeading>
            <p className="font-body text-muted-foreground mt-4">A closer look at three projects that show exactly what working with AI by Linda looks like.</p>
          </AnimatedSection>

          <div className="space-y-12">
            {cases.map((cs, i) => (
              <AnimatedSection key={i}>
                <DarkCard hover={false} className="p-8 md:p-10">
                  <div className="flex flex-wrap gap-3 items-center mb-6">
                    <span className="text-2xl">{cs.icon}</span>
                    <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">{cs.sector}</span>
                    <span className="font-body text-xs text-muted-foreground">·</span>
                    <span className="font-display text-lg font-bold">{cs.org}</span>
                    <span className="ml-auto font-body text-xs text-primary font-medium">{cs.pkg}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {cs.metrics.map((m, j) => (
                      <div key={j} className="text-center p-4 rounded-card-md" style={{ background: "rgba(255,255,255,0.04)" }}>
                        <p className="font-display text-2xl font-bold text-primary">{m.big}</p>
                        <p className="font-body text-xs text-muted-foreground mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <blockquote className="font-body text-base italic text-muted-foreground border-l-2 border-primary pl-6 mb-8">
                    "{cs.quote}"
                  </blockquote>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">The Problem</p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">What Was Built</p>
                      <div className="flex flex-wrap gap-2">
                        {cs.built.map((b, j) => (
                          <span key={j} className="font-body text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">{b}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display text-sm font-bold text-primary">{cs.author.initials}</span>
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold">{cs.author.name}</p>
                      <p className="font-body text-xs text-muted-foreground">{cs.author.role}</p>
                    </div>
                  </div>
                </DarkCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MORE CLIENT VOICES */}
      <section className="py-20 md:py-28" style={{ background: "hsl(37 56% 96%)" }}>
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>More Client Voices</SectionEyebrow>
            <SectionHeading className="text-cream-foreground">What every client says after working with me.</SectionHeading>
            <p className="font-body mt-4" style={{ color: "hsl(222 42% 7% / 0.6)" }}>These are the words that keep me going — and the reason I do this work.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreTestimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-foreground rounded-card p-6 border h-full flex flex-col" style={{ borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <span className="inline-block px-2 py-0.5 text-[10px] font-body font-semibold text-primary bg-primary/10 rounded-full mb-3 self-start">{t.tag}</span>
                  <p className="font-body text-sm leading-relaxed flex-1 mb-4" style={{ color: "hsl(222 42% 7% / 0.7)" }}>"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display text-xs font-bold text-primary">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-cream-foreground">{t.name}</p>
                      <p className="font-body text-[11px]" style={{ color: "hsl(222 42% 7% / 0.5)" }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading>I've built for organizations like yours.</SectionHeading>
            <p className="font-body text-muted-foreground mt-4">Across sectors, across Kenya — the same fast, high-quality delivery every time.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <DarkCard className="text-center h-full">
                  <span className="text-3xl mb-3 block">{ind.icon}</span>
                  <h3 className="font-display text-lg font-bold mb-1">{ind.title}</h3>
                  <span className="font-body text-xs text-primary font-medium">{ind.label}</span>
                  <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">{ind.desc}</p>
                </DarkCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LOVE WALL */}
      <section className="py-20 md:py-28" style={{ background: "hsl(37 56% 96%)" }}>
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center mb-12">
            <SectionHeading className="text-cream-foreground">More words of appreciation</SectionHeading>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loveWall.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-foreground rounded-card-md p-6 border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "hsl(222 42% 7% / 0.7)" }}>"{item.quote}"</p>
                  <p className="font-body text-xs font-semibold" style={{ color: "hsl(222 42% 7% / 0.5)" }}>— {item.author}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-[5%] text-center">
          <AnimatedSection>
            <SectionEyebrow>You're next.</SectionEyebrow>
            <SectionHeading>Ready to become the<br />next success story?</SectionHeading>
            <p className="font-body text-muted-foreground mt-6 mb-8 max-w-xl mx-auto leading-relaxed">
              Every client on this page started with a single free call. Let's talk about your organization — what you need, what's possible, and what it would cost. No pressure. Just clarity.
            </p>
            <CtaButton to="/book">Book Your Free Call →</CtaButton>
            <p className="font-body text-xs text-muted-foreground mt-4">
              ✓ Free · ✓ 20 minutes · ✓ No obligation · ✓ Via WhatsApp or phone
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Results;
