const crops = [
  { emoji: '🌽', name: 'Maize' }, { emoji: '🍚', name: 'Rice' },
  { emoji: '🍠', name: 'Yam' }, { emoji: '🥔', name: 'Cassava' },
  { emoji: '🍅', name: 'Tomato' }, { emoji: '🧅', name: 'Onion' },
  { emoji: '🌾', name: 'Sorghum' }, { emoji: '🫘', name: 'Cowpea' },
  { emoji: '🥜', name: 'Groundnut' }, { emoji: '🍌', name: 'Plantain' },
]

const markets = [
  { flag: '🇳🇬', name: 'Mile 12 Market', location: 'Lagos, Nigeria' },
  { flag: '🇳🇬', name: 'Kano Central', location: 'Kano, Nigeria' },
  { flag: '🇳🇬', name: 'Dawanau Market', location: 'Kano, Nigeria' },
  { flag: '🇳🇬', name: 'Bodija Market', location: 'Ibadan, Nigeria' },
  { flag: '🇳🇬', name: 'Onitsha Main', location: 'Anambra, Nigeria' },
  { flag: '🇳🇬', name: 'Galadima Market', location: 'Abuja, Nigeria' },
  { flag: '🇳🇬', name: 'Creek Road', location: 'Port Harcourt, Nigeria' },
  { flag: '🇳🇬', name: 'Ogbete Market', location: 'Enugu, Nigeria' },
  { flag: '🇬🇭', name: 'Kumasi Central', location: 'Ashanti, Ghana' },
  { flag: '🇬🇭', name: 'Makola Market', location: 'Accra, Ghana' },
  { flag: '🇰🇪', name: 'Wakulima Market', location: 'Nairobi, Kenya' },
  { flag: '🇰🇪', name: 'Kongowea Market', location: 'Mombasa, Kenya' },
]

export default function CropsMarkets() {
  return (
    <section id="crops" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sprout text-xs font-bold tracking-widest uppercase mb-3">🌱 Coverage</p>
        <h2 className="font-display font-black text-4xl md:text-5xl text-soil mb-4">
          10 crops. 20 markets.<br />3 countries.
        </h2>
        <p className="text-clay text-lg max-w-lg mx-auto mb-12">
          Expanding rapidly. Nigeria, Ghana, and Kenya live today — East and West Africa coming soon.
        </p>

        {/* Marquee */}
        <div className="overflow-hidden -mx-6 md:-mx-12 mb-12">
          <div className="flex gap-4 animate-marquee w-max">
            {[...crops, ...crops, ...crops].map((c, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-3 bg-white border-2 border-sprout/20 px-5 py-3 rounded-full whitespace-nowrap text-bark font-medium hover:bg-leaf hover:text-cream hover:border-leaf transition-all cursor-default"
              >
                <span className="text-2xl">{c.emoji}</span>
                {c.name}
              </div>
            ))}
          </div>
        </div>

        {/* Markets grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {markets.map(m => (
            <div
              key={m.name}
              className="bg-white border-2 border-soil/5 rounded-2xl p-4 text-left hover:border-leaf hover:-translate-y-0.5 transition-all"
            >
              <p className="text-2xl mb-2">{m.flag}</p>
              <p className="font-semibold text-sm text-soil">{m.name}</p>
              <p className="text-xs text-clay mt-0.5">{m.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}