import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'Pet Pansiyon | Evcil Hayvan Oteli Batıkent',
  description: 'Batıkent Ankara evcil hayvan pansiyonu. Güvenli, temiz, sevgi dolu ortam. Kedi ve köpek pansiyonu. ☎ (0312) 354 26 52',
};

export default function PansiyonPage() {
  const ozellikler = [
    { icon: '🏠', title: 'Konforlu Alanlar', desc: 'Geniş, temiz ve iklimlendirilmiş barınma alanları.' },
    { icon: '🍖', title: 'Düzenli Beslenme', desc: 'Kaliteli mama ile günlük düzenli beslenme programı.' },
    { icon: '🩺', title: 'Veteriner Kontrolü', desc: 'Günlük sağlık takibi ve gerektiğinde müdahale.' },
    { icon: '🧹', title: 'Hijyenik Ortam', desc: 'Günlük temizlik ve dezenfeksiyon uygulaması.' },
    { icon: '🎾', title: 'Oyun & Egzersiz', desc: 'Günlük oyun ve yürüyüş aktiviteleri.' },
    { icon: '📸', title: 'Günlük Bilgilendirme', desc: 'Fotoğraf ve video ile günlük durum bildirimi.' },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmetler', href: '/hizmetler' }, { name: 'Pansiyon', href: '/pansiyon' }]} />

      <section className="relative py-20 bg-gradient-to-br from-amber-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-5xl mb-4">🏡</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pet Pansiyon</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto">Tatilinizde evcil dostlarınız güvende</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/clinic/bekleme-alani.jpeg" alt="Pet Pansiyon Alanı" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Evinizden Uzakta Bir Ev</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tatile mi çıkıyorsunuz? İş seyahatiniz mi var? Evcil hayvanınızı güvenle bırakabileceğiniz en iyi adres: Anka Veteriner Kliniği Pet Pansiyon.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Veteriner hekim gözetiminde, hijyenik ve konforlu ortamda evcil dostlarınız sizi beklerken mutlu ve sağlıklı olacak. Günlük fotoğraf ve video ile hayvanınızın durumundan haberdar olacaksınız.
              </p>
              <Link href="/randevu" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-colors shadow-lg">
                Rezervasyon Yap →
              </Link>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Pansiyon Özelliklerimiz</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ozellikler.map((ozellik) => (
                <div key={ozellik.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center">
                  <div className="text-4xl mb-4">{ozellik.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{ozellik.title}</h3>
                  <p className="text-gray-600 text-sm">{ozellik.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-16 bg-amber-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pansiyon Kuralları</h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {[
                  'Aşıları güncel olmalıdır',
                  'İç-dış parazit uygulaması yapılmış olmalıdır',
                  'Kendi maması getirilebilir',
                  'Check-in ve check-out saatleri: 09:00-19:00',
                  'Minimum kalış süresi: 1 gece',
                  'Agresif hayvanlar için özel değerlendirme yapılır',
                ].map((kural) => (
                  <div key={kural} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{kural}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fiyat ve Rezervasyon</h2>
              <p className="text-gray-600 mb-6">Fiyatlar hayvanın türü ve kalış süresine göre değişiklik gösterir. Detaylı bilgi için bizi arayın.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+903123542652" className="px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg">📞 (0312) 354 26 52</a>
                <a href="https://wa.me/905548550590?text=Merhaba%2C%20pet%20pansiyon%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg text-lg">💬 WhatsApp</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <RelatedServices showAllLink exclude="/pansiyon" />
    </>
  );
}
