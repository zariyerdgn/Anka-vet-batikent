import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Batıkent ve Ankara genelinde evcil hayvan veteriner hizmetleri. Kedi köpek muayene, aşılama, kısırlaştırma, cerrahi, acil veteriner.',
};

const services = [
  { name: 'Kedi & Köpek Muayene ve Tedavi', href: '/kedi-kopek-muayene', icon: '🐱', image: '/images/services/kopek-muayene.jpeg', features: ['Kapsamlı sağlık kontrolü', 'Laboratuvar testleri', 'İlaç tedavisi', 'Diyet danışmanlığı'] },
  { name: 'Aşılama ve Koruyucu Sağlık', href: '/asilama', icon: '💉', image: '/images/services/muayenehane.jpeg', features: ['Aşı takvimi planlaması', 'Karma aşılar', 'Kuduz aşısı', 'Parazit koruması'] },
  { name: 'Acil Veteriner Hizmetleri (7/24)', href: '/iletisim', icon: '🚑', image: '/images/surgery/ameliyathane.jpeg', features: ['7/24 acil müdahale', 'Travma tedavisi', 'Zehirlenme tedavisi', 'Yoğun bakım'] },
  { name: 'İç Hastalıkları', href: '/hizmetler', icon: '🩺', image: '/images/services/muayenehane-3.jpeg', features: ['Tanı ve teşhis', 'Kronik hastalık yönetimi', 'Endokrin hastalıklar', 'Sindirim sistemi'] },
  { name: 'Ameliyat ve Cerrahi', href: '/hizmetler', icon: '🏥', image: '/images/surgery/operasyon.jpeg', features: ['Steril ortam', 'Modern anestezi', 'Yumuşak doku cerrahisi', 'Ortopedik cerrahi'] },
  { name: 'Yavru Bakımı', href: '/hizmetler', icon: '🐣', image: '/images/services/kopek-muayene-2.jpeg', features: ['Yavru sağlık kontrolü', 'Aşılama programı', 'Beslenme danışmanlığı', 'Sosyalleşme rehberi'] },
  { name: 'Kedi Kısırlaştırma', href: '/kedi-kisirlastrma', icon: '✂️', image: '/images/services/muayenehane-3.jpeg', features: ['Güvenli operasyon', 'Modern anestezi', 'Hızlı iyileşme', 'Kontrol muayenesi'] },
  { name: 'Kedi & Köpek Pansiyonu', href: '/pansiyon', icon: '🏠', image: '/images/clinic/bekleme-alani.jpeg', features: ['Güvenli konaklama', 'Günlük bakım', 'Oyun alanları', 'Veteriner gözetimi'] },
];

export default function HizmetlerPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmetler', href: '/hizmetler' }]} />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Veteriner Hizmetlerimiz</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Batıkent ve Ankara genelinde evcil hayvan sağlığı alanında kapsamlı veteriner hizmetleri sunuyoruz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, i) => (
              <AnimatedSection key={service.name} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow`}>
                  <div className="relative w-full lg:w-2/5 h-64 lg:h-80">
                    <Image src={service.image} alt={service.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 text-4xl">{service.icon}</div>
                  </div>
                  <div className="flex-1 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-gray-600">
                          <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
                    >
                      Detaylı Bilgi
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Randevu Almak İster Misiniz?</h2>
          <p className="text-gray-600 mb-8">Hizmetlerimiz hakkında detaylı bilgi almak veya randevu oluşturmak için bize ulaşın.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/randevu" className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-colors shadow-lg text-lg">
              Randevu Al
            </Link>
            <a href="tel:+903123542652" className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-colors border border-primary-200 text-lg">
              📞 (0312) 354 26 52
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
