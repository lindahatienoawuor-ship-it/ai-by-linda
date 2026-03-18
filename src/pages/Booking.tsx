import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { SectionEyebrow, SectionHeading, CtaButton, DarkCard } from "@/components/SharedUI";

const timeline = [
  { icon: "👋", time: "Minutes 1–3", title: "We meet. You talk, I listen.", desc: "Tell me about your organization — what you do, who you serve, and what you're trying to achieve. This isn't a form to fill. It's a genuine conversation, and I'm listening for the things you might not know to mention." },
  { icon: "🔍", time: "Minutes 4–8", title: "I share what I already found.", desc: "Before we speak, I'll have looked at your current digital presence — or the absence of one. I come prepared with specific observations about what's working, what's missing, and what it's costing you. No generic advice. I'll talk about your organization specifically." },
  { icon: "💡", time: "Minutes 9–15", title: "My honest recommendation.", desc: "I tell you exactly what I'd build, which package is the right fit, what it costs, and how long it takes. I'll also tell you what not to spend money on right now. This part of the conversation alone is often worth the 20 minutes." },
  { icon: "❓", time: "Minutes 16–20", title: "Your questions. All of them.", desc: "Ask me anything — the process, the tools I use, how M-Pesa gets integrated, what happens if you're not happy with something, how other schools have structured their sites. Nothing is off limits. And then you decide what to do next — on your own timeline, with no pressure from me." },
];

const objections = [
  { worry: "I'm not ready yet — I don't have everything figured out.", truth: "You don't need to be ready. This call is the preparation. Most clients come in with a rough idea and leave with a clear plan. That's exactly what it's for." },
  { worry: "I'll feel pressured to commit on the call.", truth: "I follow up once, maximum. A client who chooses me freely is a better client than one who felt cornered. Take the time you need — I'll be here." },
  { worry: "I'm worried it'll cost more than I can afford.", truth: "Tell me your budget upfront and I'll be honest about what's possible within it. I'd rather find a way to work with you than lose you over money that could be structured differently." },
  { worry: "I've been burnt by developers before.", truth: "Missed deadlines, inflated quotes, disappearing after payment — I hear this often. My process is designed around the opposite. Flat price, clear deadline, and the final 50% is only paid after you approve the work." },
];

const bookIfItems = [
  "Your school, NGO, or business has no website — or one you're quietly embarrassed by.",
  "You've been quoted ridiculous prices or timelines by other agencies and walked away frustrated.",
  "Your team spends hours answering the same phone calls and enquiries that a well-built website could handle automatically.",
  "You want to sell products online and accept M-Pesa payments — but have no idea where to start.",
  "You're simply curious about what AI-powered digital solutions could do for your organization, with no commitment at all.",
];

const reasons = [
  { icon: "🎯", title: "You'll get a real answer — not a sales deck", desc: "I don't use slides, I don't have a pitch. I listen. I ask questions. And then I tell you exactly what I'd do, what it costs, and whether it makes sense for your situation. If it doesn't — I'll say so." },
  { icon: "⚡", title: "You could have a live website in 7 days", desc: "If we start this week, you could have a fully built, live, professional website before the month ends. That's how fast this process moves when we're aligned." },
  { icon: "💰", title: "You'll know the price before you say yes", desc: "No surprises, no scope creep, no 'additional costs' halfway through. I give you a flat rate on the call. That's the price. Period." },
  { icon: "🤝", title: "You'll know exactly who is building for you", desc: "You're not hiring an anonymous team. You're hiring me — Linda. I'll be on the call, and I'll be the one building your project from start to finish." },
  { icon: "🇰🇪", title: "You'll talk to someone who understands Kenya", desc: "M-Pesa integration, school term calendars, church giving culture, NGO donor trust — I understand the Kenyan context because I live and work here." },
  { icon: "🛡️", title: "You're financially protected from the start", desc: "50% deposit to begin, 50% only after you've reviewed and approved the work. If you're not happy, we fix it. That's my guarantee." },
];

const notCards = [
  { icon: "🚫", title: "Not a sales pitch", desc: "I don't have a script. I have questions. Good ones. And I actually want to hear your answers before I say anything about what I'd recommend." },
  { icon: "🚫", title: "Not a bait-and-switch", desc: "The price I give you on this call is the price. I don't add \"unexpected costs\" once the project starts. Flat rate means flat rate." },
  { icon: "🚫", title: "Not a commitment", desc: "Saying yes to the call is not saying yes to anything else. You can walk away with useful advice and zero obligation — and I'll wish you well genuinely." },
  { icon: "🚫", title: "Not a time-waster", desc: "Twenty minutes. I start on time, I end on time. You leave the call knowing something you didn't know before — even if you decide not to work with me." },
];

const meetOptions = ["💬 WhatsApp Call", "📞 Phone Call", "🎥 Google Meet", "📍 In-Person (NBI)"];
const interestOptions = ["🌐 Starter Website", "🚀 Pro Website", "🛒 E-commerce Store", "🤖 AI Chatbot", "⚙️ Automations", "❓ Not sure yet"];
const urgencyOptions = ["ASAP", "Within 2 weeks", "This month", "Just exploring"];

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", organization: "", whatsapp: "", email: "",
    meetMethod: "", interest: [] as string[], urgency: "", situation: "", currentWebsite: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required = ["firstName", "lastName", "organization", "whatsapp", "email", "situation"];
    const newErrors: Record<string, boolean> = {};
    required.forEach((f) => { if (!formData[f as keyof typeof formData]) newErrors[f] = true; });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const toggleInterest = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest.includes(item) ? prev.interest.filter((i) => i !== item) : [...prev.interest, item],
    }));
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-card-md font-body text-sm bg-background border ${errors[field] ? "border-destructive" : "border-border"} text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`;

  return (
    <main className="pt-[72px]">
      {/* RIBBON */}
      <div className="bg-primary py-3 text-center">
        <p className="font-body text-xs font-medium text-primary-foreground tracking-wide">
          🇰🇪 Currently accepting new clients across Kenya · Slots are limited — book yours today
        </p>
      </div>

      {/* HERO */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, hsl(8 79% 57% / 0.3), transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-[5%] text-center">
          <AnimatedSection>
            <SectionEyebrow>Free 20-Minute Consultation</SectionEyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6">
              Before you spend a single shilling —<br /><span className="italic text-primary">talk to me first.</span>
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              Most people waste money on websites they didn't actually need. Others never get one because they're afraid of wasting money. This call exists to end that confusion. In 20 minutes, you'll know exactly what you need, what it costs, and whether I'm the right person to build it.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-2 px-5 py-3 rounded-full border border-border" style={{ background: "rgba(255,255,255,0.04)" }}>
              {["Free", "No obligation", "Honest advice", "You decide what happens next"].map((p) => (
                <span key={p} className="font-body text-xs text-muted-foreground">· {p}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y border-border py-8" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-5xl mx-auto px-[5%]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { big: "Free", small: "Zero cost" },
              { big: "20", small: "Minutes only" },
              { big: "<24h", small: "Response time" },
              { big: "0", small: "Sales pressure" },
              { big: "★ 5.0", small: "Client rating" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-display text-xl md:text-2xl font-bold">{s.big}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{s.small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN TWO-COLUMN */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-[5%]">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* LEFT COLUMN - COPY */}
            <div className="lg:col-span-3 space-y-16">
              {/* Block 1 */}
              <AnimatedSection>
                <SectionEyebrow>Why this call matters</SectionEyebrow>
                <SectionHeading>You deserve clarity<br />before you commit.</SectionHeading>
                <div className="font-body text-muted-foreground mt-6 space-y-4 leading-relaxed text-sm md:text-base">
                  <p>Getting a website or digital solution is a real investment — of your money, your time, and your trust. And most people go into it completely blind. They don't know what they need, what's realistic on their budget, or whether the person they're hiring is actually right for them.</p>
                  <p>This call changes that. It's not a pitch. It's a real conversation. I'll listen to your situation, review what you currently have online, and give you my honest recommendation — even if that means telling you the cheaper package is enough, or that you don't need something at all right now. I'd rather save you money than oversell you.</p>
                  <p>If we're a good fit at the end of the call — great, we talk next steps. If you need time to think — also great. No chasing. No pressure. You're in control the entire time.</p>
                </div>
              </AnimatedSection>

              {/* Block 2 - Timeline */}
              <AnimatedSection>
                <SectionEyebrow>What actually happens</SectionEyebrow>
                <SectionHeading>Your 20 minutes,<br />accounted for.</SectionHeading>
                <p className="font-body text-muted-foreground mt-4 mb-8">Here's exactly how the call flows — so you know what you're walking into.</p>
                <div className="space-y-6">
                  {timeline.map((t, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">{t.icon}</div>
                      <div>
                        <p className="font-body text-xs text-primary font-semibold uppercase tracking-wider mb-1">{t.time}</p>
                        <h4 className="font-display text-lg font-bold mb-1">{t.title}</h4>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Block 3 - Objections */}
              <AnimatedSection>
                <SectionEyebrow>Concerns I hear often</SectionEyebrow>
                <SectionHeading>Things people worry about<br />before booking.</SectionHeading>
                <div className="mt-8 space-y-4">
                  {objections.map((obj, i) => (
                    <DarkCard key={i}>
                      <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">The worry</p>
                      <p className="font-display text-base font-bold mb-3">"{obj.worry}"</p>
                      <p className="font-body text-xs uppercase tracking-widest text-primary mb-2">The truth</p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{obj.truth}</p>
                    </DarkCard>
                  ))}
                </div>
                <blockquote className="mt-8 font-body text-sm italic text-muted-foreground border-l-2 border-primary pl-6">
                  "I booked expecting a sales pitch. Instead, Linda told me I only needed the Starter package — not the Pro one I was leaning toward. She saved me KES 35,000 before we'd even started. That told me everything about the kind of person she is."
                  <footer className="mt-3 flex items-center gap-3 not-italic">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display text-xs font-bold text-primary">GM</span>
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold">Grace Muthoni</p>
                      <p className="font-body text-[11px] text-muted-foreground">Director, Muthoni Educational Trust · Nairobi</p>
                    </div>
                  </footer>
                </blockquote>
              </AnimatedSection>

              {/* Block 4 - Book If */}
              <AnimatedSection>
                <SectionEyebrow>Is this call for you?</SectionEyebrow>
                <SectionHeading>Book if any of this<br />sounds familiar.</SectionHeading>
                <p className="font-body text-muted-foreground mt-4 mb-6">You don't need to tick every box. One is enough to make the call worthwhile.</p>
                <ul className="space-y-3">
                  {bookIfItems.map((item, i) => (
                    <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-3">
                      <span className="text-primary shrink-0 mt-0.5">→</span> {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 p-6 rounded-card-md border border-border" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-3">Prefer to skip the form?</p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://wa.me/254700000000" className="font-body text-sm text-primary hover:text-coral-light transition-colors">WhatsApp me directly →</a>
                    <a href="mailto:hello@aibylinda.co.ke" className="font-body text-sm text-primary hover:text-coral-light transition-colors">Send an email →</a>
                    <a href="tel:+254700000000" className="font-body text-sm text-primary hover:text-coral-light transition-colors">Call directly →</a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-[96px]">
                <AnimatedSection delay={0.2}>
                  {submitted ? (
                    <DarkCard hover={false} className="text-center py-12">
                      <span className="text-5xl mb-4 block">🎉</span>
                      <h3 className="font-display text-2xl font-bold mb-4">Request sent.<br />You're on my radar.</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                        Linda will confirm your call slot within 24 hours — usually much faster. Check your WhatsApp and email.
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        While you wait, <Link to="/results" className="text-primary hover:text-coral-light transition-colors">see what other clients say</Link> about working with AI by Linda.
                      </p>
                    </DarkCard>
                  ) : (
                    <DarkCard hover={false}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-body text-xs text-muted-foreground">Takes 3 minutes to fill</span>
                      </div>
                      <h3 className="font-display text-xl font-bold mb-1">Request Your Free Call</h3>
                      <p className="font-body text-sm text-muted-foreground mb-6">Fill this in and Linda confirms your slot within 24 hours — usually much sooner.</p>

                      {Object.values(errors).some(Boolean) && (
                        <p className="font-body text-xs text-destructive mb-4">Please fill in all required fields — they help Linda prepare for your call.</p>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">Your details</p>
                        <div className="grid grid-cols-2 gap-3">
                          <input className={inputClass("firstName")} placeholder="First Name *" value={formData.firstName} onChange={(e) => updateField("firstName", e.target.value)} />
                          <input className={inputClass("lastName")} placeholder="Last Name *" value={formData.lastName} onChange={(e) => updateField("lastName", e.target.value)} />
                        </div>
                        <input className={inputClass("organization")} placeholder="Organization / School / Business *" value={formData.organization} onChange={(e) => updateField("organization", e.target.value)} />
                        <input className={inputClass("whatsapp")} placeholder="WhatsApp Number *" value={formData.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} />
                        <input className={inputClass("email")} placeholder="Email Address *" type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} />

                        <p className="font-body text-xs uppercase tracking-widest text-muted-foreground pt-3">How should we meet?</p>
                        <div className="flex flex-wrap gap-2">
                          {meetOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => updateField("meetMethod", opt)} className={`px-3 py-2 rounded-card-md border font-body text-xs transition-all ${formData.meetMethod === opt ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:border-primary/30"}`}>{opt}</button>
                          ))}
                        </div>

                        <p className="font-body text-xs uppercase tracking-widest text-muted-foreground pt-3">What are you interested in?</p>
                        <div className="flex flex-wrap gap-2">
                          {interestOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => toggleInterest(opt)} className={`px-3 py-2 rounded-card-md border font-body text-xs transition-all ${formData.interest.includes(opt) ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:border-primary/30"}`}>{opt}</button>
                          ))}
                        </div>

                        <p className="font-body text-xs uppercase tracking-widest text-muted-foreground pt-3">When do you need this?</p>
                        <div className="flex flex-wrap gap-2">
                          {urgencyOptions.map((opt) => (
                            <button key={opt} type="button" onClick={() => updateField("urgency", opt)} className={`px-3 py-2 rounded-card-md border font-body text-xs transition-all ${formData.urgency === opt ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:border-primary/30"}`}>{opt}</button>
                          ))}
                        </div>

                        <p className="font-body text-xs uppercase tracking-widest text-muted-foreground pt-3">Tell me about your situation *</p>
                        <textarea
                          className={`${inputClass("situation")} min-h-[120px] resize-y`}
                          placeholder={"The more specific you are, the more useful our call will be.\n\ne.g. 'We're a primary school in Westlands — 400 pupils, no website. Parents can't find our fees or term dates and our secretary spends 2 hours a day on the phone. We want a website that handles this automatically and gives us a professional online presence.'"}
                          value={formData.situation}
                          onChange={(e) => updateField("situation", e.target.value)}
                        />

                        <input className={inputClass("currentWebsite")} placeholder="Current website — if you have one (leave blank if not)" value={formData.currentWebsite} onChange={(e) => updateField("currentWebsite", e.target.value)} />

                        <button type="submit" className="w-full py-3.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-md hover:bg-coral-light transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20">
                          Request My Free Call →
                        </button>

                        <p className="font-body text-xs text-muted-foreground text-center">
                          You'll receive a confirmation within 24 hours — usually much sooner. No spam. No pressure. Just a conversation.
                        </p>

                        <div className="border-t border-border pt-4 mt-4">
                          <p className="font-body text-xs text-muted-foreground text-center mb-3">or reach me directly</p>
                          <div className="flex justify-center gap-6">
                            <div className="text-center">
                              <p className="font-body text-xs text-muted-foreground">WhatsApp</p>
                              <a href="https://wa.me/254700000000" className="font-body text-xs text-primary">+254 700 000 000</a>
                            </div>
                            <div className="text-center">
                              <p className="font-body text-xs text-muted-foreground">Email</p>
                              <a href="mailto:hello@aibylinda.co.ke" className="font-body text-xs text-primary">hello@aibylinda.co.ke</a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </DarkCard>
                  )}
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section className="py-20 md:py-28" style={{ background: "hsl(37 56% 96%)" }}>
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>Why clients choose AI by Linda</SectionEyebrow>
            <SectionHeading className="text-cream-foreground">Six reasons this call is worth<br />20 minutes of your day.</SectionHeading>
            <p className="font-body mt-4" style={{ color: "hsl(222 42% 7% / 0.6)" }}>People who've taken this call consistently say the same thing: they wish they'd booked it sooner.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-foreground rounded-card p-6 border h-full" style={{ borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <span className="text-2xl mb-3 block">{r.icon}</span>
                  <h3 className="font-display text-base font-bold text-cream-foreground mb-2">{r.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(222 42% 7% / 0.6)" }}>{r.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THIS IS NOT */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-[5%]">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>Let's be honest</SectionEyebrow>
            <SectionHeading>What this call<br />is not.</SectionHeading>
            <p className="font-body text-muted-foreground mt-4">I know what a bad "free consultation" feels like. You book, someone reads a script at you, you feel cornered into a decision. This is the opposite of that. Here's what you will not find on this call.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {notCards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <DarkCard>
                  <span className="text-2xl mb-2 block">{card.icon}</span>
                  <h3 className="font-display text-lg font-bold mb-2">{card.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </DarkCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28" style={{ background: "hsl(37 56% 96%)" }}>
        <div className="max-w-3xl mx-auto px-[5%] text-center">
          <AnimatedSection>
            <SectionEyebrow>One small step.</SectionEyebrow>
            <SectionHeading className="text-cream-foreground">
              The best time to fix your digital presence was last year.<br />
              <span className="italic text-primary">The next best time is right now.</span>
            </SectionHeading>
            <p className="font-body mt-6 mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: "hsl(222 42% 7% / 0.6)" }}>
              Every week without a website is a week where parents can't find you, donors can't trust you, and customers can't buy from you. The call costs nothing. The conversation is easy. And the result — if we're a good fit — could change how your organization shows up in the world completely.
            </p>
            <CtaButton to="/book">Book My Free Call →</CtaButton>
            <p className="font-body text-sm mt-4" style={{ color: "hsl(222 42% 7% / 0.5)" }}>
              ↑ Scroll back up to the form
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Booking;
