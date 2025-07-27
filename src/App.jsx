import React from 'react'
import Navbar from './Components/Home/Navbar'
import HeroSection from './Components/Home/HeroSection'
import SubcategoryNav from './Components/Home/SubcategoryNav'
import HowItWorks from './Components/Home/HowItWorks'
import TrustedBy from './Components/Home/TrustedBy'
import CallToAction from './Components/Home/CallToAction'
import Footer from './Components/Home/Footer'


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