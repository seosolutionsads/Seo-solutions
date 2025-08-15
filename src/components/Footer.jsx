import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <a href="#home" className="flex items-center gap-3" aria-label="SEO Solutions home">
            <svg className="speedo w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="#FF6A00" strokeWidth="1.5" fill="none"></circle>
              <path d="M7 13a5 5 0 0 1 8-3" stroke="#FF6A00" strokeWidth="1.6" strokeLinecap="round"></path>
              <path d="M12 12l4-4" stroke="#FF6A00" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <span className="font-semibold">SEO Solutions</span>
          </a>
          <p className="mt-3 text-sm text-gray-600">AI-powered SEO, content, and websites that move the needle.</p>
        </div>

        <div>
          <h4 className="font-semibold">Sitemap</h4>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li><a href="/" className="hover:text-orange-600">Home</a></li>
            <li><a href="/services" className="hover:text-orange-600">Services</a></li>
            <li><a href="/blog" className="hover:text-orange-600">Blog</a></li>
            <li><a href="/contact" className="hover:text-orange-600">Contact</a></li>
            <li><a href="/sitemap.xml" className="text-xs text-gray-400">sitemap.xml (sample)</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Follow</h4>
          <div className="flex gap-3 mt-3" role="list">
            <a href="#" aria-label="Follow on Twitter" className="p-2 rounded-md hover:bg-gray-100"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 19c7 0 10-6 10-10v-.5A7.2 7.2 0 0 0 19 6a6.8 6.8 0 0 1-2 .3 3.5 3.5 0 0 0 1.5-2A6.8 6.8 0 0 1 16 4a3.5 3.5 0 0 0-6 3 9.9 9.9 0 0 1-7-3 3.5 3.5 0 0 0 1 4.7A3.4 3.4 0 0 1 3 8v.1a3.5 3.5 0 0 0 2.8 3.4 3.4 3.4 0 0 1-1 .1c-.2 0-.4 0-.6-.1a3.5 3.5 0 0 0 3.3 2.4A7 7 0 0 1 3 17a9.9 9.9 0 0 0 5 1.5"></path></svg></a>
            <a href="#" aria-label="Follow on LinkedIn" className="p-2 rounded-md hover:bg-gray-100"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.6h.05c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.6V21H18v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.6V21H10z"></path></svg></a>
          </div>
        </div>
      </div>

      <div className="border-t py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500">© <span id="year"></span> SEO Solutions — All rights reserved.</div>
      </div>

      <script dangerouslySetInnerHTML={{__html: `document.getElementById('year').textContent = new Date().getFullYear();`}} />
    </footer>
  );
}
