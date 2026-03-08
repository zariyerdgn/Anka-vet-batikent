'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const faqs = [
  { q: 'Batıkent\'te veteriner kliniği var mı?', a: 'Evet, Anka Veteriner Kliniği Batıkent merkezinde hizmet vermektedir. Evcil hayvan sağlığı alanında uzman kadromuzla hizmetinizdeyiz.' },
  { q: 'Batıkent\'te 7/24 acil veteriner var mı?', a: 'Evet, kliniğimiz 7/24 acil veteriner hizmeti sunmaktadır. Acil durumlar için (0312) 354 26 52 numaralı telefondan bize ulaşabilirsiniz.' },
  { q: 'Batıkent\'te kedi köpek veterineri var mı?', a: 'Evet, kliniğimizde kedi ve köpek muayene, aşılama, kısırlaştırma ve cerrahi operasyonlar dahil tüm veteriner hizmetleri sunulmaktadır.' },
  { q: 'Batıkent veteriner ücretleri ne kadar?', a: 'Veteriner ücretlerimiz yapılacak işleme göre değişmektedir. Detaylı bilgi için (0312) 354 26 52 veya WhatsApp üzerinden bize ulaşabilirsiniz.' },
  { q: 'Randevu almadan gelebilir miyim?', a: 'Randevusuz da gelebilirsiniz, ancak randevu alarak gelmeniz bekleme sürenizi azaltacaktır. Online veya telefonla randevu oluşturabilirsiniz.' },
  { q: 'Çalışma saatleriniz nedir?', a: 'Pazartesi-Cuma 09:00-19:00, Cumartesi 09:00-17:00 arası hizmet vermekteyiz. Pazar günleri sadece acil durumlar için açığız.' },
  { q: 'Mobil veteriner hizmeti var mı?', a: 'Evet, Batıkent ve çevre bölgelerde mobil veteriner hizmeti sunmaktayız. Evcil hayvanlarınız için eve gelme hizmeti için bize ulaşın.' },
  { q: 'Pet pansiyon hizmetiniz var mı?', a: 'Evet, güvenli ve konforlu pet pansiyon hizmetimiz mevcuttur. Detaylı bilgi için bize ulaşabilirsiniz.' },
  { q: 'Hangi bölgelere hizmet veriyorsunuz?', a: 'Batıkent merkezli olarak Yenimahalle, Etimesgut, Sincan, Keçiören, Demetevler, Eryaman ve Çayyolu bölgelerine hizmet veriyoruz.' },
];

export default function SSSPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hakkımızda', href: '/hakkimizda' }, { name: 'SSS', href: '/hakkimizda/sss' }]} />

      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sıkça Sorulan Sorular</h1>
            <p className="text-lg text-primary-100">Merak ettiklerinize cevap bulun</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <svg className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
