import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Hire the best developers and IT professionals
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Browse Upwork’s top talent for your development and IT projects — from web and mobile to infrastructure and support.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded text-sm font-medium hover:bg-gray-800">
          Get Started
        </button>
      </div>
    </section>
  )
}

export default HeroSection
