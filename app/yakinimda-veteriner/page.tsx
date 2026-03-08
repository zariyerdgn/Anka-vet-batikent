import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import LocalTrustSignals from '@/components/LocalTrustSignals';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Yakınımda Veteriner | Batıkent, Ankara Veteriner Kliniği',
  description: 'Batıkent, Yenimahalle, Etimesgut, Sincan, Keçiören ve çevresinde yakınınızdaki veteriner kliniği. 7/24 acil veteriner hizmeti. ☎ (0312) 354 26 52',
  keywords: 'yakınımda veteriner, batıkent veteriner, ankara veteriner, en yakın veteriner, acil veteriner, 7/24 veteriner',
};

export default function YakinimdaVeterinerPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Yakınımda Veteriner', href: '/yakinimda-veteriner' }]} />

      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-5xl mb-4">📍</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Yakınımda Veteriner</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">Batıkent ve çevresinde size en yakın veteriner kliniği</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Anka Veteriner Kliniği - Batıkent</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ankara Batıkent&apos;te bulunan Anka Veteriner Kliniği, çevredeki tüm semtlere hizmet vermektedir. 
                Modern ekipmanlarımız ve deneyimli kadromuz ile evcil dostlarınıza en iyi veteriner hizmetini sunuyoruz.
              </p>
              <div className="bg-primary-50 rounded-2xl p-6 inline-block">
                <p className="text-primary-700 font-bold text-lg">📍 Batıkent, Yenimahalle / Ankara</p>
                <p className="text-primary-600 mt-1">Hafta içi: 09:00 - 19:00 | Cumartesi: 09:00 - 17:00</p>
                <p className="text-red-600 font-medium mt-1">🚨 Pazar: Sadece Acil Durumlar</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Hizmet Bölgelerimiz</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Aşağıdaki bölgelerde &quot;yakınımda veteriner&quot; arıyorsanız, Anka Veteriner Kliniği size en yakın adrestir.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <Link href={`/bolge/${loc.slug}`} key={loc.slug} className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:border-primary-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 text-xl font-bold group-hover:bg-primary-500 group-hover:text-white transition-colors flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{loc.name} Veteriner</h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{loc.description}</p>
                      <span className="text-primary-500 text-sm font-medium mt-2 inline-block">Detayları Gör →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Neden Anka Veteriner?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: '🏥', title: 'Modern Klinik', desc: 'Son teknoloji ekipmanlarla donatılmış klinik' },
                  { icon: '👨‍⚕️', title: '3 Uzman Hekim', desc: 'Deneyimli veteriner hekim kadrosu' },
                  { icon: '🚨', title: '7/24 Acil', desc: 'Acil durumlar için her zaman ulaşılabilir' },
                  { icon: '⭐', title: '4.8 Google Puanı', desc: 'Yüzlerce mutlu müşteri yorumu' },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Konum</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.123456789!2d32.6936!3d39.9652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBat%C4%B1kent%2C%20Ankara!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Anka Veteriner Kliniği Konum"
                />
              </div>
            </div>
          </AnimatedSection>

          <LocalTrustSignals variant="full" />

          <AnimatedSection>
            <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hemen Arayın!</h2>
              <p className="text-gray-600 mb-6">Yakınımda veteriner arıyorsanız, hemen bizi arayarak randevu alabilirsiniz.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+903123542652" className="px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg">📞 (0312) 354 26 52</a>
                <a href="https://wa.me/905548550590?text=Merhaba%2C%20randevu%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg text-lg">💬 WhatsApp</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
