import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3" aria-label="SEO Solutions home">
            <svg className="speedo w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="#FF6A00" strokeWidth="1.5" fill="none"></circle>
              <path d="M7 13a5 5 0 0 1 8-3" stroke="#FF6A00" strokeWidth="1.6" strokeLinecap="round"></path>
              <path d="M12 12l4-4" stroke="#FF6A00" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <span className="font-semibold text-lg">SEO Solutions</span>
          </a>

          <nav aria-label="Top Navigation" className="hidden md:flex gap-6 items-center">
            <a href="#home" className="text-sm hover:text-orange-600">Home</a>
            <a href="#services" className="text-sm hover:text-orange-600">Services</a>
            <a href="#blog" className="text-sm hover:text-orange-600">Blog</a>
            <a href="#contact" className="text-sm hover:text-orange-600">Contact</a>
            <a href="#contact" className="ml-3 inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-md text-sm shadow-sm hover:bg-orange-600" role="button">Get Started</a>
          </nav>

          <div className="md:hidden">
            <button id="mobile-menu-button" aria-expanded="false" aria-controls="mobile-menu" className="p-2 rounded-md focus:ring-2 focus:ring-orange-200">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="md:hidden hidden" role="menu" aria-label="Mobile navigation">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="block px-3 py-2 rounded-md">Home</a>
          <a href="#services" className="block px-3 py-2 rounded-md">Services</a>
          <a href="#blog" className="block px-3 py-2 rounded-md">Blog</a>
          <a href="#contact" className="block px-3 py-2 rounded-md">Contact</a>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html: `        (function(){          const mmBtn = document.getElementById('mobile-menu-button');          const mm = document.getElementById('mobile-menu');          if(!mmBtn) return;          mmBtn.addEventListener('click', () => {            const expanded = mmBtn.getAttribute('aria-expanded') === 'true';            mmBtn.setAttribute('aria-expanded', String(!expanded));            mm.classList.toggle('hidden');          });        })();`}} />
    </header>
  );
}
