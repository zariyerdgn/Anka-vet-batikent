'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import PawPattern from '@/components/PawPattern';

const faqs = [
  {
    q: 'Evcil hayvanımı ne sıklıkla veterinere götürmeliyim?',
    a: 'Sağlıklı yetişkin kedi ve köpekler yılda en az bir kez genel kontrol muayenesine getirilmelidir. Yaşlı hayvanlar (7 yaş üzeri) ve kronik hastalığı olan hastalar yılda iki kez kontrole gelmelidir. Yavru dönemde ise aşı takvimine uygun olarak daha sık ziyaret gerekir.',
  },
  {
    q: 'Köpeğimin / kedimin aşıları neden bu kadar önemli?',
    a: 'Aşılar, evcil hayvanınızı kuduz, parvovirüs, distemper, lösemi gibi ölümcül hastalıklardan korur. Düzenli aşılama hem hayvanınızın hem de çevresindeki diğer hayvanların sağlığını güvence altına alır. Ayrıca kuduz aşısı yasal olarak zorunludur.',
  },
  {
    q: 'Kısırlaştırma ameliyatı ne zaman yapılmalı?',
    a: 'Kedilerde genellikle 5-6 aylıkken, köpeklerde ise ırk ve büyüklüğüne göre 6-12 ay arasında kısırlaştırma önerilir. Kısırlaştırma; rahim enfeksiyonu, meme tümörleri ve prostat hastalıkları gibi ciddi sağlık sorunlarını önlemeye yardımcı olur.',
  },
  {
    q: 'Evcil hayvanımın dişleri neden önemli?',
    a: 'Ağız ve diş sağlığı genel vücut sağlığıyla doğrudan ilişkilidir. Diş taşı birikimi, diş eti iltihabına, ağız kokusuna, diş kaybına ve hatta kalp, böbrek gibi organlara yayılan bakteriyel enfeksiyonlara neden olabilir. Düzenli diş kontrolü ve gerektiğinde detartraj (diş taşı temizliği) yapılmalıdır.',
  },
  {
    q: 'İç ve dış parazit koruması ne sıklıkla yapılmalıdır?',
    a: 'İç parazit (solucan) koruması yetişkin hayvanlarda her 3 ayda bir yapılmalıdır. Dış parazit (pire, kene) koruması ise özellikle ilkbahar ve yaz aylarında aylık olarak uygulanmalıdır. Yavru hayvanlarda daha erken ve sık uygulama gerekebilir.',
  },
  {
    q: 'Hayvanım kusarsa veya ishal olursa ne yapmalıyım?',
    a: 'Tek seferlik kusma veya yumuşak dışkı ciddi olmayabilir, ancak tekrarlayan kusma, kanlı ishal, iştahsızlık, halsizlik gibi belirtiler varsa zaman kaybetmeden veterinere başvurmalısınız. Özellikle yavru hayvanlarda dehidrasyon hızla gelişebildiğinden erken müdahale hayat kurtarıcıdır.',
  },
  {
    q: 'Ameliyat öncesi ve sonrası nelere dikkat etmeliyim?',
    a: 'Ameliyat öncesinde veterinerinizin belirttiği süre boyunca hayvanınızı aç bırakmanız gerekir (genellikle 8-12 saat). Ameliyat sonrasında yara bölgesinin temiz tutulması, elizabeth tasma kullanılması, aktivitenin kısıtlanması ve kontrol muayenelerine düzenli gelinmesi büyük önem taşır.',
  },
  {
    q: 'Evcil hayvanıma ne yedirmeliyim?',
    a: 'Yaşa, ırka ve sağlık durumuna uygun kaliteli hazır mamalar en güvenilir seçenektir. Ev yemekleri tuz, baharat ve hayvanlar için toksik olabilecek besinler (soğan, sarımsak, çikolata, üzüm vb.) içerebileceğinden önerilmez. Özel diyet gerektiren durumlarda veterinerinizden beslenme danışmanlığı alınmalıdır.',
  },
  {
    q: 'Hayvanımın aşırı kaşınması normal mi?',
    a: 'Arada sırada kaşınma normal olsa da aşırı kaşınma, tüy dökülmesi, kızarıklık, yara oluşumu gibi belirtiler alerji, mantar, pire veya diğer deri hastalıklarına işaret edebilir. Dermatolojik muayene ile kesin tanı konularak uygun tedavi başlanmalıdır.',
  },
  {
    q: 'Kedim/köpeğim obez mi? Kilo kontrolü nasıl yapılır?',
    a: 'Kaburgaları kolayca hissedemiyorsanız ve bel çizgisi belirgin değilse hayvanınız fazla kilolu olabilir. Obezite; diyabet, eklem hastalıkları, kalp sorunları gibi birçok hastalığa zemin hazırlar. Veterineriniz ideal kiloyu belirleyerek size özel diyet ve egzersiz programı önerecektir.',
  },
  {
    q: 'Yaşlı evcil hayvanıma özel bakım gerekir mi?',
    a: '7 yaşından itibaren kedi ve köpekler yaşlılık dönemine girer. Bu dönemde eklem sorunları, böbrek yetmezliği, kalp hastalıkları ve tümörler daha sık görülür. Yılda iki kez kapsamlı check-up (kan tahlili, ultrason, röntgen) ile erken teşhis hayat kurtarır.',
  },
  {
    q: 'Evcil hayvanımı yurt dışına götürmek istiyorum, ne yapmalıyım?',
    a: 'Yurt dışı seyahati için mikroçip, kuduz aşısı (en az 21 gün önce), sağlık sertifikası ve gidilecek ülkenin özel gereksinimleri (antikor testi vb.) karşılanmalıdır. Süreç ülkeden ülkeye değiştiğinden en az 4 ay öncesinden hazırlıklara başlamanız tavsiye edilir.',
  },
  {
    q: 'Acil bir durumda ne yapmalıyım?',
    a: 'Zehirlenme, trafik kazası, nöbet geçirme, nefes darlığı, aşırı kanama veya idrar tıkanıklığı gibi acil durumlarda derhal veteriner kliniğini arayın. Kliniğimiz 7/24 acil hizmet vermektedir. Acil durumlar için 0554 855 05 90 numarasından bize ulaşabilirsiniz.',
  },
  {
    q: 'Çalışma saatleriniz nedir?',
    a: 'Pazar dahil her gün 09:00 - 23:00 saatleri arasında hizmet vermekteyiz. Acil durumlar için 7/24 telefonla ulaşabilirsiniz.',
  },
  {
    q: 'Hangi hayvan türlerini tedavi ediyorsunuz?',
    a: 'Kedi, köpek başta olmak üzere kuş, tavşan, hamster, guinea pig gibi evcil hayvanların tanı, tedavi ve cerrahi müdahale hizmetlerini sunuyoruz.',
  },
  {
    q: 'Randevu almadan gelebilir miyim?',
    a: 'Randevusuz da gelebilirsiniz, ancak randevu alarak gelmeniz bekleme sürenizi azaltacak ve daha verimli bir muayene süreci sağlayacaktır. Online veya telefonla randevu oluşturabilirsiniz.',
  },
];

export default function SSSPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hakkımızda', href: '/hakkimizda' }, { name: 'SSS', href: '/hakkimizda/sss' }]} />

      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <PawPattern className="text-white opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sıkça Sorulan Sorular</h1>
            <p className="text-lg text-primary-100">Evcil hayvan sahiplerinin veteriner hekimlere en çok sorduğu sorular</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <PawPattern className="text-primary-300" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="flex items-center gap-3 font-semibold text-gray-900 pr-4">
                      <span className="w-8 h-8 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                      {faq.q}
                    </span>
                    <svg className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5 border-t border-gray-50 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Acil CTA */}
          <AnimatedSection>
            <div className="mt-12 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 text-center border border-red-200">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Acil Veteriner Yardımı</h2>
              <p className="text-gray-600 mb-6">7/24 acil durumlar için bizi hemen arayın</p>
              <a href="tel:+905548550590" className="inline-flex items-center gap-3 px-8 py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-colors shadow-lg text-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0554 855 05 90
              </a>
            </div>
          </AnimatedSection>
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
