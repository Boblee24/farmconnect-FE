'use client'
import { useEffect, useState } from 'react'

const conversations = [
  {
    user: 'Price of maize in Kano',
    bot: '💰 Maize Price\n\n📍 Kano Central Market\n💵 ₦320 per kg\n📉 Trend: Falling\n\nType "all Maize prices" to see other markets.',
  },
  {
    user: 'Find buyer for rice',
    bot: '🛒 Buyers for Rice:\n\n1. North Grain Export Co\n📍 Kano, Sokoto, Kaduna\n⭐ 4.88/5 · Verified\n📞 +2347098765432',
  },
  {
    user: 'Agbado price Lagos',
    bot: '💰 Maize Price\n\n📍 Mile 12 Market, Lagos\n💵 ₦350 per kg\n➡️ Trend: Stable',
  },
]

function PhoneMockup() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState<'user' | 'bot' | 'both' | 'none'>('none')

  useEffect(() => {
    const cycle = () => {
      setVisible('none')
      setTimeout(() => setVisible('user'), 400)
      setTimeout(() => setVisible('both'), 1400)
    }
    cycle()
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % conversations.length)
      cycle()
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const convo = conversations[index]
  const time = new Date().toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="relative flex justify-center">
      {/* Glow */}
      <div className="absolute inset-0 bg-leaf/20 blur-3xl rounded-full scale-75" />

      {/* Floating crops */}
      <span className="absolute -right-4 top-8 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>🌽</span>
      <span className="absolute -right-2 bottom-20 text-4xl opacity-15 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>🍅</span>
      <span className="absolute -left-4 top-24 text-3xl opacity-15 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>🌾</span>

      <div className="relative z-10 w-[260px] bg-[#1a1a1a] rounded-[44px] p-3 shadow-2xl">
        <div className="bg-[#ece5dd] rounded-[34px] overflow-hidden h-[520px] flex flex-col">
          {/* Header */}
          <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-lime flex items-center justify-center text-lg">🌾</div>
            <div>
              <p className="text-white text-sm font-semibold">FarmConnect AI</p>
              <p className="text-white/60 text-xs">● online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 flex flex-col gap-2 justify-end">
            {/* User message */}
            <div className={`transition-all duration-500 ${
              visible === 'none' ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}>
              <div className="bg-[#dcf8c6] self-end ml-auto max-w-[85%] px-3 py-2 rounded-lg rounded-tr-none text-xs leading-relaxed">
                {convo.user}
                <p className="text-[10px] text-gray-400 text-right mt-1">{time} ✓✓</p>
              </div>
            </div>

            {/* Bot message */}
            <div className={`transition-all duration-500 delay-500 ${
              visible === 'both' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <div className="bg-white max-w-[85%] px-3 py-2 rounded-lg rounded-tl-none text-xs leading-relaxed whitespace-pre-line">
                {convo.bot}
                <p className="text-[10px] text-gray-400 text-right mt-1">{time}</p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-2">
            <div className="bg-white rounded-full px-4 py-2.5 flex items-center justify-between">
              <span className="text-xs text-gray-400">Type a message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#075e54"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 gap-16 items-center px-6 md:px-12 pt-28 pb-20 max-w-7xl mx-auto">
      {/* Left */}
      <div>
        <div className="inline-flex items-center gap-2 bg-sprout/10 border border-sprout/20 text-sprout px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6 animate-fadeUp">
          <span>🌍</span> Built for African Farmers
        </div>

        <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-soil mb-6">
          Farm smarter.<br />
          <em className="not-italic text-sprout">Earn more.</em><br />
          No app needed.
        </h1>

        <p className="text-clay text-lg leading-relaxed max-w-md mb-10">
          FarmConnect AI delivers real-time crop prices, buyer connections, and market intelligence directly on WhatsApp — works on any phone, any network, in your language.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="https://wa.me/14155238886?text=hello"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-leaf text-cream px-7 py-4 rounded-full font-semibold text-base hover:bg-sprout transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-leaf/30"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Try on WhatsApp
          </a>
          <a href="#how" className="inline-flex items-center gap-2 text-bark hover:text-leaf transition-colors font-medium">
            See how it works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-14 pt-10 border-t border-soil/10">
          {[
            { num: '33M+', label: 'Farmers in Nigeria' },
            { num: '40%', label: 'Income lost to poor info' },
            { num: '2G', label: 'Network compatible' },
          ].map(s => (
            <div key={s.num}>
              <p className="font-display font-bold text-3xl text-leaf">{s.num}</p>
              <p className="text-clay text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Phone */}
      <PhoneMockup />
    </section>
  )
}