import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import SubcategoryNav from './Components/SubcategoryNav'
import HowItWorks from './Components/HowItWorks'
import TrustedBy from './Components/TrustedBy'
import CallToAction from './Components/CallToAction'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <SubcategoryNav />
      <HowItWorks />
      {/* <TrustedBy /> */}
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App