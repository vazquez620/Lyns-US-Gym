import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-dark via-dark-light to-dark-lighter overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-4">
          Corpus Christi's Trusted Gym Since 1986
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
          NOT A CHAIN.<br />
          <span className="text-primary">NOT A TREND.</span><br />
          JUST RESULTS.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Nearly 40 years of building stronger bodies and a stronger community.
          Commercial-grade equipment. Personal attention. Your workout, your space, your pace.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/free-trial"
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-bold uppercase tracking-wider rounded no-underline transition-colors"
          >
            Start Your Free Trial
          </Link>
          <Link
            to="/our-gym"
            className="px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white text-lg font-medium uppercase tracking-wider rounded no-underline transition-colors"
          >
            Explore Our Gym
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

function SocialProof() {
  const stats = [
    { value: '40', label: 'Years Strong', suffix: '' },
    { value: '1986', label: 'Established', suffix: '' },
    { value: '5', label: 'Star Reviews', suffix: '' },
    { value: '0', label: 'Contracts Required', suffix: '' },
  ]

  return (
    <section className="bg-dark-lighter py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-heading text-4xl md:text-5xl font-bold text-primary">{value}</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GettingStarted() {
  const steps = [
    {
      num: '01',
      title: 'Book a Free Trial',
      desc: 'Sign up online in under a minute. No commitment, no credit card required.',
    },
    {
      num: '02',
      title: 'Tour the Gym',
      desc: 'Come see our commercial-grade equipment and meet the community.',
    },
    {
      num: '03',
      title: 'Join the Family',
      desc: 'Pick the membership that fits your goals. Cancel anytime — no contracts.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Getting Started Is <span className="text-primary">Simple</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            No intimidation. No pressure. Just walk in and feel the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ num, title, desc }) => (
            <div key={num} className="relative bg-dark-light rounded-lg p-8 border border-white/5 hover:border-primary/30 transition-colors">
              <span className="font-heading text-6xl font-bold text-white/5 absolute top-4 right-6">{num}</span>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/free-trial"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider rounded no-underline transition-colors"
          >
            Book Your Free Trial
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyLynns() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Commercial-Grade Equipment',
      desc: 'Hammer Strength, Cybex, Life Fitness, Precor — the same machines elite athletes trust.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Never Overcrowded',
      desc: 'Your workout, your space, your pace. Personal attention in a community atmosphere.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'No Contracts Ever',
      desc: 'Month-to-month memberships. We earn your loyalty — we don\'t trap it.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Family-Owned Since 1986',
      desc: 'Not a franchise. Not a corporate chain. A real gym built by real people for this community.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Gym That <span className="text-primary">Outlasted the Fads</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            While trendy gyms come and go, we've been building stronger bodies in Corpus Christi for nearly four decades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-5 p-6 rounded-lg bg-dark/50 border border-white/5">
              <div className="text-primary shrink-0 mt-1">{icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    {
      name: 'Marcus R.',
      text: "Best gym in Corpus Christi, hands down. The equipment is top-notch and it's never packed like the big chain gyms. Been coming here for 3 years.",
      rating: 5,
    },
    {
      name: 'Sarah T.',
      text: "I was nervous about joining a gym but the staff here made me feel right at home. It's like a second family. The personal training changed my life.",
      rating: 5,
    },
    {
      name: 'David L.',
      text: "Real equipment, real people, real results. No gimmicks, no fluff. If you're serious about fitness, this is where you go.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Members</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(({ name, text, rating }) => (
            <div key={name} className="bg-dark-light rounded-lg p-8 border border-white/5">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 italic">"{text}"</p>
              <p className="text-white font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Ready to Build a Stronger You?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Your first visit is on us. No commitment, no pressure — just come see what nearly 40 years of Corpus Christi fitness feels like.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/free-trial"
            className="px-8 py-4 bg-white text-primary-dark font-bold uppercase tracking-wider rounded no-underline hover:bg-gray-100 transition-colors"
          >
            Claim Your Free Trial
          </Link>
          <a
            href="tel:+13619929199"
            className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider rounded no-underline hover:bg-white/10 transition-colors"
          >
            Call (361) 992-9199
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <GettingStarted />
      <WhyLynns />
      <Testimonials />
      <CTABanner />
    </>
  )
}
