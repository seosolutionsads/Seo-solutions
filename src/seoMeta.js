import React from 'react';

export default function SeoMeta() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.seosolutions.example#org',
        'name': 'SEO Solutions',
        'url': 'https://www.seosolutions.example',
        'logo': 'https://www.seosolutions.example/favicon.svg',
        'sameAs': ['https://www.facebook.com/seosolutions','https://twitter.com/seosolutions']
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.seosolutions.example#website',
        'url': 'https://www.seosolutions.example',
        'name': 'SEO Solutions',
        'publisher': {'@id': 'https://www.seosolutions.example#org'},
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://www.seosolutions.example/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'Blog',
        '@id': 'https://www.seosolutions.example#blog',
        'name': 'SEO Solutions Blog',
        'url': 'https://www.seosolutions.example/blog',
        'publisher': {'@id':'https://www.seosolutions.example#org'}
      }
    ]
  };

  return (
    <>
      <meta name="description" content="AI-powered SEO, digital marketing, and fast, mobile-first websites built to rank and convert." />
      <meta name="keywords" content="AI SEO, website design, on-page SEO, blog content, AI website builder, digital marketing" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="SEO Solutions — AI-built Websites That Rank — Fast" />
      <meta property="og:description" content="AI-powered SEO, digital marketing, and fast, mobile-first websites built to rank and convert." />
      <meta property="og:image" content="/og-seo-solutions.svg" />
      <meta property="og:url" content="https://www.seosolutions.example" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SEO Solutions — AI-built Websites That Rank — Fast" />
      <meta name="twitter:description" content="AI-powered SEO, digital marketing, and fast, mobile-first websites built to rank and convert." />
      <meta name="twitter:image" content="/og-seo-solutions.svg" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
