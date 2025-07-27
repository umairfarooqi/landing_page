import React from 'react'

const SubcategoryNav = () => {
  const categories = [
    'Web Development',
    'Mobile Development',
    'Ecommerce Development',
    'QA & Testing',
    'Data Science & Analytics',
    'Game Development',
    'Database Administration',
    'DevOps & Cloud',
    'Network & System Administration',
    'ERP/CRM Development'
  ]

  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Explore Development & IT Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SubcategoryNav
