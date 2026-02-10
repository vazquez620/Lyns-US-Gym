import { useState } from 'react'

export default function FreeTrial() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'general',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-dark-light to-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-bold uppercase tracking-wider rounded-full mb-6">
            No Credit Card Required
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your <span className="text-primary">Free Trial</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience Lynn's US Gym with zero commitment. Come in, try the equipment, meet the community, and see why we've been Corpus Christi's trusted gym for nearly 40 years.
          </p>
        </div>
      </section>

      {/* Form + Benefits */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                What's <span className="text-primary">Included</span>
              </h2>

              <div className="space-y-6">
                {[
                  { title: 'Full Gym Access', desc: 'Try every piece of equipment — Hammer Strength, Cybex, Life Fitness, and more.' },
                  { title: 'No Obligation', desc: 'Zero pressure. No credit card. No sales pitch. Just come work out.' },
                  { title: 'Free Tour', desc: 'A staff member will show you around and help you get oriented.' },
                  { title: 'Training Consultation', desc: 'Get a free assessment and learn how our trainers can help you reach your goals.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                      <p className="text-gray-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-dark-lighter rounded-lg border border-primary/20">
                <p className="text-gray-300 text-sm">
                  <span className="text-primary font-semibold">Prefer to just walk in?</span> No problem. You're always welcome to stop by during our hours. Mention you'd like a free trial and we'll get you set up.
                </p>
                <div className="mt-3 text-gray-400 text-sm">
                  <p>Mon–Fri: 5:00 AM – 9:00 PM</p>
                  <p>Sat: 8:00 AM – 4:00 PM</p>
                  <p>Sun: 12:00 PM – 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Sign-up Form */}
            <div>
              {submitted ? (
                <div className="bg-dark-light rounded-lg p-8 md:p-12 border border-primary/20 text-center">
                  <svg className="w-20 h-20 text-primary mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white mb-3">You're All Set!</h3>
                  <p className="text-gray-400 mb-4">
                    We'll be in touch shortly to confirm your free trial. In the meantime, feel free to just walk in — we're expecting you!
                  </p>
                  <a href="tel:+13619929199" className="text-primary hover:text-primary-dark font-semibold no-underline transition-colors">
                    Questions? Call (361) 992-9199
                  </a>
                </div>
              ) : (
                <div className="bg-dark-light rounded-lg p-8 md:p-10 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">Reserve Your Spot</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="you@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="(361) 555-0123"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">I'm interested in</label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="general">General Fitness</option>
                        <option value="strength">Strength Training</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="weight-loss">Weight Loss</option>
                        <option value="bodybuilding">Bodybuilding</option>
                        <option value="just-looking">Just Looking Around</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider rounded-lg transition-colors border-none cursor-pointer text-base"
                    >
                      Claim My Free Trial
                    </button>

                    <p className="text-gray-500 text-xs text-center">
                      By submitting, you agree to be contacted about your free trial. No spam, ever.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
