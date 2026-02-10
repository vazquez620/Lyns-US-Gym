import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'Do I need to sign a contract?',
    a: 'No. We never require contracts. All memberships are month-to-month. We believe in earning your loyalty, not trapping it.',
  },
  {
    q: 'What are your hours?',
    a: 'Monday through Friday: 5:00 AM – 9:00 PM. Saturday: 8:00 AM – 4:00 PM. Sunday: 12:00 PM – 4:00 PM.',
  },
  {
    q: 'How much does a membership cost?',
    a: 'Individual memberships start at $30/month. Couple memberships are $50/month and family plans are $65/month. We also offer day passes for $10 and student discounts. No sign-up fees.',
  },
  {
    q: 'Do you offer personal training?',
    a: 'Yes! We have certified personal trainers available for one-on-one sessions. Single sessions are $40, or you can save with multi-session packages. Contact us to book a free consultation.',
  },
  {
    q: 'What equipment do you have?',
    a: 'We carry commercial-grade equipment from top brands including Hammer Strength, Cybex, Life Fitness, and Precor. Our gym features a full free weight area, selectorized machines, cable stations, and a complete cardio section.',
  },
  {
    q: 'Is the gym crowded?',
    a: "One of the biggest advantages of Lynn's US Gym is that we're never overcrowded. You'll always have space to train comfortably without waiting for equipment.",
  },
  {
    q: 'Can I try the gym before joining?',
    a: 'Absolutely! We offer free trials so you can experience the gym before committing. No credit card required — just fill out our free trial form or walk in and ask.',
  },
  {
    q: "I'm new to working out. Is this gym for me?",
    a: "Definitely. While we have serious equipment, our community is welcoming to all fitness levels. Our staff and trainers are happy to show you around and help you get started. Many of our long-time members started as complete beginners.",
  },
  {
    q: 'Is there parking?',
    a: 'Yes, free parking is available right outside the front door. You won\'t have to walk far.',
  },
  {
    q: 'How long has the gym been open?',
    a: 'Lynn\'s US Gym has been serving Corpus Christi since 1986 — nearly 40 years of continuous operation. We\'re one of the longest-running independent gyms in the area.',
  },
  {
    q: 'Do you have showers and locker rooms?',
    a: 'Yes, full locker rooms with showers are available for all members.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Since we don\'t do contracts, you can cancel your membership at any time with no penalties or cancellation fees.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer group"
      >
        <span className="text-white font-semibold pr-4 group-hover:text-primary transition-colors">{q}</span>
        <svg
          className={`w-5 h-5 text-primary shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-gray-400 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-dark-light to-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about Lynn's US Gym. Can't find your answer? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-dark-light rounded-lg p-6 md:p-10 border border-white/5">
            {faqs.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-dark-light text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have <span className="text-primary">Questions</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            We're here to help. Reach out by phone, send us a message, or just stop by the gym.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider rounded no-underline transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+13619929199"
              className="px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-bold uppercase tracking-wider rounded no-underline transition-colors"
            >
              Call (361) 992-9199
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
