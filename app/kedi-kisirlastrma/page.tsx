import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'Kedi Kısırlaştırma | Uygun Fiyat & Profesyonel Hizmet',
  description: 'Batıkent Ankara kedi kısırlaştırma ameliyatı. Deneyimli cerrahlar, steril ortam, post-op bakım. ☎ (0312) 354 26 52 ile randevu alın.',
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
            <div className="text-5xl mb-4">🐱</div>
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
              <Link href="/randevu" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg">
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
                  <div className="text-3xl mb-2">🍽️</div>
                  <h3 className="font-bold text-gray-900 mb-1">Aç Kalma</h3>
                  <p className="text-sm text-gray-600">Ameliyattan 8-12 saat önce yem ve su kesilmelidir.</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4">
                  <div className="text-3xl mb-2">🩺</div>
                  <h3 className="font-bold text-gray-900 mb-1">Ön Muayene</h3>
                  <p className="text-sm text-gray-600">Ameliyat öncesi genel sağlık kontrolü yapılır.</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4">
                  <div className="text-3xl mb-2">💉</div>
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
                <a href="tel:+903123542652" className="px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg">📞 (0312) 354 26 52</a>
                <a href="https://wa.me/905548550590?text=Merhaba%2C%20kedi%20k%C4%B1s%C4%B1rla%C5%9Ft%C4%B1rma%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg text-lg">💬 WhatsApp</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <RelatedServices showAllLink exclude="/kedi-kisirlastrma" />
    </>
  );
}
