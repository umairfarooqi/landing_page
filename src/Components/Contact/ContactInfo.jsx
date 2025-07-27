import React from 'react'

const ContactInfo = () => {
  return (
    <section className="bg-gray-100 text-black py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="font-semibold mb-2 text-lg">Phone</h3>
          <p className="text-sm text-gray-700">+92 (311) 444-3447</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-lg">Email</h3>
          <p className="text-sm text-gray-700">info@digitec.marketing</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-lg">Location</h3>
          <p className="text-sm text-gray-700">Lahore, Pakistan</p>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
