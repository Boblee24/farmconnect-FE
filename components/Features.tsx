const features = [
  { icon: '📊', title: 'Real-time Prices', desc: 'Crop prices updated daily across 20 major markets in Nigeria, Ghana, and Kenya. Never undersell again.' },
  { icon: '📈', title: 'Price Trend Forecasts', desc: 'AI-powered predictions showing whether prices are rising, falling, or stable — so you know when to sell.' },
  { icon: '🛒', title: 'Verified Buyer Matching', desc: 'Connected to exporters, processors, and aggregators. Get fair prices from trusted buyers in your region.' },
  { icon: '🌍', title: '4 Local Languages', desc: 'Fully supports English, Hausa, Yoruba, and Igbo. Farmers interact in their most comfortable language.' },
  { icon: '🔊', title: 'Voice Note Support', desc: 'Low-literacy farmers can send voice notes. Our speech-to-text converts audio queries automatically.' },
  { icon: '📱', title: 'Zero App Download', desc: 'Works entirely through WhatsApp. Any phone with WhatsApp installed is enough. Even feature phones.' },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12" style={{ background: 'linear-gradient(135deg, #fdf6e3 0%, #f5ead0 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sprout text-xs font-bold tracking-widest uppercase mb-3">🛠️ What we offer</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-soil mb-4">
            Everything a farmer needs
          </h2>
          <p className="text-clay text-lg max-w-lg mx-auto">
            Built specifically for African smallholder farmers. Zero friction, maximum value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 border border-soil/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-leaf to-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-12 h-12 bg-sprout/10 rounded-2xl flex items-center justify-center text-2xl mb-5">
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-soil mb-3">{f.title}</h3>
              <p className="text-clay text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}