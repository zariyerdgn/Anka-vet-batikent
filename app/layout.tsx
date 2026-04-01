import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileCallBar from '@/components/MobileCallBar';
import ScrollToTop from '@/components/ScrollToTop';
import OfflineIndicator from '@/components/OfflineIndicator';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://batikentankavet.com'),
  title: {
    default: 'Batıkent Veteriner | Anka Veteriner Kliniği - Ankara Pet & Evcil Hayvan',
    template: '%s | Anka Veteriner Kliniği Batıkent',
  },
  description: 'Batıkent ve Ankara\'da evcil hayvan veteriner hizmetleri. Kedi köpek muayene, aşılama, kısırlaştırma, cerrahi, acil veteriner. 0554 855 05 90',
  keywords: ['Batıkent veteriner', 'Ankara veteriner', 'Batıkent veteriner kliniği', 'kedi köpek veteriner Batıkent', 'kedi kısırlaştırma Ankara', 'aşılama', 'acil veteriner Batıkent', 'Yenimahalle veteriner', 'Etimesgut veteriner', 'evcil hayvan veteriner'],
  authors: [{ name: 'Anka Veteriner Kliniği' }],
  creator: 'Anka Veteriner Kliniği',
  publisher: 'Anka Veteriner Kliniği',
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://batikentankavet.com',
    siteName: 'Anka Veteriner Kliniği Batıkent',
    title: 'Batıkent Veteriner | Anka Veteriner Kliniği',
    description: 'Batıkent ve Ankara\'da profesyonel veteriner hizmetleri. Evcil hayvan sağlığı.',
    images: [{ url: '/images/hero/klinik-dis.jpeg', width: 1200, height: 630, alt: 'Anka Veteriner Kliniği Batıkent' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batıkent Veteriner | Anka Veteriner Kliniği',
    description: 'Batıkent ve Ankara\'da profesyonel veteriner hizmetleri.',
    images: ['/images/hero/klinik-dis.jpeg'],
  },
  robots: {
    index: process.env.NEXT_PUBLIC_ENVIRONMENT !== 'test',
    follow: process.env.NEXT_PUBLIC_ENVIRONMENT !== 'test',
  },
  alternates: { canonical: 'https://batikentankavet.com' },
  other: {
    'geo.region': 'TR-06',
    'geo.placename': 'Batıkent, Ankara',
    'geo.position': '39.9700;32.7400',
    'ICBM': '39.9700, 32.7400',
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['VeterinaryCare', 'LocalBusiness', 'MedicalBusiness'],
      '@id': 'https://batikentankavet.com/#organization',
      name: 'Anka Veteriner Kliniği',
      alternateName: 'Batıkent Anka Veteriner',
      description: 'Batıkent ve Ankara genelinde evcil hayvan veteriner hizmetleri.',
      url: 'https://batikentankavet.com',
      telephone: '+903123542652',
      email: 'ankavet06@gmail.com',
      priceRange: '₺₺',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kentkoop Mh 1859. Cadde, Batıkent Blv. Özgünkent Sitesi No:22C D:22.Blok',
        addressLocality: 'Yenimahalle',
        addressRegion: 'Ankara',
        postalCode: '06370',
        addressCountry: 'TR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 39.97, longitude: 32.74 },
      areaServed: [
        { '@type': 'City', name: 'Ankara' },
        { '@type': 'AdministrativeArea', name: 'Batıkent' },
        { '@type': 'AdministrativeArea', name: 'Yenimahalle' },
        { '@type': 'AdministrativeArea', name: 'Etimesgut' },
        { '@type': 'AdministrativeArea', name: 'Sincan' },
        { '@type': 'AdministrativeArea', name: 'Keçiören' },
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 39.97, longitude: 32.74 },
        geoRadius: '30000',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Veteriner Hizmetleri',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kedi & Köpek Muayene ve Tedavi' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aşılama ve Koruyucu Sağlık' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Acil Veteriner Hizmetleri' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ameliyat ve Cerrahi' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kedi Kısırlaştırma' } },
        ],
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '09:00', closes: '23:00' },
      ],
      sameAs: ['https://www.instagram.com/ankavetbatikent/'],
      founder: {
        '@type': 'Person',
        name: 'İbrahim Yıldırım',
        jobTitle: 'Veteriner Hekim',
      },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '200', bestRating: '5' },
      isAcceptingNewPatients: true,
      image: 'https://batikentankavet.com/images/hero/klinik-dis.jpeg',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Batıkent\'te veteriner kliniği var mı?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, Anka Veteriner Kliniği Batıkent\'te hizmet vermektedir. Evcil hayvan sağlığı alanında uzman kadromuzla hizmetinizdeyiz.' } },
        { '@type': 'Question', name: 'Batıkent\'te 7/24 acil veteriner var mı?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, Anka Veteriner Kliniği 7/24 acil veteriner hizmeti sunmaktadır. Acil durumlar için 0554 855 05 90 numaralı telefondan bize ulaşabilirsiniz.' } },
        { '@type': 'Question', name: 'Batıkent\'te kedi köpek veterineri var mı?', acceptedAnswer: { '@type': 'Answer', text: 'Evet, kliniğimizde kedi ve köpek muayene, aşılama, kısırlaştırma ve cerrahi operasyonlar dahil tüm veteriner hizmetleri sunulmaktadır.' } },
        { '@type': 'Question', name: 'Batıkent veteriner ücretleri ne kadar?', acceptedAnswer: { '@type': 'Answer', text: 'Veteriner ücretlerimiz yapılacak işleme göre değişmektedir. Detaylı bilgi için 0554 855 05 90 numaralı telefondan veya WhatsApp üzerinden bize ulaşabilirsiniz.' } },
      ],
    },
    {
      '@type': 'WebSite',
      url: 'https://batikentankavet.com',
      name: 'Anka Veteriner Kliniği Batıkent',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://batikentankavet.com/blog?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="theme-color" content="#14b8a6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${poppins.className} antialiased bg-white text-gray-900`}>
        <GoogleAnalytics />
        <OfflineIndicator />
        <Navigation />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileCallBar />
        <ScrollToTop />
      </body>
    </html>
  );
}
