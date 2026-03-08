import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'Aşılama Hizmetleri | Kedi Köpek Aşıları',
  description: 'Batıkent Ankara\'da kedi ve köpek aşılama hizmetleri. Karma aşı, kuduz aşısı, iç-dış parazit. ☎ (0312) 354 26 52',
};

export default function AsilamaPage() {
  const kediAsilari = [
    { name: 'Karma Aşı (FVRCP)', desc: 'Panlökopeni, rinotrakeit ve calicivirus koruması', when: '8. hafta, tekrar 12. hafta' },
    { name: 'Kuduz Aşısı', desc: 'Yasal zorunluluk, ölümcül hastalığa karşı koruma', when: '12. haftadan itibaren' },
    { name: 'Lösemi Aşısı (FeLV)', desc: 'Kedi lösemisine karşı koruma', when: '8. hafta, tekrar 12. hafta' },
  ];

  const kopekAsilari = [
    { name: 'Karma Aşı (DHPPi)', desc: 'Distemper, hepatit, parvovirüs, parainfluenza koruması', when: '6-8. hafta, tekrar her 3-4 haftada bir' },
    { name: 'Kuduz Aşısı', desc: 'Yasal zorunluluk, ölümcül hastalığa karşı koruma', when: '12. haftadan itibaren' },
    { name: 'Corona + Leptospirosis', desc: 'Enfeksiyöz hastalıklara karşı ek koruma', when: '8. haftadan itibaren' },
    { name: 'Kennel Cough (KC)', desc: 'Barınak öksürüğüne karşı koruma', when: 'Sosyal ortama girmeden önce' },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmetler', href: '/hizmetler' }, { name: 'Aşılama', href: '/asilama' }]} />

      <section className="relative py-20 bg-gradient-to-br from-green-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-5xl mb-4">💉</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Aşılama Hizmetleri</h1>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">Evcil dostlarınız için koruyucu aşı programları</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/services/muayenehane.jpeg" alt="Aşılama Hizmetleri" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Neden Aşılama Önemlidir?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Aşılama, evcil hayvanınızı ölümcül ve bulaşıcı hastalıklara karşı korumanın en etkili yoludur. Düzenli aşılama programı ile hayvanınızın bağışıklık sistemi güçlü kalır.
              </p>
              <div className="space-y-3 mb-6">
                {['Ölümcül hastalıklara karşı koruma sağlar', 'Bulaşıcı hastalıkların yayılmasını önler', 'Yasal zorunlulukları yerine getirir (kuduz aşısı)', 'Erken yaşta başlamak en yüksek korumayı sağlar'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Kedi Aşıları */}
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">🐱 Kedi Aşı Takvimi</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {kediAsilari.map((asi, i) => (
                  <div key={asi.name} className={`p-6 ${i !== kediAsilari.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{asi.name}</h3>
                        <p className="text-gray-600 text-sm">{asi.desc}</p>
                      </div>
                      <span className="text-xs font-medium px-3 py-1 bg-green-50 text-green-700 rounded-full whitespace-nowrap self-start md:self-center">{asi.when}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Köpek Aşıları */}
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">🐶 Köpek Aşı Takvimi</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {kopekAsilari.map((asi, i) => (
                  <div key={asi.name} className={`p-6 ${i !== kopekAsilari.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{asi.name}</h3>
                        <p className="text-gray-600 text-sm">{asi.desc}</p>
                      </div>
                      <span className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-700 rounded-full whitespace-nowrap self-start md:self-center">{asi.when}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Aşı Randevusu Alın</h2>
              <p className="text-gray-600 mb-6">Evcil hayvanınızın aşı takvimini kontrol ettirmek için hemen randevu alın.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/randevu" className="px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg">Randevu Al</Link>
                <a href="tel:+903123542652" className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-colors border border-primary-200 text-lg">📞 (0312) 354 26 52</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <RelatedServices showAllLink exclude="/asilama" />
    </>
  );
}
