import { Link } from 'react-router-dom'

const equipmentCategories = [
  {
    name: 'Strength Training',
    items: [
      'Hammer Strength plate-loaded machines',
      'Cybex selectorized machines',
      'Life Fitness cable stations',
      'Free weight area with dumbbells up to 150 lbs',
      'Olympic lifting platforms',
      'Power racks and squat racks',
      'Smith machines',
    ],
  },
  {
    name: 'Cardio',
    items: [
      'Life Fitness treadmills',
      'Precor elliptical trainers',
      'Stationary bikes (upright & recumbent)',
      'Stair climbers',
      'Rowing machines',
    ],
  },
  {
    name: 'Functional Training',
    items: [
      'Battle ropes',
      'Kettlebells',
      'Medicine balls',
      'Resistance bands',
      'TRX suspension trainers',
      'Plyometric boxes',
    ],
  },
]

const amenities = [
  { title: 'Spacious Layout', desc: 'Plenty of room to train without waiting — never overcrowded.' },
  { title: 'Clean & Maintained', desc: 'Equipment is serviced regularly and the facility is cleaned daily.' },
  { title: 'Locker Rooms', desc: 'Full locker rooms with showers so you can freshen up before or after.' },
  { title: 'Free Parking', desc: 'Convenient free parking right outside the front door.' },
  { title: 'Air Conditioned', desc: 'Climate-controlled facility for comfortable year-round training.' },
  { title: 'Personal TVs', desc: 'Individual TV screens on cardio equipment for your entertainment.' },
]

export default function OurGym() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-dark-light to-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Gym</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-standard, commercial-grade machines that serious gyms invest in.
            This isn't old equipment — it's proven equipment built to last.
          </p>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Commercial-Grade <span className="text-primary">Equipment</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipmentCategories.map(({ name, items }) => (
              <div key={name} className="bg-dark-light rounded-lg p-8 border border-white/5">
                <h3 className="text-xl font-bold text-primary mb-6">{name}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-dark-lighter rounded-lg p-8 border border-primary/20 text-center">
            <p className="text-gray-300 text-lg">
              <span className="text-primary font-semibold">Brands you trust:</span> Hammer Strength &bull; Cybex &bull; Life Fitness &bull; Precor &bull; and more
            </p>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Gym <span className="text-primary">Amenities</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map(({ title, desc }) => (
              <div key={title} className="bg-dark/50 rounded-lg p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See It for <span className="text-primary">Yourself</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Pictures don't do it justice. Come in for a free tour and feel the difference.
          </p>
          <Link
            to="/free-trial"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider rounded no-underline transition-colors"
          >
            Book a Free Tour
          </Link>
        </div>
      </section>
    </>
  )
}
