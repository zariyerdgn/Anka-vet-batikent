import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'Kedi Kısırlaştırma | Uygun Fiyat & Profesyonel Hizmet',
  description: 'Batıkent Ankara kedi kısırlaştırma ameliyatı. Deneyimli cerrahlar, steril ortam, post-op bakım. (0312) 354 26 52 ile randevu alın.',
};

export default function KediKisirlastrmaPage() {
  const faydalar = [
    { title: 'Uzun Ömür', desc: 'Kısırlaştırılmış kediler ortalama 3-5 yıl daha uzun yaşar.' },
    { title: 'Kanser Riski Azalır', desc: 'Meme ve rahim kanserine yakalanma riski önemli ölçüde azalır.' },
    { title: 'Davranış İyileşir', desc: 'Markaj yapma, kaçma isteği ve agresif davranışlar azalır.' },
    { title: 'Sokak Hayvanı Sorunu', desc: 'Kontrolsüz üremenin önüne geçilir, toplum sağlığına katkı sağlanır.' },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmetler', href: '/hizmetler' }, { name: 'Kedi Kısırlaştırma', href: '/kedi-kisirlastrma' }]} />

      <section className="relative py-20 bg-gradient-to-br from-pink-500 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <svg className="w-12 h-12 text-white mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18c-2.21 0-4-1.79-4-4 0-1.66 2-5 4-5s4 3.34 4 5c0 2.21-1.79 4-4 4zm-3.5-9C7.67 9 7 8.33 7 7.5S7.67 6 8.5 6 10 6.67 10 7.5 9.33 9 8.5 9zm7 0c-.83 0-1.5-.67-1.5-1.5S14.67 6 15.5 6 17 6.67 17 7.5 16.33 9 15.5 9zm-10 3c-.83 0-1.5-.67-1.5-1.5S4.67 8 5.5 8 7 8.67 7 9.5 6.33 12 5.5 12zm13 0c-.83 0-1.5-.67-1.5-1.5S17.67 8 18.5 8 20 8.67 20 9.5 19.33 12 18.5 12z" /></svg>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kedi Kısırlaştırma</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">Güvenli ameliyat, hızlı iyileşme, mutlu kedi</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/surgery/kedi-ameliyati.jpeg" alt="Kedi Kısırlaştırma Ameliyatı" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Profesyonel Kısırlaştırma Ameliyatı</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Anka Veteriner Kliniği&apos;nde kedi kısırlaştırma ameliyatları, modern ameliyathane ortamında ve deneyimli cerrahlarımız tarafından gerçekleştirilmektedir. Genel anestezi altında yapılan operasyon yaklaşık 20-30 dakika sürmektedir.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ameliyat sonrası kediniz aynı gün içinde taburcu edilir. Post-operatif bakım talimatları detaylı olarak verilir ve kontrol muayeneleri tarafımızca takip edilir.
              </p>
              <Link href="/randevu" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bordo-600 to-bordo-700 text-white font-bold rounded-xl hover:from-bordo-700 hover:to-bordo-800 transition-colors shadow-lg shadow-bordo-600/25">
                Randevu Al →
              </Link>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Kısırlaştırmanın Faydaları</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faydalar.map((fayda) => (
                <div key={fayda.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{fayda.title}</h3>
                  <p className="text-gray-600">{fayda.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-16 bg-gradient-to-r from-pink-50 to-primary-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ameliyat Öncesi Hazırlık</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/80 rounded-xl p-4">
                  <div className="flex justify-center mb-2"><svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg></div>
                  <h3 className="font-bold text-gray-900 mb-1">Aç Kalma</h3>
                  <p className="text-sm text-gray-600">Ameliyattan 8-12 saat önce yem ve su kesilmelidir.</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4">
                  <div className="flex justify-center mb-2"><svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                  <h3 className="font-bold text-gray-900 mb-1">Ön Muayene</h3>
                  <p className="text-sm text-gray-600">Ameliyat öncesi genel sağlık kontrolü yapılır.</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4">
                  <div className="flex justify-center mb-2"><svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg></div>
                  <h3 className="font-bold text-gray-900 mb-1">Aşı Kontrolü</h3>
                  <p className="text-sm text-gray-600">Aşılarının güncel olması önerilir.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fiyat Bilgisi İçin Bizi Arayın</h2>
              <p className="text-gray-600 mb-6">Kedi kısırlaştırma ücretleri hayvanın cinsiyetine ve ağırlığına göre değişiklik gösterebilir.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+903123542652" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> (0312) 354 26 52</a>
                <a href="https://wa.me/905548550590?text=Merhaba%2C%20kedi%20k%C4%B1s%C4%B1rla%C5%9Ft%C4%B1rma%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg text-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> WhatsApp</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <RelatedServices showAllLink exclude="/kedi-kisirlastrma" />
    </>
  );
}
