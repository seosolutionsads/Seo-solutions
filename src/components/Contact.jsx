import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <p className="mt-2 text-gray-600">Schedule a free site audit or ask about our AI website builder and SEO packages.</p>

          <ul className="mt-6 text-sm text-gray-700 space-y-3">
            <li><strong>Email:</strong> <a href="mailto:hello@seosolutions.example" className="text-orange-600">hello@seosolutions.example</a></li>
            <li><strong>Phone:</strong> <a href="tel:+1234567890" className="text-orange-600">+1 (234) 567-890</a></li>
            <li><strong>Newsletter:</strong> Sign up below for monthly SEO insights and tools.</li>
          </ul>

          <div className="mt-6">
            <form aria-label="Newsletter signup" className="flex gap-2" onSubmit={(e)=>{e.preventDefault(); alert('Thanks — newsletter signup simulated in prototype.')}}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Your email" required className="px-4 py-2 rounded-md border border-gray-200 w-full" aria-required="true"/>
              <button type="submit" className="px-4 py-2 rounded-md bg-orange-500 text-white">Subscribe</button>
            </form>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact Form</h3>
          <form id="contact-form" className="mt-4 bg-white p-6 rounded-lg shadow-sm" aria-label="Contact form" onSubmit={(e)=>{e.preventDefault(); alert('Contact form submitted (prototype).')}}>
            <div className="grid grid-cols-1 gap-4">
              <label className="sr-only" htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" placeholder="Full name" required className="px-4 py-2 rounded-md border border-gray-200" aria-required="true"/>

              <label className="sr-only" htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="Email" required className="px-4 py-2 rounded-md border border-gray-200" aria-required="true"/>

              <label className="sr-only" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us about your project" required className="px-4 py-2 rounded-md border border-gray-200" aria-required="true"></textarea>

              <div className="flex justify-end">
                <button type="submit" className="px-6 py-2 bg-orange-500 text-white rounded-md">Send message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
