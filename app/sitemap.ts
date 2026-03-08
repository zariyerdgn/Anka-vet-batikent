import type { MetadataRoute } from 'next';
import { locations } from '@/lib/locations';

const blogSlugs = [
  'kopeklerde-asi-takvimi',
  'kedilerde-beslenme',
  'kis-aylarinda-evcil-hayvan-bakimi',
  'kopeklerde-dis-sagligi',
  'kedilerde-stres-belirtileri',
  'yavru-kopek-egitimi',
  'kuslarda-tuy-dokulmesi',
  'evcil-hayvanlarda-obezite',
  'kedilerde-tirnak-bakimi',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://batikentveteriner.com';

  const staticPages = [
    '', '/hakkimizda', '/hakkimizda/ekibimiz', '/hakkimizda/sss', '/hakkimizda/musteri-gorusleri',
    '/hizmetler', '/iletisim', '/randevu', '/blog', '/galeri',
    '/kedi-kisirlastrma', '/kedi-kopek-muayene',
    '/asilama', '/pansiyon', '/urunlerimiz', '/yakinimda-veteriner',
    '/sik-sorulan-sorular', '/bolge', '/gizlilik-politikasi', '/kullanim-kosullari',
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : path === '/hizmetler' ? 0.9 : 0.8,
  }));

  locations.forEach((loc) => {
    pages.push({
      url: `${baseUrl}/bolge/${loc.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  blogSlugs.forEach((slug) => {
    pages.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return pages;
}
