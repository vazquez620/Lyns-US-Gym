import { Link } from 'react-router-dom'

const trainers = [
  {
    name: 'Lynn',
    title: 'Owner & Head Trainer',
    bio: 'Founder of Lynn\'s US Gym and a fixture in Corpus Christi fitness since 1986. With nearly four decades of experience, Lynn has helped thousands of members achieve their fitness goals. His hands-on approach and deep knowledge of strength training make him a trusted mentor for beginners and advanced lifters alike.',
    specialties: ['Strength Training', 'Bodybuilding', 'General Fitness'],
  },
  {
    name: 'Michelle',
    title: 'Certified Personal Trainer',
    bio: 'Two-time Ms. Texas Body Building Champion and a passionate advocate for fitness transformation. Michelle brings competitive-level knowledge with a compassionate coaching style that helps clients of all levels push past their limits and discover what they\'re truly capable of.',
    specialties: ['Body Building', 'Competition Prep', 'Weight Loss', 'Women\'s Fitness'],
  },
]

const benefits = [
  {
    title: 'Personalized Programs',
    desc: 'Custom workout plans designed around your goals, schedule, and fitness level.',
  },
  {
    title: 'Form & Technique',
    desc: 'Learn proper form to maximize results and prevent injury — especially important for beginners.',
  },
  {
    title: 'Accountability',
    desc: 'Regular sessions keep you on track. Your trainer is invested in your success.',
  },
  {
    title: 'Faster Results',
    desc: 'Stop wasting time with random workouts. Targeted programming gets you where you want to be.',
  },
]

export default function Training() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-dark-light to-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Personal <span className="text-primary">Training</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            One-on-one coaching with certified trainers who know this gym inside and out.
            Whether you're just starting or preparing for competition, we'll get you there.
          </p>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Meet Your <span className="text-primary">Trainers</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {trainers.map(({ name, title, bio, specialties }) => (
              <div key={name} className="bg-dark-light rounded-lg overflow-hidden border border-white/5">
                {/* Placeholder for trainer photo */}
                <div className="h-48 bg-dark-lighter flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                      <span className="font-heading text-3xl font-bold text-primary">{name[0]}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white">{name}</h3>
                  <p className="text-primary font-semibold mb-4">{title}</p>
                  <p className="text-gray-400 leading-relaxed mb-4">{bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {specialties.map((spec) => (
                      <span key={spec} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why <span className="text-primary">Personal Training</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map(({ title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                  <p className="text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Training <span className="text-primary">Packages</span>
          </h2>
          <p className="text-gray-400 mb-10">
            Sessions are available individually or in discounted packages. All sessions are one hour.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-dark-light rounded-lg p-6 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-1">Single Session</h3>
              <p className="text-3xl font-bold text-primary mb-1">$40</p>
              <p className="text-gray-500 text-sm">1 hour</p>
            </div>
            <div className="bg-dark-lighter rounded-lg p-6 border border-primary/30">
              <h3 className="text-lg font-bold text-white mb-1">5-Pack</h3>
              <p className="text-3xl font-bold text-primary mb-1">$175</p>
              <p className="text-gray-500 text-sm">$35 per session</p>
            </div>
            <div className="bg-dark-light rounded-lg p-6 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-1">10-Pack</h3>
              <p className="text-3xl font-bold text-primary mb-1">$300</p>
              <p className="text-gray-500 text-sm">$30 per session</p>
            </div>
          </div>

          <Link
            to="/free-trial"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider rounded no-underline transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
