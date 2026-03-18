import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { SectionEyebrow, SectionHeading, CtaButton, DarkCard, LightCard } from "@/components/SharedUI";
import lindaHero from "@/assets/linda-hero.jpg";
import logo from "@/assets/aibylindalogo.png";

const trustTools = ["⚡ Lovable", "🔷 Bolt", "🗄️ Supabase", "▲ Vercel", "🌿 Netlify", "🤖 Claude AI", "💬 ChatGPT"];

const painCards = [
  { icon: "😩", title: "We have no website and it's embarrassing.", desc: "Parents and partners look you up online and find nothing — it immediately raises doubt about your credibility." },
  { icon: "⏳", title: "We were quoted 3–6 months and KES 300,000.", desc: "Traditional agencies are slow, expensive, and overcomplicated. You don't need all that." },
  { icon: "📞", title: "Our staff spends hours answering the same questions.", desc: "Admissions, fees, locations, opening hours — an AI chatbot handles all of it, 24 hours a day." },
  { icon: "🛒", title: "We want to sell online but don't know where to start.", desc: "A full e-commerce store with M-Pesa integration, built and live within 10 days." },
];

const serviceCards = [
  {
    title: "Websites", price: "From KES 25,000",
    desc: "A clean, professional website that builds instant credibility — for schools, NGOs, churches, and businesses.",
    features: ["5–10 pages, fully designed", "Mobile-responsive", "Contact forms & maps", "Live in 3–7 days"],
  },
  {
    title: "E-commerce Stores", price: "From KES 100,000",
    desc: "Sell your products online with M-Pesa payments, order management, and a store your customers will love.",
    features: ["Full product catalogue", "M-Pesa & card payments", "Order tracking dashboard", "Live in 7–10 days"],
  },
  {
    title: "Chatbots & Automations", price: "From KES 30,000",
    desc: "An AI assistant that answers questions, captures leads, and automates repetitive tasks — so your team doesn't have to.",
    features: ["Trained on your content", "24/7 availability", "Email & workflow automations", "Integrates with your site"],
  },
];

const steps = [
  { num: "01", title: "Free 20-Min Call", desc: "We talk about your organization, what you need, and what I'd recommend. No commitment — just clarity." },
  { num: "02", title: "You Get a Clear Proposal", desc: "A flat-rate quote, your deliverables, and your timeline. A 50% deposit kicks off the project." },
  { num: "03", title: "I Build It", desc: "You fill a simple brief. I do all the building. You get a preview link to review before anything goes live." },
  { num: "04", title: "Launch & Handover", desc: "Your site goes live. I send you a recorded walkthrough so you're fully in control from day one." },
];

const testimonials = [
  {
    quote: "Linda delivered our school website in under a week. We went from having nothing online to a professional site our parents actually compliment. The chatbot has saved our secretary hours every single week.",
    initials: "JM", name: "James Mutua", role: "Principal, Greenfield Academy",
  },
  {
    quote: "We needed a donation page before our fundraiser — urgently. Linda built everything and launched it in 5 days. Our online donations tripled that month. I couldn't believe it.",
    initials: "AW", name: "Amina Wanjiku", role: "Director, Jua Foundation",
  },
  {
    quote: "I was told by other agencies it would take 3 months. Linda had my full e-commerce store live in 8 days. The M-Pesa integration worked perfectly from day one. Truly done for me.",
    initials: "SK", name: "Sharon Kamau", role: "Founder, Zawadi Boutique",
  },
];

const Index = () => {
  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, hsl(8 79% 57% / 0.3), transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-[5%] py-20 md:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Linda's photo */}
            <AnimatedSection className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-[300px] md:w-[380px] aspect-[3/4] rounded-[24px] overflow-hidden border-2 border-border shadow-2xl shadow-primary/10">
                  <img src={lindaHero} alt="Linda — Founder of AI by Linda" className="w-full h-full object-cover object-top" />
                </div>
                {/* Floating service card */}
                <div className="absolute -right-4 md:-right-12 bottom-8 rounded-card-md border border-border p-4 w-[220px] shadow-xl" style={{ background: "rgba(21,28,46,0.95)", backdropFilter: "blur(12px)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <img src={logo} alt="" className="w-6 h-6" />
                    <div>
                      <p className="text-xs font-body font-semibold text-foreground">AI by Linda</p>
                      <p className="text-[10px] font-body text-muted-foreground">AI Digital Solutions · Nairobi</p>
                    </div>
                    <span className="ml-auto text-[10px] font-body font-medium text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">Open</span>
                  </div>
                  <div className="space-y-2 text-xs font-body">
                    <div className="flex justify-between text-muted-foreground"><span>🌐 Starter Website</span><span className="text-foreground">From 25K</span></div>
                    <div className="flex justify-between text-muted-foreground"><span>🚀 Pro Website</span><span className="text-foreground">From 60K</span></div>
                    <div className="flex justify-between text-muted-foreground"><span>🛒 E-commerce Store</span><span className="text-foreground">From 100K</span></div>
                    <div className="flex justify-between text-muted-foreground"><span>🤖 AI Chatbot</span><span className="text-foreground">From 30K</span></div>
                  </div>
                  <Link to="/book" className="mt-3 w-full block text-center text-xs font-body font-semibold py-2 rounded-md bg-primary text-primary-foreground hover:bg-coral-light transition-colors">
                    Book a Free Call →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Hero text */}
            <AnimatedSection delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 text-xs font-body font-medium uppercase tracking-widest" style={{ background: "rgba(232,83,58,0.1)", borderColor: "rgba(232,83,58,0.3)", color: "hsl(10,100%,66%)" }}>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
                🇰🇪 Based in Nairobi · Available Now
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6">
                Your school deserves<br />
                <span className="italic text-primary">a website that works</span><br />
                as hard as you do.
              </h1>

              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                I'm Linda. I build <span className="text-foreground font-medium">AI-powered websites, e-commerce stores, chatbots and automations</span> for schools, NGOs, and businesses across Kenya — delivered in days, fully done for you, at a flat price.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <CtaButton to="/book">Book a Free 20-Min Call →</CtaButton>
                <CtaButton to="/results" variant="ghost">See what I build</CtaButton>
              </div>

              <div className="flex gap-8 md:gap-12">
                {[
                  { big: "3–7", small: "Days to deliver" },
                  { big: "Flat", small: "Rate pricing" },
                  { big: "100%", small: "Done for you" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.big}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">{stat.small}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border py-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-6xl mx-auto px-[5%]">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <span className="text-xs font-body uppercase tracking-widest text-muted-foreground">Built using</span>
            {trustTools.map((tool) => (
              <span key={tool} className="text-sm font-body text-muted-foreground">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 md:py-28" style={{ background: "hsl(37 56% 96%)" }}>
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow>The Real Problem</SectionEyebrow>
            <SectionHeading className="text-cream-foreground">
              A great organization with <span className="italic text-primary">no digital presence</span> is invisible.
            </SectionHeading>
            <p className="font-body text-base md:text-lg mt-6 leading-relaxed" style={{ color: "hsl(222 42% 7% / 0.7)" }}>
              Parents search online before enrolling their children. Donors research before giving. Customers check websites before buying. If your school or organization isn't showing up — someone else is, and they're getting the call.
            </p>
            <p className="font-body text-base md:text-lg mt-4 leading-relaxed" style={{ color: "hsl(222 42% 7% / 0.7)" }}>
              The good news? You don't need a big IT team, a long development timeline, or a fortune to fix this. You just need the right person with the right tools.
            </p>
            <Link to="/book" className="inline-flex items-center gap-2 mt-6 font-body text-sm font-semibold text-primary hover:text-coral-light transition-colors">
              Let's fix this together →
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {painCards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-foreground rounded-card p-6 md:p-8 border transition-all duration-300 hover:-translate-y-1" style={{ borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <span className="text-3xl mb-4 block">{card.icon}</span>
                  <h3 className="font-display text-lg font-bold text-cream-foreground mb-2">{card.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(222 42% 7% / 0.6)" }}>{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow>What I Build</SectionEyebrow>
            <SectionHeading>
              Everything your organization needs<br />to show up and grow online.
            </SectionHeading>
            <p className="font-body text-muted-foreground mt-4">Fixed prices. Clear deliverables. No tech jargon. Just results.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceCards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <DarkCard className="h-full flex flex-col">
                  <p className="font-body text-xs text-primary font-semibold uppercase tracking-wider mb-1">{card.price}</p>
                  <h3 className="font-display text-xl font-bold mb-3">{card.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{card.desc}</p>
                  <ul className="mt-auto space-y-2">
                    {card.features.map((f, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </DarkCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <p className="font-body text-sm text-muted-foreground mb-4">Every package includes hosting setup, 1 round of revisions, and a handover walkthrough.</p>
            <CtaButton to="/services">View Full Pricing →</CtaButton>
          </AnimatedSection>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-[5%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { big: "3–7", small: "Days average delivery time" },
              { big: "100%", small: "Done-for-you, no DIY required" },
              { big: "KES", small: "Flat-rate pricing, zero surprises" },
              { big: "🇰🇪", small: "Proudly built in Nairobi, Kenya" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">{s.big}</p>
                <p className="font-body text-xs text-primary-foreground/70 mt-2">{s.small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow>The Process</SectionEyebrow>
            <SectionHeading>
              From first message to<br />live website in 4 steps.
            </SectionHeading>
            <p className="font-body text-muted-foreground mt-4">No long discovery phases. No confusing back-and-forth. Just a simple, fast process built around your time.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <DarkCard className="h-full">
                  <span className="font-display text-4xl font-bold text-primary/30">{step.num}</span>
                  <h3 className="font-display text-lg font-bold mt-3 mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </DarkCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28" style={{ background: "hsl(37 56% 96%)" }}>
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center mb-16">
            <SectionHeading className="text-cream-foreground">
              Organizations that took the leap — and didn't look back.
            </SectionHeading>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-foreground rounded-card p-6 md:p-8 border h-full flex flex-col" style={{ borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <p className="font-body text-sm leading-relaxed flex-1 mb-6" style={{ color: "hsl(222 42% 7% / 0.7)" }}>"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display text-sm font-bold text-primary">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-cream-foreground">{t.name}</p>
                      <p className="font-body text-xs" style={{ color: "hsl(222 42% 7% / 0.5)" }}>{t.role}</p>
                    </div>
                  </div>
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
            <SectionEyebrow>Ready to get started?</SectionEyebrow>
            <SectionHeading>
              Your digital presence<br />starts with one call.
            </SectionHeading>
            <p className="font-body text-muted-foreground mt-6 mb-8 max-w-xl mx-auto leading-relaxed">
              Book a free 20-minute call and I'll review your current online presence, tell you exactly what I'd build, and give you a clear quote. No pressure. No commitment. No tech jargon.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <CtaButton to="/book">Book Your Free Call →</CtaButton>
              <CtaButton to="/services" variant="ghost">See full pricing</CtaButton>
            </div>
            <p className="font-body text-xs text-muted-foreground">
              ✓ Free audit · ✓ No obligation · ✓ Response within 24 hours
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
