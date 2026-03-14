import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'Pet Pansiyon | Evcil Hayvan Oteli Batıkent',
  description: 'Batıkent Ankara evcil hayvan pansiyonu. Güvenli, temiz, sevgi dolu ortam. Kedi ve köpek pansiyonu. (0312) 354 26 52',
};

export default function PansiyonPage() {
  const ozellikler = [
    { icon: 'ev', title: 'Konforlu Alanlar', desc: 'Geniş, temiz ve iklimlendirimiş barınma alanları.' },
    { icon: 'beslenme', title: 'Düzenli Beslenme', desc: 'Kaliteli mama ile günlük düzenli beslenme programı.' },
    { icon: 'saglik', title: 'Veteriner Kontrolü', desc: 'Günlük sağlık takibi ve gerektiğinde müdahale.' },
    { icon: 'temizlik', title: 'Hijyenik Ortam', desc: 'Günlük temizlik ve dezenfeksiyon uygulaması.' },
    { icon: 'oyun', title: 'Oyun & Egzersiz', desc: 'Günlük oyun ve yürüyüş aktiviteleri.' },
    { icon: 'bilgi', title: 'Günlük Bilgilendirme', desc: 'Fotoğraf ve video ile günlük durum bildirimi.' },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmetler', href: '/hizmetler' }, { name: 'Pansiyon', href: '/pansiyon' }]} />

      <section className="relative py-20 bg-gradient-to-br from-amber-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <svg className="w-12 h-12 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
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
              <Link href="/randevu" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bordo-600 to-bordo-700 text-white font-bold rounded-xl hover:from-bordo-700 hover:to-bordo-800 transition-colors shadow-lg shadow-bordo-600/25">
                Rezervasyon Yap →
              </Link>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Pansiyon Özelliklerimiz</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ozellikler.map((ozellik) => {
                const iconMap: Record<string, React.ReactNode> = {
                  ev: <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
                  beslenme: <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                  saglik: <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  temizlik: <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
                  oyun: <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  bilgi: <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                };
                return (
                <div key={ozellik.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center mb-4">{iconMap[ozellik.icon]}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{ozellik.title}</h3>
                  <p className="text-gray-600 text-sm">{ozellik.desc}</p>
                </div>
                );
              })}
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
                <a href="tel:+903123542652" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> (0312) 354 26 52</a>
                <a href="https://wa.me/905548550590?text=Merhaba%2C%20pet%20pansiyon%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg text-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> WhatsApp</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <RelatedServices showAllLink exclude="/pansiyon" />
    </>
  );
}
