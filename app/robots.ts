import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isTest = process.env.NEXT_PUBLIC_ENVIRONMENT === 'test';

  return {
    rules: {
      userAgent: '*',
      allow: isTest ? undefined : '/',
      disallow: isTest ? '/' : ['/api/', '/_next/'],
    },
    sitemap: 'https://batikentveteriner.com/sitemap.xml',
  };
}
