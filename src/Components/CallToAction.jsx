import React from 'react'

const CallToAction = () => {
  return (
    <section className="bg-gray-100 text-black py-20">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Find the talent you need to succeed
        </h2>
        <p className="text-black mb-6">
          Get matched with skilled professionals and start your project today.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded text-sm font-medium hover:bg-gray-200">
          Post a Job
        </button>
      </div>
    </section>
  )
}

export default CallToAction
