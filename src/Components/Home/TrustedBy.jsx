import React from 'react'

const TrustedBy = () => {
  const companies = [
    'Microsoft',
    'Airbnb',
    'Dropbox',
    'General Electric',
    'GoDaddy',
    'Samsung',
    'Cisco',
    'Intel'
  ]

  return (
    <section className="bg-gray-100 text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-sm uppercase tracking-wide text-gray-600 mb-8">
          Trusted by leading companies
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700">
          {companies.map((company, index) => (
            <div key={index} className="px-4 py-2 border border-gray-300 rounded">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
