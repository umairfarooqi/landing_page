import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      title: 'Post a job',
      description: 'Tell us what you need. Provide details about your project and the skills required.',
    },
    {
      title: 'Connect with talent',
      description: 'Get matched with skilled professionals. Review proposals and chat directly.',
    },
    {
      title: 'Get work done',
      description: 'Collaborate, track progress, and pay securely through the platform.',
    }
  ]

  return (
    <section className="bg-white text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold mb-12 text-center">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-4xl font-bold text-gray-400 mb-4">{index + 1}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
