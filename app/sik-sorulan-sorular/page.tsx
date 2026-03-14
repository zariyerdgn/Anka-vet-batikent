import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import PawPattern from '@/components/PawPattern';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular (SSS)',
  description: 'Evcil hayvan sahiplerinin veteriner hekimlere en çok sorduğu sorular. Aşılama, kısırlaştırma, beslenme, parazit koruması ve daha fazlası.',
};

const sorular = [
  {
    soru: 'Evcil hayvanımı ne sıklıkla veterinere götürmeliyim?',
    cevap: 'Sağlıklı yetişkin kedi ve köpekler yılda en az bir kez genel kontrol muayenesine getirilmelidir. Yaşlı hayvanlar (7 yaş üzeri) yılda iki kez kontrole gelmelidir. Yavru dönemde ise aşı takvimine uygun olarak daha sık ziyaret gerekir.',
  },
  {
    soru: 'Aşılar neden bu kadar önemli?',
    cevap: 'Aşılar, evcil hayvanınızı kuduz, parvovirüs, distemper, lösemi gibi ölümcül hastalıklardan korur. Düzenli aşılama hem hayvanınızın hem de çevresindeki diğer hayvanların sağlığını güvence altına alır. Kuduz aşısı yasal zorunluluktur.',
  },
  {
    soru: 'Kısırlaştırma ne zaman yapılmalı?',
    cevap: 'Kedilerde genellikle 5-6 aylıkken, köpeklerde ise ırk ve büyüklüğüne göre 6-12 ay arasında kısırlaştırma önerilir. Kısırlaştırma; rahim enfeksiyonu, meme tümörleri ve prostat hastalıkları gibi ciddi sorunları önlemeye yardımcı olur.',
  },
  {
    soru: 'Çalışma saatleriniz nedir?',
    cevap: 'Pazar dahil her gün 09:00 - 23:00 saatleri arasında hizmet vermekteyiz. Acil durumlar için 7/24 ulaşılabilir durumdayız.',
  },
  {
    soru: 'Randevu almadan gelebilir miyim?',
    cevap: 'Evet, randevusuz da gelebilirsiniz. Ancak bekleme süresini minimuma indirmek için randevu almanızı öneriyoruz.',
  },
  {
    soru: 'Acil durumlar için 7/24 hizmet var mı?',
    cevap: 'Evet, acil durumlar için 7/24 hizmet vermekteyiz. 0554 855 05 90 numarasından veya WhatsApp üzerinden bize ulaşabilirsiniz.',
  },
  {
    soru: 'İç ve dış parazit koruması ne sıklıkla yapılmalı?',
    cevap: 'İç parazit koruması yetişkin hayvanlarda 3 ayda bir, dış parazit koruması özellikle ilkbahar-yaz döneminde aylık olarak uygulanmalıdır.',
  },
  {
    soru: 'Hayvanıma ne yedirmeliyim?',
    cevap: 'Yaşa, ırka ve sağlık durumuna uygun kaliteli hazır mamalar en güvenilir seçenektir. Soğan, sarımsak, çikolata, üzüm gibi besinler hayvanlar için toksiktir ve kesinlikle verilmemelidir.',
  },
  {
    soru: 'Köpek aşıları ne zaman yapılmalı?',
    cevap: 'Köpeklerde ilk karma aşı 6-8 haftalıkken yapılır. Ardından 3-4 hafta aralıklarla rapeller yapılır. Kuduz aşısı 12 haftadan itibaren uygulanabilir.',
  },
  {
    soru: 'Hangi hayvanları tedavi ediyorsunuz?',
    cevap: 'Kedi, köpek, kuş, tavşan, hamster, guinea pig gibi evcil hayvanların tüm sağlık hizmetlerini sunuyoruz.',
  },
  {
    soru: 'Ameliyat sonrası nelere dikkat etmeliyim?',
    cevap: 'Yara bölgesinin temiz tutulması, elizabeth tasma kullanılması, aktivitenin kısıtlanması ve kontrol muayenelerine düzenli gelinmesi büyük önem taşır.',
  },
  {
    soru: 'Ödeme yöntemleri nelerdir?',
    cevap: 'Nakit, kredi kartı ve banka kartı ile ödeme yapabilirsiniz. Taksit seçenekleri mevcuttur.',
  },
];

export default function SikSorulanSorularPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Sık Sorulan Sorular', href: '/sik-sorulan-sorular' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: sorular.map((s) => ({
              '@type': 'Question',
              name: s.soru,
              acceptedAnswer: { '@type': 'Answer', text: s.cevap },
            })),
          }),
        }}
      />

      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <PawPattern className="text-white opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <svg className="w-12 h-12 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sık Sorulan Sorular</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">Evcil hayvan sahiplerinin en çok merak ettiği konular</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <PawPattern className="text-primary-300" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-4">
              {sorular.map((s, i) => (
                <details key={i} className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 list-none">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                      {s.soru}
                    </span>
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">{s.cevap}</div>
                </details>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-16 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 text-center border border-red-200">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Acil Veteriner Yardımı</h2>
              <p className="text-gray-600 mb-6">7/24 acil durumlar için bizi hemen arayın</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+905548550590" className="inline-flex items-center gap-3 px-8 py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-colors shadow-lg text-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  0554 855 05 90
                </a>
                <Link href="/iletisim" className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-colors border border-primary-200 text-lg">İletişim</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
