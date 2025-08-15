import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-medium text-orange-600">AI · SEO · Design</p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">AI-built Websites That Rank — Fast</h1>
          <p className="mt-4 text-gray-600 max-w-xl">We combine AI-driven SEO, lightning-fast web builds, and conversion-focused design to help your business grow. Mobile-first, accessible, and optimized for real rankings.</p>

          <div className="mt-6 flex gap-3">
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600" role="button">Get a Free Audit</a>
            <a href="#services" className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-md">Explore Services</a>
          </div>

          <div className="mt-6 text-xs text-gray-500">Trusted by startups and growth teams — performance, transparency, and measurable results.</div>
        </div>

        <div className="order-first lg:order-last">
          <img src="/hero.webp" alt="Team reviewing SEO analytics dashboard" className="w-full rounded-xl shadow-lg object-cover" loading="lazy" width="1200" height="800"/>
        </div>
      </div>
    </section>
  );
}
