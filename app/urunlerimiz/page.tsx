import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Ürünlerimiz | Kedi Köpek Mama & Bakım Ürünleri',
  description: 'Batıkent Ankara veteriner kliniği ürünleri. Kedi köpek mama, vitamin, bakım ürünleri, medikal ürünler. ☎ (0312) 354 26 52',
};

export default function UrunlerimizPage() {
  const kategoriler = [
    {
      title: 'Kedi Mamaları',
      icon: '🐱',
      items: ['Royal Canin', 'Hills Science Diet', 'Pro Plan', 'Acana', 'Orijen', 'Brit Care'],
    },
    {
      title: 'Köpek Mamaları',
      icon: '🐶',
      items: ['Royal Canin', 'Hills Science Diet', 'Pro Plan', 'Acana', 'Orijen', 'Brit Care'],
    },
    {
      title: 'Vitamin & Takviyeler',
      icon: '💊',
      items: ['Tüy bakım vitaminleri', 'Eklem destekleyiciler', 'Bağışıklık güçlendiriciler', 'Omega yağ asitleri'],
    },
    {
      title: 'Bakım Ürünleri',
      icon: '🧴',
      items: ['Şampuanlar', 'Kulak temizleyiciler', 'Göz bakım ürünleri', 'Diş bakım ürünleri'],
    },
    {
      title: 'Parazit Ürünleri',
      icon: '🛡️',
      items: ['İç parazit tabletleri', 'Dış parazit damlaları', 'Pire-kene tasmaları', 'Çevre spreyleri'],
    },
    {
      title: 'Medikal Ürünler',
      icon: '🏥',
      items: ['Yara bakım ürünleri', 'Elizabeth yakalıklar', 'Bandajlar', 'Sterilizasyon ürünleri'],
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Ürünlerimiz', href: '/urunlerimiz' }]} />

      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-5xl mb-4">🛒</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ürünlerimiz</h1>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">Evcil dostlarınız için en kaliteli ürünler</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/products/urunlerimiz.jpeg" alt="Veteriner Ürünleri" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Güvenilir Ürünler</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Kliniğimizde evcil hayvanlarınız için ihtiyaç duyabileceğiniz tüm ürünleri bulabilirsiniz. Mama, vitamin, bakım ürünleri ve medikal malzemeler stoklarımızda mevcuttur.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hekimlerimiz, hayvanınızın durumuna ve ihtiyaçlarına uygun ürünleri önerir. Tüm ürünlerimiz orijinal ve Tarım Bakanlığı onaylıdır.
              </p>
              <div className="space-y-3">
                {['Orijinal ve onaylı ürünler', 'Veteriner hekim tavsiyeleri', 'Uygun fiyat garantisi', 'Geniş ürün yelpazesi'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/products/klinik-ici-urunlerimiz.jpeg" alt="Klinik İçi Ürünlerimiz" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Neden Kliniğimizden Alışveriş?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold">1.</span>
                    <span className="text-gray-700">Hekiminiz hayvanınıza en uygun ürünü birebir önerir.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold">2.</span>
                    <span className="text-gray-700">Sahte veya son kullanma tarihi geçmiş ürün riski yoktur.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold">3.</span>
                    <span className="text-gray-700">Muayene sonrası hemen ihtiyacınız olan ürünleri temin edebilirsiniz.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold">4.</span>
                    <span className="text-gray-700">Ürün kullanım talimatları hekim tarafından detaylıca açıklanır.</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Ürün Kategorileri</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kategoriler.map((kategori) => (
                <div key={kategori.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">{kategori.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{kategori.title}</h3>
                  <ul className="space-y-1">
                    {kategori.items.map((item) => (
                      <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ürün Bilgisi İçin Bizi Arayın</h2>
              <p className="text-gray-600 mb-6">Aradığınız ürünün stok durumu ve fiyat bilgisi için bize ulaşabilirsiniz.</p>
              <a href="tel:+903123542652" className="inline-flex px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg">📞 (0312) 354 26 52</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
