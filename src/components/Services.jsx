import React from 'react';

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">AI-enhanced tools and human expertise — tailored packages for startups to enterprise.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-lg shadow-sm" aria-labelledby="ai-builder">
            <img src="/service-ai-builder.webp" alt="AI Website Builder" className="w-full h-36 object-cover rounded" loading="lazy"/>
            <h3 id="ai-builder" className="text-lg font-semibold mt-3">AI Website Builder</h3>
            <p className="mt-2 text-gray-600">Generate fast, SEO-optimized pages with automated schema, meta-tags, and content suggestions. Deployable to your hosting or our managed platform.</p>
            <ul className="mt-3 text-sm text-gray-600 space-y-1">
              <li>Mobile-first templates</li>
              <li>WebP images & lazy loading</li>
              <li>Automatic sitemap generation</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-sm" aria-labelledby="onpage-seo">
            <img src="/service-onpage.webp" alt="On-page SEO" className="w-full h-36 object-cover rounded" loading="lazy"/>
            <h3 id="onpage-seo" className="text-lg font-semibold mt-3">On-page SEO</h3>
            <p className="mt-2 text-gray-600">Technical audits, structured data, speed optimizations, and keyword-driven content recommendations to boost organic visibility.</p>
            <ul className="mt-3 text-sm text-gray-600 space-y-1">
              <li>Technical SEO audits</li>
              <li>Core Web Vitals improvements</li>
              <li>Schema markup & Open Graph tuning</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-sm" aria-labelledby="blog-creation">
            <img src="/service-blog.webp" alt="Blog Content Creation" className="w-full h-36 object-cover rounded" loading="lazy"/>
            <h3 id="blog-creation" className="text-lg font-semibold mt-3">Blog Content Creation</h3>
            <p className="mt-2 text-gray-600">Keyword-focused blog posts written and optimized for search intent, with meta tags, internal linking suggestions, and featured image design.</p>
            <ul className="mt-3 text-sm text-gray-600 space-y-1">
              <li>SEO-optimized outlines & titles</li>
              <li>Image & alt text strategy</li>
              <li>Publishing + analytics tracking</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
