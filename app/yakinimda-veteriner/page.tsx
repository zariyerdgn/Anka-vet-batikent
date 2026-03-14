import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import LocalTrustSignals from '@/components/LocalTrustSignals';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Yakınımda Veteriner | Batıkent, Ankara Veteriner Kliniği',
  description: 'Batıkent, Yenimahalle, Etimesgut, Sincan, Keçiören ve çevresinde yakınınızdaki veteriner kliniği. 7/24 acil veteriner hizmeti. (0312) 354 26 52',
  keywords: 'yakınımda veteriner, batıkent veteriner, ankara veteriner, en yakın veteriner, acil veteriner, 7/24 veteriner',
};

export default function YakinimdaVeterinerPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Yakınımda Veteriner', href: '/yakinimda-veteriner' }]} />

      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <svg className="w-12 h-12 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
                <p className="text-primary-700 font-bold text-lg">Batıkent, Yenimahalle / Ankara</p>
                <p className="text-primary-600 mt-1">Her Gün (Pazar dahil): 09:00 - 23:00</p>
                <p className="text-red-600 font-medium mt-1">Acil Durumlar: 7/24 - 0554 855 05 90</p>
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
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 font-bold group-hover:bg-primary-500 group-hover:text-white transition-colors flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
                  { title: 'Modern Klinik', desc: 'Son teknoloji ekipmanlarla donatılmış klinik', svg: <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
                  { title: '3 Uzman Hekim', desc: 'Deneyimli veteriner hekim kadrosu', svg: <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
                  { title: '7/24 Acil', desc: 'Acil durumlar için her zaman ulaşılabilir', svg: <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" /></svg> },
                  { title: '4.8 Google Puanı', desc: 'Yüzlerce mutlu müşteri yorumu', svg: <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg> },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="flex justify-center mb-3">{item.svg}</div>
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
                <a href="tel:+903123542652" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> (0312) 354 26 52</a>
                <a href="https://wa.me/905548550590?text=Merhaba%2C%20randevu%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg text-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> WhatsApp</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
