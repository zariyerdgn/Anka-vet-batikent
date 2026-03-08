import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const allServices = [
  { name: 'Kedi & Köpek Muayene', href: '/kedi-kopek-muayene', icon: '🐱', desc: 'Kapsamlı sağlık kontrolü ve tedavi' },
  { name: 'Kedi Kısırlaştırma', href: '/kedi-kisirlastrma', icon: '✂️', desc: 'Güvenli kısırlaştırma operasyonları' },
  { name: 'Aşılama', href: '/asilama', icon: '💉', desc: 'Koruyucu aşılama programları' },
  { name: 'Pet Pansiyon', href: '/pansiyon', icon: '🏠', desc: 'Güvenli ve konforlu pansiyon hizmeti' },
  { name: 'Acil Veteriner', href: '/iletisim', icon: '🚑', desc: '7/24 acil veteriner hizmetleri' },
  { name: 'Ameliyat & Cerrahi', href: '/hizmetler', icon: '🏥', desc: 'Modern ameliyathane ve cerrahi operasyonlar' },
];

interface RelatedServicesProps {
  showAllLink?: boolean;
  exclude?: string;
}

export default function RelatedServices({ showAllLink = true, exclude }: RelatedServicesProps) {
  const filtered = exclude ? allServices.filter(s => s.href !== exclude) : allServices;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Diğer Hizmetlerimiz</h2>
            <p className="mt-3 text-gray-600">Batıkent ve Ankara genelinde sunduğumuz tüm veteriner hizmetleri</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.05}>
              <Link
                href={service.href}
                className="block p-5 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {showAllLink && (
          <div className="text-center mt-8">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
            >
              Tüm Hizmetleri Görüntüle
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
