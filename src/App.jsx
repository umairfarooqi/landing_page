import React from 'react'
import Navbar from './Components/Home/Navbar'
import HeroSection from './Components/Home/HeroSection'
import SubcategoryNav from './Components/Home/SubcategoryNav'
import HowItWorks from './Components/Home/HowItWorks'
import TrustedBy from './Components/Home/TrustedBy'
import CallToAction from './Components/Home/CallToAction'
import Footer from './Components/Home/Footer'
import WhatsAppWidget from './Components/Home/WhatsAppWidget'


function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <SubcategoryNav />
      <HowItWorks />
      <CallToAction />
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}

export default App