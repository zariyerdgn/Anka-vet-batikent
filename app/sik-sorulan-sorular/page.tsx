import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular (SSS)',
  description: 'Batıkent Anka Veteriner Kliniği hakkında sık sorulan sorular ve cevapları. Aşılama, kısırlaştırma, fiyat bilgisi ve daha fazlası.',
};

const sorular = [
  {
    soru: 'Kliniğiniz nerede?',
    cevap: 'Batıkent, Yenimahalle / Ankara adresinde bulunmaktayız. Batıkent metro istasyonuna yürüme mesafesindeyiz.',
  },
  {
    soru: 'Çalışma saatleriniz nedir?',
    cevap: 'Hafta içi 09:00-19:00, Cumartesi 09:00-17:00 saatleri arasında hizmet veriyoruz. Pazar günleri yalnızca acil durumlar için hizmet verilmektedir.',
  },
  {
    soru: 'Randevu almadan gelebilir miyim?',
    cevap: 'Evet, randevusuz da gelebilirsiniz. Ancak bekleme süresini minimuma indirmek için randevu almanızı öneriyoruz.',
  },
  {
    soru: 'Acil durumlar için 7/24 hizmet var mı?',
    cevap: 'Evet, acil durumlar için 7/24 telefonla ulaşılabilir durumdayız. 0312 354 26 52 numarasından veya WhatsApp üzerinden bize ulaşabilirsiniz.',
  },
  {
    soru: 'Kedi kısırlaştırma ne kadar?',
    cevap: 'Kedi kısırlaştırma ücretleri hayvanın cinsiyetine ve ağırlığına göre değişiklik göstermektedir. Güncel fiyat bilgisi için bizi aramanızı öneriyoruz.',
  },
  {
    soru: 'Köpek aşıları ne zaman yapılmalı?',
    cevap: 'Köpeklerde ilk karma aşı 6-8 haftalıkken yapılır. Ardından 3-4 hafta aralıklarla rapeller yapılır. Kuduz aşısı 12 haftadan itibaren uygulanabilir.',
  },
  {
    soru: 'Hangi hayvanları tedavi ediyorsunuz?',
    cevap: 'Kedi, köpek, kuş, kemirgen gibi evcil hayvanların tüm sağlık hizmetlerini sunuyoruz.',
  },
  {
    soru: 'Ödeme yöntemleri nelerdir?',
    cevap: 'Nakit, kredi kartı ve banka kartı ile ödeme yapabilirsiniz. Taksit seçenekleri mevcuttur.',
  },
  {
    soru: 'Pet pansiyon hizmetiniz var mı?',
    cevap: 'Evet, veteriner hekim gözetiminde, hijyenik ve konforlu ortamda pet pansiyon hizmetimiz bulunmaktadır. Detaylı bilgi için bizi arayabilirsiniz.',
  },
  {
    soru: 'Ameliyat sonrası bakım nasıl yapılır?',
    cevap: 'Ameliyat sonrası detaylı bakım talimatları hekimlerimiz tarafından verilir. Kontrol muayeneleri planlanır ve telefonla takip yapılır.',
  },
  {
    soru: 'Kliniğinizde hangi cihazlar mevcut?',
    cevap: 'Ultrasonografi, röntgen, EKG, kan sayım cihazı, biyokimya cihazı, anestezi cihazı, sterilizatör ve tam donanımlı ameliyathane kliniğimizde mevcuttur.',
  },
  {
    soru: 'Evde veteriner hizmeti var mı?',
    cevap: 'Evcil hayvanlar için klinik ortamında hizmet verilmektedir. Özel durumlar için bize ulaşabilirsiniz.',
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

      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-5xl mb-4">❓</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sık Sorulan Sorular</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">Merak ettiğiniz tüm sorulara cevaplar</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Başka Sorunuz mu Var?</h2>
              <p className="text-gray-600 mb-6">Cevabını bulamadığınız sorular için bize ulaşabilirsiniz.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/iletisim" className="px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg">İletişim</Link>
                <a href="tel:+903123542652" className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-colors border border-primary-200 text-lg">📞 (0312) 354 26 52</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
