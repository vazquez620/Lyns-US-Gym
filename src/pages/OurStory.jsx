import { Link } from 'react-router-dom'

const milestones = [
  { year: '1986', event: 'Lynn opens the doors to US Gym in Corpus Christi, Texas — built on a simple belief: real equipment, real results.' },
  { year: '1990s', event: 'Word spreads. The gym becomes a go-to spot for serious lifters and everyday fitness enthusiasts across the Coastal Bend.' },
  { year: '2000s', event: 'Continued investment in commercial-grade equipment from Hammer Strength, Cybex, and Life Fitness. The gym earns a reputation for quality.' },
  { year: '2010s', event: 'Personal training programs expand. Michelle joins the team, bringing competitive bodybuilding expertise and a passion for helping others transform.' },
  { year: '2020s', event: 'While chain gyms close and reopen, Lynn\'s US Gym stays consistent — same quality, same community, same commitment to Corpus Christi.' },
  { year: 'Today', event: 'Nearly 40 years later, the gym that outlasted the fads is still going strong. Now modernizing for the next generation while staying true to its roots.' },
]

export default function OurStory() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-dark-light to-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built Different. Built Better. Nearly 40 years of Corpus Christi fitness.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-dark-light rounded-lg p-8 md:p-12 border border-white/5 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The Gym That <span className="text-primary">Outlasted the Fads</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  In 1986, Lynn opened the doors to US Gym with a straightforward vision: give Corpus Christi a real gym. Not a trendy studio. Not a big-box franchise. A place where the equipment is commercial-grade, the atmosphere is welcoming, and the results speak for themselves.
                </p>
                <p>
                  That vision hasn't changed in nearly four decades. While fitness trends have come and gone — and chains have opened and closed — Lynn's US Gym has remained a constant. The same dedication to quality equipment. The same personal attention. The same community that feels like family.
                </p>
                <p>
                  Our Hammer Strength, Cybex, and Life Fitness machines aren't relics — they're the same industry-standard, commercial-grade equipment that elite training facilities around the world rely on. We invest in gear that lasts because we believe your workout deserves better than consumer-grade machines.
                </p>
                <p>
                  From day one, we've believed that a gym should earn your loyalty — not trap it with contracts. That's why we've never required one. Month-to-month, always. If we're not delivering, you're free to go. Nearly 40 years later, people keep coming back.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-primary">Journey</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="font-heading text-2xl font-bold text-primary">{year}</span>
                    <p className="text-gray-400 mt-2 leading-relaxed">{event}</p>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What We <span className="text-primary">Stand For</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Authenticity', desc: 'No gimmicks. No fads. Just honest, effective fitness in a real gym built for real people.' },
              { title: 'Community', desc: 'More than a gym — a place where members become family and everyone supports each other.' },
              { title: 'Integrity', desc: 'No contracts, no hidden fees, no pressure sales. We earn your trust the old-fashioned way.' },
            ].map(({ title, desc }) => (
              <div key={title} className="text-center p-8">
                <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be Part of the Next Chapter
          </h2>
          <p className="text-white/80 mb-8">
            Join the gym that's been building stronger bodies — and a stronger Corpus Christi — since 1986.
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
