'use client'
import { useState, useEffect } from 'react'

const demos = {
  price: [
    { type: 'user', text: 'Price of maize in Lagos' },
    { type: 'bot', text: '💰 **Maize Price**\n\n📍 Mile 12 Market, Lagos\n💵 Price: ₦350 per kg\n➡️ Trend: Stable\n\n_Last updated: 27/02/2026_\n\nType "all Maize prices" to see other markets.' },
    { type: 'user', text: 'all Maize prices' },
    { type: 'bot', text: '💰 **Maize Prices Across Markets:**\n\n📍 Mile 12 Market, Lagos\n   ₦350 per kg ➡️\n\n📍 Bodija Market, Oyo\n   ₦340 per kg 📈\n\n📍 Kano Central, Kano\n   ₦320 per kg 📉' },
  ],
  buyer: [
    { type: 'user', text: '2' },
    { type: 'bot', text: '🛒 **Find a Buyer**\n\nWhich crop do you want to sell?\n\nExample: _Maize, Rice, Yam, Cassava_' },
    { type: 'user', text: 'Groundnut' },
    { type: 'bot', text: '🛒 **Buyers for Groundnut:**\n\n1. **North Grain Export Co**\n   📦 Type: exporter\n   📍 Kano, Sokoto, Kaduna\n   📊 Min: 1000kg | Max: 100,000kg\n   ⭐ Rating: 4.88/5\n   📞 +2347098765432' },
  ],
  register: [
    { type: 'user', text: 'register' },
    { type: 'bot', text: '👤 **Let\'s register you!**\n\nWhat is your full name?' },
    { type: 'user', text: 'Aminu Ibrahim' },
    { type: 'bot', text: '📍 What state/city are you in?' },
    { type: 'user', text: 'Kano' },
    { type: 'bot', text: '🌱 What crops do you farm?\n(e.g. Maize, Rice, Yam)' },
    { type: 'user', text: 'Maize, Groundnut, Sorghum' },
    { type: 'bot', text: '✅ **Welcome, Aminu Ibrahim!**\n\nYou\'re now registered.\nYou have 3 free price checks per day.\n\nType **"help"** to see what I can do!' },
  ],
}

type DemoKey = keyof typeof demos

export default function DemoChat() {
  const [active, setActive] = useState<DemoKey>('price')
  const [shown, setShown] = useState<number>(0)

  useEffect(() => {
    const messages = demos[active]
    messages.forEach((_, i) => {
      setTimeout(() => setShown(i + 1), i * 700)
    })
    return () => setShown(0)
  }, [active])

  const time = new Date().toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })

  return (
    <section id="demo" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-sprout text-xs font-bold tracking-widest uppercase mb-3">🎯 Live demo</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-soil mb-5">
            See it in action
          </h2>
          <p className="text-clay text-lg leading-relaxed mb-8">
            Real conversations. Real prices. Tap a scenario to see how farmers interact with FarmConnect AI.
          </p>

          <div className="flex gap-3 mb-8 flex-wrap">
            {(['price', 'buyer', 'register'] as DemoKey[]).map(tab => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-5 py-2.5 rounded-full border-2 text-sm font-semibold transition-all ${
                  active === tab
                    ? 'bg-leaf border-leaf text-cream'
                    : 'border-leaf text-leaf hover:bg-leaf hover:text-cream'
                }`}
              >
                {tab === 'price' ? '💰 Price Check' : tab === 'buyer' ? '🛒 Find Buyer' : '👤 Register'}
              </button>
            ))}
          </div>

          <ul className="space-y-2 text-sm text-clay">
            <li>✅ Works on any WhatsApp — no smartphone required</li>
            <li>✅ Responds in under 3 seconds on 2G</li>
            <li>✅ Available 24/7, even on public holidays</li>
            <li>✅ Responds in English, Hausa, Yoruba & Igbo</li>
          </ul>
        </div>

        {/* Chat */}
        <div className="bg-[#ece5dd] rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-[#075e54] px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center text-xl">🌾</div>
            <div>
              <p className="text-white font-semibold">FarmConnect AI</p>
              <p className="text-white/60 text-xs">● online — responds instantly</p>
            </div>
          </div>

          <div className="p-4 space-y-3 min-h-95 flex flex-col justify-end">
            {demos[active].slice(0, shown).map((msg, i) => (
              <div
                key={`${active}-${i}`}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeUp`}
              >
                <div className={`max-w-[80%] px-3 py-2.5 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.type === 'user'
                    ? 'bg-[#dcf8c6] rounded-tr-none text-soil'
                    : 'bg-white rounded-tl-none text-soil'
                }`}>
                  {msg.text.replace(/\*\*/g, '').replace(/_/g, '')}
                  <p className="text-[10px] text-gray-400 text-right mt-1">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}