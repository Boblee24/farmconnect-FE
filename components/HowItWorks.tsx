const steps = [
  {
    num: '1',
    icon: '💬',
    title: 'Send a message',
    desc: 'Text FarmConnect AI on WhatsApp in English, Hausa, Yoruba, or Igbo. Ask about any crop, any market.',
  },
  {
    num: '2',
    icon: '⚡',
    title: 'Get instant prices',
    desc: 'Receive real-time market prices, trend forecasts, and comparisons across multiple markets in seconds.',
  },
  {
    num: '3',
    icon: '🤝',
    title: 'Connect to buyers',
    desc: 'Get matched with verified aggregators, processors and exporters ready to buy at fair prices.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-moss py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 41px)' }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16">
          <p className="text-lime text-xs font-bold tracking-widest uppercase mb-3">⚡ Simple process</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-cream mb-4">
            Three steps to better prices
          </h2>
          <p className="text-cream/60 text-lg max-w-lg">
            No app download. No registration form. No bank account needed. Just WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-lime text-moss flex items-center justify-center font-display font-black text-xl mb-6">
                {step.num}
              </div>
              <span className="text-3xl mb-4 block">{step.icon}</span>
              <h3 className="font-display font-bold text-xl text-cream mb-3">{step.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}