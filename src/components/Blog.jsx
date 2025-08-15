import React from 'react';

const posts = [
  {
    id: 1,
    title: 'How AI Speeds Up Keyword Research for 2025',
    excerpt: 'A practical guide to leveraging machine learning for scalable keyword discovery and intent mapping.',
    href: '/blog/ai-keyword-research-2025',
    img: '/blog-1.webp',
    alt: 'SEO analytics on screen'
  },
  {
    id: 2,
    title: 'On-page SEO Checklist: Quick Wins for Traffic',
    excerpt: 'Tactical on-page changes you can implement today for measurable gains in organic traffic.',
    href: '/blog/onpage-checklist',
    img: '/blog-2.webp',
    alt: 'Content strategy planning'
  },
  {
    id: 3,
    title: 'Designing for Conversions: UX Patterns That Work',
    excerpt: 'UX heuristics and design patterns that reduce friction and improve conversion rates for lead-gen sites.',
    href: '/blog/designing-for-conversions',
    img: '/blog-3.webp',
    alt: 'Team collaborating on digital marketing'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold">Latest from the Blog</h2>
          <a href="/blog" className="text-sm text-orange-600">View all</a>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.id} className="bg-white rounded-lg shadow-sm overflow-hidden" aria-labelledby={`post-${p.id}`}>
              <img src={p.img} alt={p.alt} className="w-full h-44 object-cover" loading="lazy"/>
              <div className="p-5">
                <h3 id={`post-${p.id}`} className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                <a href={p.href} className="mt-3 inline-block text-sm text-orange-600">Read article →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
