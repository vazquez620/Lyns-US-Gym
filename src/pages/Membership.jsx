import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Individual',
    price: '30',
    period: '/month',
    features: [
      'Full gym access',
      'All equipment included',
      'Locker room & showers',
      'No contract — cancel anytime',
      'Free parking',
    ],
    popular: false,
  },
  {
    name: 'Couple',
    price: '50',
    period: '/month',
    features: [
      'Full gym access for two',
      'All equipment included',
      'Locker room & showers',
      'No contract — cancel anytime',
      'Free parking',
      'Train together, save together',
    ],
    popular: true,
  },
  {
    name: 'Family',
    price: '65',
    period: '/month',
    features: [
      'Full gym access for household',
      'All equipment included',
      'Locker room & showers',
      'No contract — cancel anytime',
      'Free parking',
      'Best value per person',
    ],
    popular: false,
  },
]

const extras = [
  {
    name: 'Day Pass',
    price: '$10',
    desc: 'Drop in any time — no commitment needed.',
  },
  {
    name: 'Personal Training',
    price: 'From $40/session',
    desc: 'One-on-one coaching with certified trainers.',
  },
  {
    name: 'Student Discount',
    price: '$25/month',
    desc: 'Valid student ID required. Individual access.',
  },
]

export default function Membership() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-dark-light to-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Membership</span> Plans
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Simple, honest pricing. No hidden fees. No contracts. No sign-up fees.
            Just show up and get to work.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map(({ name, price, period, features, popular }) => (
              <div
                key={name}
                className={`relative rounded-lg p-8 border ${
                  popular
                    ? 'bg-dark-lighter border-primary shadow-lg shadow-primary/10'
                    : 'bg-dark-light border-white/5'
                }`}
              >
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-white mb-2">{name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">${price}</span>
                  <span className="text-gray-400">{period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/free-trial"
                  className={`block text-center py-3 rounded font-bold uppercase tracking-wider no-underline transition-colors ${
                    popular
                      ? 'bg-primary hover:bg-primary-dark text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            All prices are monthly. No annual commitment required. Prices subject to change.
          </p>
        </div>
      </section>

      {/* Extras */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Additional <span className="text-primary">Options</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {extras.map(({ name, price, desc }) => (
              <div key={name} className="bg-dark/50 rounded-lg p-6 border border-white/5 text-center">
                <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
                <p className="text-primary font-semibold text-xl mb-2">{price}</p>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Try Before You Buy
          </h2>
          <p className="text-white/80 mb-8">
            Not sure which plan is right for you? Start with a free trial and decide after you've experienced the gym.
          </p>
          <Link
            to="/free-trial"
            className="inline-block px-8 py-4 bg-white text-primary-dark font-bold uppercase tracking-wider rounded no-underline hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </>
  )
}
