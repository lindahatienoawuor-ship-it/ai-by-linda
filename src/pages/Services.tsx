import AnimatedSection from "@/components/AnimatedSection";
import { SectionEyebrow, SectionHeading, CtaButton, DarkCard } from "@/components/SharedUI";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const guarantees = ["✓ Flat-rate pricing", "✓ 50% deposit to start", "✓ 1 revision round included", "✓ Delivered in 3–10 days", "✓ Handover walkthrough video", "✓ Hosting setup included"];

const packages = [
  {
    icon: "🌐", title: "Starter Website", badge: null,
    tagline: "Perfect for schools, churches, NGOs and businesses that need a credible online home — fast.",
    price: "From 25K KES", timeline: "⚡ Delivered in 3–5 days",
    features: ["Up to 5 pages (Home, About, Services, Gallery, Contact)", "Fully mobile-responsive design", "Contact form & WhatsApp button", "Google Maps integration", "Basic SEO setup (titles, descriptions)", "Hosted on Netlify or Vercel"],
    also: ["Domain connection support", "1 round of revisions", "Loom handover walkthrough"],
  },
  {
    icon: "🚀", title: "Pro Website", badge: "⭐ Most Popular",
    tagline: "A powerful dynamic site you can manage yourself — with a built-in CMS, blog, events and more.",
    price: "From 60K KES", timeline: "⚡ Delivered in 5–7 days",
    features: ["Up to 10 pages — fully designed", "Dynamic content system (Supabase CMS)", "News / blog / events section you can update", "Newsletter signup with email automation", "SEO-optimized structure", "Google Analytics setup", "Password-protected admin area"],
    also: ["Everything in Starter", "Priority delivery", "30-day post-launch support"],
  },
  {
    icon: "🛒", title: "E-commerce Store", badge: null,
    tagline: "A full online store — sell your products, accept M-Pesa payments, and manage orders with ease.",
    price: "From 100K KES", timeline: "⚡ Delivered in 7–10 days",
    features: ["Full product catalogue (unlimited products)", "M-Pesa & card payment integration", "Order management dashboard", "Stock / inventory tracking", "Customer accounts & order history", "Delivery / shipping options", "Promo codes & discounts"],
    also: ["Everything in Pro", "M-Pesa testing & go-live support", "60-day post-launch support"],
  },
];

const addons = [
  { icon: "🤖", title: "AI Chatbot", price: "From KES 30,000", desc: "A smart AI assistant trained on your specific content — handles admissions enquiries, FAQs, product questions, and lead capture 24/7. No staff needed." },
  { icon: "⚙️", title: "Automations & Workflows", price: "From KES 40,000", desc: "Automate the repetitive work — form submissions trigger emails, leads go into a spreadsheet, WhatsApp notifications fire automatically. Save hours every week." },
  { icon: "📱", title: "AI Social Media Content", price: "From KES 15,000/mo", desc: "Monthly social media content — posts, captions, and graphics — created using AI and tailored to your brand voice. Posted for you or delivered ready to publish." },
  { icon: "📧", title: "Email Marketing Setup", price: "From KES 20,000", desc: "A complete email list setup — signup forms, welcome sequences, and newsletter templates — so you can stay in touch with your audience automatically." },
];

const retainerFeatures = [
  "Hosting management & uptime monitoring",
  "Monthly content updates (text, images, pages)",
  "Security & software updates",
  "1 new automation or workflow per month",
  "Priority WhatsApp support (24hr response)",
  "Monthly performance report",
  "Quarterly strategy check-in call",
];

const comparisonRows = [
  { label: "Delivery time", linda: "3–10 days", agency: "2–6 months", freelancer: "Unknown", diy: "You do all the work" },
  { label: "Flat-rate pricing", linda: "✓", agency: "✗", freelancer: "✗", diy: "✗" },
  { label: "AI-powered builds", linda: "✓", agency: "✗", freelancer: "Rarely", diy: "✗" },
  { label: "M-Pesa integration", linda: "✓", agency: "Extra cost", freelancer: "Maybe", diy: "✗" },
  { label: "Handover walkthrough", linda: "✓", agency: "✗", freelancer: "Rarely", diy: "N/A" },
  { label: "Kenyan market knowledge", linda: "✓", agency: "Sometimes", freelancer: "Rarely", diy: "✗" },
  { label: "Starting price", linda: "KES 25,000", agency: "KES 200,000+", freelancer: "Unpredictable", diy: "Your time + monthly fees" },
];

const processSteps = [
  { num: "1", title: "Free Call", desc: "20 minutes to understand your needs and recommend the right package." },
  { num: "2", title: "Proposal", desc: "You get a flat quote, clear deliverables, and a timeline within 24 hours." },
  { num: "3", title: "Deposit", desc: "50% deposit to start. This locks in your slot and we begin within 24 hours." },
  { num: "4", title: "Brief", desc: "Fill a simple form with your logo, photos and content. That's all I need." },
  { num: "5", title: "Review", desc: "You get a preview link. Share feedback. 1 revision round is included." },
  { num: "6", title: "Launch 🚀", desc: "Final payment, your site goes live, and you get a full walkthrough video." },
];

const faqs = [
  { q: "Do I need to provide all the content and photos?", a: "I'll send you a simple brief form that takes 15–30 minutes to fill. You provide your logo, any existing photos, and the key information about your organization. If you don't have professional photos, I'll guide you on affordable options. I can also write the copy for your site as an add-on." },
  { q: "What happens if I need changes after launch?", a: "Every package includes 1 round of revisions before launch. After launch, small updates (text, photos, links) are included in the monthly retainer. For larger changes, I'll quote them separately at a fair rate." },
  { q: "Will I be able to manage the site myself?", a: "Yes — every project comes with a recorded Loom walkthrough video showing you exactly how to make common updates. Pro website and e-commerce packages include a built-in content management system so you can update your own content without touching any code." },
  { q: "How does the M-Pesa integration work?", a: "I integrate M-Pesa STK Push (the standard payment prompt your customers know) directly into your e-commerce store. You'll need a registered business Safaricom paybill or till number. I handle all the technical setup and testing — you just receive the payments to your account." },
  { q: "Can you work with schools and NGOs specifically?", a: "Absolutely — schools and NGOs are my primary focus. I understand your unique needs: admissions pages, event calendars, donation systems, donor reports, staff directories, and the professional tone that builds trust with parents and funders." },
  { q: "What if I already have a website but want improvements?", a: "No problem. Book a free call and I'll audit your existing site and tell you exactly what I'd improve, upgrade, or rebuild. Sometimes a few strategic changes make a huge difference — I'll only recommend what you actually need." },
];

const Services = () => {
  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, hsl(8 79% 57% / 0.3), transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-[5%] text-center">
          <AnimatedSection>
            <SectionEyebrow>Services & Pricing</SectionEyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Everything you need to<br />show up, stand out,<br />and grow online.
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Flat-rate packages. Clear deliverables. No hidden fees, no tech jargon, no surprises. Just fast, beautiful digital work — done entirely for you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* GUARANTEE STRIP */}
      <section className="border-y border-border py-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-6xl mx-auto px-[5%]">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {guarantees.map((g) => (
              <span key={g} className="font-body text-sm text-muted-foreground">{g}</span>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN PACKAGES */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow>Main Packages</SectionEyebrow>
            <SectionHeading>Pick your package.<br />I'll handle the rest.</SectionHeading>
            <p className="font-body text-muted-foreground mt-4">Choose the package that fits your organization. Not sure which one? Book a free call and I'll tell you exactly what you need — and what you don't.</p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <DarkCard className={`h-full flex flex-col relative ${pkg.badge ? "border-primary/40" : ""}`}>
                  {pkg.badge && (
                    <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-body font-semibold bg-gold text-accent-foreground rounded-full">{pkg.badge}</span>
                  )}
                  <span className="text-3xl mb-3">{pkg.icon}</span>
                  <h3 className="font-display text-xl font-bold mb-1">{pkg.title}</h3>
                  <p className="font-body text-xs text-muted-foreground mb-3">{pkg.tagline}</p>
                  <p className="font-display text-2xl font-bold text-primary mb-1">{pkg.price}</p>
                  <p className="font-body text-xs text-muted-foreground mb-6">{pkg.timeline}</p>
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <p key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5 shrink-0">✓</span> {f}
                      </p>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="font-body text-xs text-muted-foreground font-semibold mb-2">Also included:</p>
                    {pkg.also.map((a, j) => (
                      <p key={j} className="font-body text-xs text-muted-foreground">· {a}</p>
                    ))}
                  </div>
                </DarkCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 md:py-28" style={{ background: "hsl(37 56% 96%)" }}>
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow>Add-ons & Upgrades</SectionEyebrow>
            <SectionHeading className="text-cream-foreground">Power up any package with smart add-ons.</SectionHeading>
            <p className="font-body mt-4" style={{ color: "hsl(222 42% 7% / 0.6)" }}>These can be added to any package above, or booked as standalone services if you already have a website.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {addons.map((addon, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-foreground rounded-card p-6 md:p-8 border h-full" style={{ borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <span className="text-3xl mb-3 block">{addon.icon}</span>
                  <h3 className="font-display text-lg font-bold text-cream-foreground mb-1">{addon.title}</h3>
                  <p className="font-body text-sm font-semibold text-primary mb-3">{addon.price}</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(222 42% 7% / 0.6)" }}>{addon.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MONTHLY RETAINER */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <SectionEyebrow>Monthly Partnership</SectionEyebrow>
              <SectionHeading>Don't just launch.<br />Keep growing.</SectionHeading>
              <p className="font-body text-muted-foreground mt-6 leading-relaxed">Your website is a living thing — it needs updates, security, new content, and ongoing improvements to keep performing. My monthly retainer keeps everything running perfectly so you can focus on running your organization.</p>
              <p className="font-body text-muted-foreground mt-4 leading-relaxed">Most clients add this after their first project. It pays for itself in the hours it saves your team.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <DarkCard hover={false} className="relative">
                <span className="absolute -top-3 right-6 px-3 py-1 text-xs font-body font-semibold rounded-full" style={{ background: "hsl(44 52% 54%)", color: "hsl(222 42% 7%)" }}>Premium</span>
                <p className="font-display text-4xl font-bold text-primary mb-1">8K KES</p>
                <p className="font-body text-sm text-muted-foreground mb-6">per month · cancel anytime</p>
                <div className="space-y-3 mb-8">
                  {retainerFeatures.map((f, i) => (
                    <p key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5 shrink-0">✓</span> {f}
                    </p>
                  ))}
                </div>
                <CtaButton to="/book">Ask About the Retainer →</CtaButton>
              </DarkCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 md:py-28" style={{ background: "hsl(37 56% 96%)" }}>
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>Why AI by Linda?</SectionEyebrow>
            <SectionHeading className="text-cream-foreground">AI by Linda vs. everyone else.</SectionHeading>
            <p className="font-body mt-4" style={{ color: "hsl(222 42% 7% / 0.6)" }}>See why organizations choose AI by Linda over traditional agencies, freelancers, and DIY website builders.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] bg-foreground rounded-card overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    <th className="text-left p-4 font-body text-sm font-semibold text-cream-foreground">Feature</th>
                    <th className="p-4 font-body text-sm font-semibold text-primary">AI by Linda</th>
                    <th className="p-4 font-body text-sm font-semibold text-cream-foreground">Agency</th>
                    <th className="p-4 font-body text-sm font-semibold text-cream-foreground">Freelancer</th>
                    <th className="p-4 font-body text-sm font-semibold text-cream-foreground">DIY</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b last:border-0" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                      <td className="p-4 font-body text-sm text-cream-foreground font-medium">{row.label}</td>
                      <td className="p-4 font-body text-sm text-center font-semibold text-primary">{row.linda}</td>
                      <td className="p-4 font-body text-sm text-center" style={{ color: "hsl(222 42% 7% / 0.5)" }}>{row.agency}</td>
                      <td className="p-4 font-body text-sm text-center" style={{ color: "hsl(222 42% 7% / 0.5)" }}>{row.freelancer}</td>
                      <td className="p-4 font-body text-sm text-center" style={{ color: "hsl(222 42% 7% / 0.5)" }}>{row.diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow>The Process</SectionEyebrow>
            <SectionHeading>From first message<br />to live in 6 steps.</SectionHeading>
            <p className="font-body text-muted-foreground mt-4">Simple, transparent, and fast. Here's exactly how every project runs.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <DarkCard className="h-full">
                  <span className="font-display text-3xl font-bold text-primary/30">{step.num}</span>
                  <h3 className="font-display text-lg font-bold mt-2 mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </DarkCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28" style={{ background: "hsl(37 56% 96%)" }}>
        <div className="max-w-3xl mx-auto px-[5%]">
          <AnimatedSection className="text-center mb-12">
            <SectionHeading className="text-cream-foreground">Questions? Answered.</SectionHeading>
            <p className="font-body mt-4" style={{ color: "hsl(222 42% 7% / 0.6)" }}>Everything you need to know before getting started.</p>
          </AnimatedSection>

          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-foreground rounded-card-md border px-6" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <AccordionTrigger className="font-body text-sm font-semibold text-cream-foreground py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm leading-relaxed pb-5" style={{ color: "hsl(222 42% 7% / 0.6)" }}>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-[5%] text-center">
          <AnimatedSection>
            <SectionEyebrow>Ready to start?</SectionEyebrow>
            <SectionHeading>Not sure which package<br />is right for you? Let's talk.</SectionHeading>
            <p className="font-body text-muted-foreground mt-6 mb-8 max-w-xl mx-auto leading-relaxed">
              Book a free 20-minute call. I'll listen to what you need, give you an honest recommendation, and answer every question — no sales pressure.
            </p>
            <CtaButton to="/book">Book Your Free Call →</CtaButton>
            <p className="font-body text-xs text-muted-foreground mt-4">
              ✓ Free · ✓ No obligation · ✓ 20 minutes · ✓ Via phone or WhatsApp
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Services;
