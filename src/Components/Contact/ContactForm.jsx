import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_kdhwwpt',     // e.g. service_xxx
      'template_pii3mm9',    // e.g. template_yyy
      form.current,
      'Rl6JIn3j1nqEss_oc'      // e.g. LZt_public_key
    ).then(
      () => {
        alert('Message sent successfully!')
        form.current.reset()
      },
      (error) => {
        alert('Something went wrong. Please try again.')
      }
    )
  }

  return (
    <section className="bg-white text-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
            ></textarea>
          </div>

          {/* Optional timestamp */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded text-sm font-medium hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
