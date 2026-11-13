
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoConfig, SITE_URL } from './seoConfig';
import React from 'react';

function normalizePath(path) {
  if (!path || path === '/') return '/';

  return `/${path.replace(/^\/+|\/+$/g, '')}`;
}

export default function SEO({
  page,
  title,
  description,
  noindex = false,
}) {
  const location = useLocation();
  const config = seoConfig[page];

  if (!config && (!title || !description)) {
    console.warn(`SEO configuration not found for page: ${page}`);
    return null;
  }

  const pageTitle = title || config.title;
  const pageDescription = description || config.description;

  // Gunakan URL aktif agar halaman detail tidak memakai canonical halaman induk.
  const canonicalPath = normalizePath(location.pathname);
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta
        name="description"
        content={pageDescription}
      />

      <meta
        name="robots"
        content={noindex ? 'noindex, follow' : 'index, follow'}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Duduk Manis" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
  );
}
