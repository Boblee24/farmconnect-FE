'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    } border-b border-soil/5`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-lime animate-pulse" />
          <span className="font-display font-bold text-xl text-leaf">FarmConnect AI</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {[
            { label: 'How it works', href: '#how' },
            { label: 'Features', href: '#features' },
            { label: 'Markets', href: '#crops' },
          ].map(link => (
            <li key={link.href}>
              
                href={link.href}
                className="text-bark hover:text-leaf transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            
              href="https://wa.me/14155238886?text=hello"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-leaf text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sprout transition-colors"
            >
              Try on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}