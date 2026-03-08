import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'Kedi & Köpek Muayene | Batıkent Veteriner',
  description: 'Batıkent Ankara\'da kedi ve köpek muayene hizmeti. Genel sağlık kontrolü, aşılama, tedavi. ☎ (0312) 354 26 52',
};

export default function KediKopekMuayenePage() {
  const muayeneTurleri = [
    { icon: '🩺', title: 'Genel Sağlık Kontrolü', desc: 'Fiziksel muayene, vücut sıcaklığı, kalp ve solunum kontrolü.' },
    { icon: '👁️', title: 'Göz ve Kulak Muayenesi', desc: 'Göz, kulak ve diş sağlığının detaylı kontrolü.' },
    { icon: '🔬', title: 'Laboratuvar Tetkikleri', desc: 'Kan sayımı, biyokimya, idrar tahlili.' },
    { icon: '📡', title: 'Görüntüleme', desc: 'Ultrasonografi ve röntgen ile iç organ kontrolü.' },
    { icon: '💊', title: 'İç-Dış Parazit Kontrolü', desc: 'Parazit tarama ve koruyucu tedavi uygulamaları.' },
    { icon: '💉', title: 'Aşı Takibi', desc: 'Aşı takviminin kontrolü ve gerekli aşıların yapılması.' },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmetler', href: '/hizmetler' }, { name: 'Kedi & Köpek Muayene', href: '/kedi-kopek-muayene' }]} />

      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-5xl mb-4">🐾</div>
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
              <Link href="/randevu" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg">
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
                {muayeneTurleri.map((tur) => (
                  <div key={tur.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-2xl mb-2">{tur.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">{tur.title}</h3>
                    <p className="text-xs text-gray-600">{tur.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hemen Randevu Alın</h2>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">Kediniz veya köpeğiniz için muayene randevusu almak isterseniz bizi arayabilir veya WhatsApp üzerinden ulaşabilirsiniz.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+903123542652" className="px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg">📞 (0312) 354 26 52</a>
                <a href="https://wa.me/905548550590?text=Merhaba%2C%20kedi%2Fk%C3%B6pek%20muayene%20randevusu%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg text-lg">💬 WhatsApp</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <RelatedServices showAllLink exclude="/kedi-kopek-muayene" />
    </>
  );
}
