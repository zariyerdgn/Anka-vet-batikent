import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Anka Veteriner Kliniği - Batıkent',
    short_name: 'Anka Vet',
    description: 'Batıkent ve Ankara genelinde profesyonel veteriner hizmetleri',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10b981',
    icons: [
      { src: '/images/logo/anka-logo.jpeg', sizes: '192x192', type: 'image/jpeg' },
      { src: '/images/logo/anka-logo.jpeg', sizes: '512x512', type: 'image/jpeg' },
    ],
  };
}
