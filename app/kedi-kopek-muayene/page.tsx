import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'Kedi & Köpek Muayene | Batıkent Veteriner',
  description: 'Batıkent Ankara\'da kedi ve köpek muayene hizmeti. Genel sağlık kontrolü, aşılama, tedavi. (0312) 354 26 52',
};

export default function KediKopekMuayenePage() {
  const muayeneTurleri = [
    { icon: 'stethoscope', title: 'Genel Sağlık Kontrolü', desc: 'Fiziksel muayene, vücut sıcaklığı, kalp ve solunum kontrolü.' },
    { icon: 'eye', title: 'Göz ve Kulak Muayenesi', desc: 'Göz, kulak ve diş sağlığının detaylı kontrolü.' },
    { icon: 'lab', title: 'Laboratuvar Tetkikleri', desc: 'Kan sayımı, biyokimya, idrar tahlili.' },
    { icon: 'imaging', title: 'Görüntüleme', desc: 'Ultrasonografi ve röntgen ile iç organ kontrolü.' },
    { icon: 'pill', title: 'İç-Dış Parazit Kontrolü', desc: 'Parazit tarama ve koruyucu tedavi uygulamaları.' },
    { icon: 'vaccine', title: 'Aşı Takibi', desc: 'Aşı takviminin kontrolü ve gerekli aşıların yapılması.' },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmetler', href: '/hizmetler' }, { name: 'Kedi & Köpek Muayene', href: '/kedi-kopek-muayene' }]} />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <svg className="w-12 h-12 text-white mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18c-2.21 0-4-1.79-4-4 0-1.66 2-5 4-5s4 3.34 4 5c0 2.21-1.79 4-4 4zm-3.5-9C7.67 9 7 8.33 7 7.5S7.67 6 8.5 6 10 6.67 10 7.5 9.33 9 8.5 9zm7 0c-.83 0-1.5-.67-1.5-1.5S14.67 6 15.5 6 17 6.67 17 7.5 16.33 9 15.5 9zm-10 3c-.83 0-1.5-.67-1.5-1.5S4.67 8 5.5 8 7 8.67 7 9.5 6.33 12 5.5 12zm13 0c-.83 0-1.5-.67-1.5-1.5S17.67 8 18.5 8 20 8.67 20 9.5 19.33 12 18.5 12z" /></svg>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kedi & Köpek Muayene</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">Dostlarınızın sağlığı için kapsamlı veteriner muayenesi</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/services/kopek-muayene.jpeg" alt="Köpek Muayenesi" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kapsamlı Sağlık Kontrolü</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Anka Veteriner Kliniği&apos;nde evcil hayvanlarınız için kapsamlı muayene hizmeti sunuyoruz. Deneyimli hekimlerimiz, modern tıbbi cihazlarımız ile kedinizin veya köpeğinizin sağlık durumunu detaylı olarak değerlendirir.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Düzenli sağlık kontrolleri, hastalıkların erken teşhisi için büyük önem taşır. Yılda en az iki kez genel sağlık kontrolü yaptırmanızı öneriyoruz.
              </p>
              <Link href="/randevu" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bordo-600 to-bordo-700 text-white font-bold rounded-xl hover:from-bordo-700 hover:to-bordo-800 transition-colors shadow-lg shadow-bordo-600/25">
                Muayene Randevusu Al →
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left" className="lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/services/kopek-muayene-2.jpeg" alt="Kedi Köpek Muayene" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Muayene Hizmetlerimiz</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {muayeneTurleri.map((tur) => {
                  const iconMap: Record<string, React.ReactNode> = {
                    stethoscope: <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                    eye: <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
                    lab: <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
                    imaging: <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                    pill: <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                    vaccine: <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
                  };
                  return (
                  <div key={tur.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-2">{iconMap[tur.icon]}</div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">{tur.title}</h3>
                    <p className="text-xs text-gray-600">{tur.desc}</p>
                  </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hemen Randevu Alın</h2>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">Kediniz veya köpeğiniz için muayene randevusu almak isterseniz bizi arayabilir veya WhatsApp üzerinden ulaşabilirsiniz.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+903123542652" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> (0312) 354 26 52</a>
                <a href="https://wa.me/905548550590?text=Merhaba%2C%20kedi%2Fk%C3%B6pek%20muayene%20randevusu%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg text-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> WhatsApp</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <RelatedServices showAllLink exclude="/kedi-kopek-muayene" />
    </>
  );
}
