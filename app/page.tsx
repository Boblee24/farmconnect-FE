import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import DemoChat from '@/components/DemoChat'
import Features from '@/components/Features'
import CropsMarkets from '@/components/CropsMarkets'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HowItWorks />
      <DemoChat />
      <Features />
      <CropsMarkets />
      <CTA />
      <Footer />
    </main>
  )
}