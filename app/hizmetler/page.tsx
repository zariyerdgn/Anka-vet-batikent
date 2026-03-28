import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import HizmetlerAccordion from '@/components/HizmetlerAccordion';
import PawPattern from '@/components/PawPattern';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Batıkent ve Ankara genelinde evcil hayvan veteriner hizmetleri. Acil 7/24, cerrahi, dahiliye, dermatoloji, fizik tedavi ve daha fazlası.',
  keywords: 'veteriner hizmetleri, Batıkent veteriner, acil veteriner, cerrahi, dahiliye, aşılama, kısırlaştırma, röntgen, ultrason',
  openGraph: {
    title: 'Veteriner Hizmetlerimiz | Anka Veteriner Kliniği Batıkent',
    description: 'Acil 7/24, cerrahi, dahiliye, dermatoloji ve daha fazlası.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: { canonical: 'https://batikentankavet.com/hizmetler' },
};

const hizmetler = [
  {
    name: 'Acil 7/24',
    desc: 'Gece gündüz demeden, acil sağlık sorunlarında yanınızdayız.',
    subItems: [],
  },
  {
    name: 'Anestezi ve Reanimasyon',
    desc: 'Güvenli anestezi uygulamaları ve yoğun bakım hizmetleri. Her hasta ameliyat öncesi ASA (American Society of Anesthesiologists) sınıflandırmasına göre değerlendirilir. Bu sistem, ASA I (sağlıklı) ile ASA V (kritik) arasında risk seviyesi belirler ve anestezi protokolü buna göre kişiselleştirilir.',
    subItems: [],
  },
  {
    name: 'Ağız ve Diş Sağlığı',
    desc: 'Evcil hayvanların ağız ve diş sağlığı; diş taşı temizliği (detartraj), diş çekimi, diş kırıkları onarımı ve periodontal hastalıkların tedavisi.',
    detailedDesc: 'Düzenli ağız bakımı, evcil hayvanınızın genel sağlığı için büyük önem taşır. Diş taşı birikimi zamanla diş eti iltihabına, diş kaybına ve bakteriyel enfeksiyonlara yol açabilir. Kliniğimizde ultrasonik detartraj cihazı ile güvenli diş temizliği, dijital dental röntgen ile diş kökü değerlendirmesi ve gerekli durumlarda cerrahi diş çekimi gerçekleştirilmektedir.',
    subItems: ['Diş Taşı Temizliği (Detartraj)', 'Diş Çekimi', 'Periodontal Tedavi', 'Dental Röntgen'],
    images: [
      '/images/services/agiz-dis/agiz-dis-1.jpeg',
      '/images/services/agiz-dis/agiz-dis-2.jpeg',
      '/images/services/agiz-dis/agiz-dis-3.jpeg',
      '/images/services/agiz-dis/agiz-dis-4.jpeg',
      '/images/services/agiz-dis/agiz-dis-5.jpeg',
      '/images/services/agiz-dis/agiz-dis-6.jpeg',
    ],
  },
  {
    name: 'Beslenme ve Diyet',
    desc: 'Evcil hayvanınız için özel beslenme programları ve diyet danışmanlığı.',
    subItems: [],
  },
  {
    name: 'Check-up',
    desc: 'Kapsamlı sağlık taraması ile hastalıkların erken teşhisi.',
    subItems: [],
  },
  {
    name: 'Dahiliye (İç Hastalıkları)',
    desc: 'İç hastalıkları alanında uzman tanı ve tedavi hizmetleri.',
    subItems: [
      'Enfeksiyon Hastalıkları',
      'Endokrinoloji ve Metabolizma Hastalıkları',
      'Kardiyoloji',
      'Ekokardiyografi',
      'EKG',
      'Endoskopi',
    ],
  },
  {
    name: 'Ekokardiyografi',
    desc: 'Kalbin yapısını ve fonksiyonlarını ultrason ile değerlendiren ileri görüntüleme yöntemidir. Kalp kapak hastalıkları, kardiyomiyopatiler ve doğuştan kalp defektlerinin teşhisinde kullanılır.',
    detailedDesc: 'Ekokardiyografi, evcil hayvanlarda kalp hastalıklarının tanısında altın standart yöntemdir. Renkli Doppler ile kan akım hızı ve yönü değerlendirilir, kalp odacıklarının boyutları ve kas kalınlıkları ölçülür.',
    subItems: ['M-Mode Ekokardiyografi', 'Renkli Doppler', 'Kalp Kapak Değerlendirme'],
    images: [
      '/images/services/ekokardiyografi/ekokardiyografi-1.jpeg',
      '/images/services/ekokardiyografi/ekokardiyografi-2.jpeg',
      '/images/services/ekokardiyografi/ekokardiyografi-3.jpeg',
      '/images/services/ekokardiyografi/ekokardiyografi-4.jpeg',
    ],
  },
  {
    name: 'Endoskopi',
    desc: 'Sindirim sistemi, solunum yolları ve diğer vücut boşluklarının kameralı görüntüleme ile incelenmesi. Yabancı cisim çıkarma, biyopsi alma ve tanı amaçlı kullanılır.',
    detailedDesc: 'Endoskopi sayesinde cerrahi müdahale gerektirmeden sindirim kanalındaki sorunlar tespit edilebilir, yabancı cisimler çıkarılabilir ve biyopsi örnekleri alınabilir.',
    subItems: ['Gastroskopi', 'Kolonoskopi', 'Bronkoskopi', 'Yabancı Cisim Çıkarma'],
    images: [
      '/images/services/endoskopi/endoskopi-1.jpeg',
      '/images/services/endoskopi/endoskopi-2.jpeg',
      '/images/services/endoskopi/endoskopi-3.jpeg',
    ],
  },
  {
    name: 'Dermatoloji',
    desc: 'Cilt hastalıkları, alerji, mantar ve paraziter deri sorunlarının tedavisi.',
    subItems: [],
  },
  {
    name: 'Doğum ve Jinekoloji',
    desc: 'Doğum takibi, sezaryen ve üreme sistemi hastalıklarının tedavisi.',
    subItems: [],
  },
  {
    name: 'Fizik Tedavi ve Rehabilitasyon',
    desc: 'Ameliyat sonrası iyileşme, eklem sorunları ve hareket kısıtlılığı tedavisi.',
    subItems: [],
  },
  {
    name: 'Cerrahi',
    desc: 'Modern ameliyathane ve deneyimli ekiple güvenli cerrahi operasyonlar.',
    subItems: [
      'Yumuşak Doku Cerrahisi',
      'Ortopedi ve Travmatoloji',
      'Eklem Cerrahisi',
      'Nöroşirurji',
    ],
    images: [
      '/images/services/operasyon/operasyon-1.jpeg',
      '/images/services/operasyon/operasyon-2.jpeg',
      '/images/services/operasyon/operasyon-3.jpeg',
      '/images/services/operasyon/operasyon-4.jpeg',
      '/images/services/operasyon/operasyon-5.jpeg',
    ],
  },
  {
    name: 'Eklem Cerrahisi',
    desc: 'Çapraz bağ yırtıkları, patella lüksasyonu, kalça displazisi ve kırık onarımı gibi ortopedik sorunların cerrahi tedavisi.',
    detailedDesc: 'Eklem cerrahisinde TPLO, TTA, plak-vida sistemi ve eksternal fiksatör gibi modern teknikler uygulanmaktadır. Ameliyat sonrası fizik tedavi programı ile tam iyileşme hedeflenir.',
    subItems: ['Çapraz Bağ Cerrahisi (TPLO/TTA)', 'Patella Lüksasyonu', 'Kalça Displazisi', 'Kırık Onarımı'],
    images: [
      '/images/services/eklem-cerrahi/eklem-cerrahi-1.jpeg',
      '/images/services/eklem-cerrahi/eklem-cerrahi-2.jpeg',
      '/images/services/eklem-cerrahi/eklem-cerrahi-3.jpeg',
    ],
  },
  {
    name: 'Görüntüleme Ünitesi',
    desc: 'Son teknoloji görüntüleme cihazlarımız ile doğru ve hızlı tanı.',
    subItems: [
      'X Ray - DR (Dijital Röntgen)',
      'Dental DR (Diş Röntgeni)',
      'Ultrasonografi',
      'Renkli Doppler',
      'Ekokardiyografi',
      'Tomografi',
    ],
  },
  {
    name: 'X-Ray DR (Dijital Röntgen)',
    desc: 'Dijital röntgen sistemi ile kemik, eklem, göğüs ve karın bölgesi görüntüleme. Anında yüksek çözünürlüklü görüntüler elde edilir.',
    detailedDesc: 'Dijital röntgen, geleneksel röntgene göre daha düşük radyasyon dozu ile daha kaliteli görüntüler sunar. Kırıklar, eklem sorunları, akciğer ve karın hastalıklarının teşhisinde temel görüntüleme yöntemidir.',
    subItems: ['Kemik ve Eklem Röntgeni', 'Göğüs Röntgeni', 'Karın Röntgeni', 'Dental Röntgen'],
    images: [
      '/images/services/xray/xray-1.jpeg',
      '/images/services/xray/xray-2.jpeg',
    ],
  },
  {
    name: 'Ultrasonografi',
    desc: 'Karın içi organlar, gebelik takibi ve yumuşak doku değerlendirmesi için ultrasonografik inceleme.',
    detailedDesc: 'Ultrasonografi ağrısız ve radyasyonsuz bir görüntüleme yöntemidir. Karaciğer, böbrek, dalak, mesane gibi organların detaylı değerlendirilmesinde kullanılır.',
    subItems: ['Abdominal Ultrason', 'Gebelik Takibi', 'Renkli Doppler', 'Yumuşak Doku İnceleme'],
    images: [
      '/images/services/ultrasonografi/ultrasonografi-1.jpeg',
      '/images/services/ultrasonografi/ultrasonografi-2.jpeg',
      '/images/services/ultrasonografi/ultrasonografi-3.jpeg',
    ],
  },
  {
    name: 'Laboratuvar',
    desc: 'Tam donanımlı laboratuvarımızda hızlı ve güvenilir test sonuçları.',
    subItems: [
      'Hemogram',
      'Kan Biyokimya',
      'İdrar Biyokimya',
      'Hormon Testleri',
      'PCR Testleri',
      'Koagülasyon Cihazı',
    ],
    images: [
      '/images/services/laboratuvar/lab-1.jpeg',
      '/images/services/laboratuvar/lab-2.jpeg',
      '/images/services/laboratuvar/lab-3.jpeg',
      '/images/services/laboratuvar/lab-4.jpeg',
      '/images/services/laboratuvar/lab-5.jpeg',
      '/images/services/laboratuvar/lab-6.jpeg',
      '/images/services/laboratuvar/lab-7.jpeg',
      '/images/services/laboratuvar/lab-8.jpeg',
      '/images/services/laboratuvar/lab-9.jpeg',
    ],
  },
  {
    name: 'Sitoloji',
    desc: 'Hücresel düzeyde inceleme ile tümör, enfeksiyon ve iltihabi hastalıkların teşhisi. İnce iğne aspirasyon biyopsisi ve sitolojik değerlendirme yapılır.',
    detailedDesc: 'Sitolojik inceleme, doku örneklerinin mikroskop altında hücre düzeyinde değerlendirilmesidir. Kitle ve tümör tanısı, lenf nodu değerlendirmesi ve vücut sıvılarının analizi bu yöntemle gerçekleştirilir.',
    subItems: ['İnce İğne Aspirasyon Biyopsisi', 'Tümör Sitolojisi', 'Vücut Sıvısı Analizi', 'Kemik İliği Değerlendirme'],
    images: [
      '/images/services/sitoloji/sitoloji-1.jpeg',
      '/images/services/sitoloji/sitoloji-2.jpeg',
      '/images/services/sitoloji/sitoloji-3.jpeg',
      '/images/services/sitoloji/sitoloji-4.jpeg',
      '/images/services/sitoloji/sitoloji-5.jpeg',
      '/images/services/sitoloji/sitoloji-6.jpeg',
      '/images/services/sitoloji/sitoloji-7.jpeg',
      '/images/services/sitoloji/sitoloji-8.jpeg',
      '/images/services/sitoloji/sitoloji-9.jpeg',
      '/images/services/sitoloji/sitoloji-10.jpeg',
    ],
  },
  {
    name: 'Göz Hastalıkları',
    desc: 'Evcil hayvanların göz sağlığı, teşhis ve tedavi hizmetleri. Göz içi basınç ölçümü, gözyaşı testleri ve fundus muayenesi yapılmaktadır.',
    detailedDesc: 'Katarakt, glokom, kornea ülserleri, kuru göz sendromu ve göz kapağı hastalıkları gibi sorunların tanı ve tedavisi gerçekleştirilir.',
    subItems: ['Katarakt Değerlendirme', 'Glokom Testi', 'Kornea Ülseri Tedavisi', 'Göz Kapağı Cerrahisi'],
    images: [
      '/images/services/goz/goz-1.jpeg',
      '/images/services/goz/goz-2.jpeg',
      '/images/services/goz/goz-3.jpeg',
      '/images/services/goz/goz-4.jpeg',
    ],
  },
  {
    name: 'Yoğun Bakım',
    desc: 'Kritik hastaların yoğun bakım ve takip hizmetleri, 24 saat izleme.',
    subItems: [],
  },
];

export default function HizmetlerPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmetlerimiz', href: '/hizmetler' }]} />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <PawPattern variant="light" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hizmetlerimiz</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Batıkent ve Ankara genelinde evcil hayvan sağlığı alanında kapsamlı veteriner hizmetleri sunuyoruz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="relative py-20 overflow-hidden">
        <PawPattern />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Tüm Hizmetlerimiz</h2>
              <p className="text-gray-600">Detayları görmek için hizmete tıklayın</p>
            </div>
          </AnimatedSection>
          <HizmetlerAccordion hizmetler={hizmetler} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Randevu Almak İster Misiniz?</h2>
          <p className="text-gray-600 mb-8">Hizmetlerimiz hakkında detaylı bilgi almak veya randevu oluşturmak için bize ulaşın.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/randevu" className="px-8 py-4 bg-gradient-to-r from-bordo-600 to-bordo-700 text-white font-bold rounded-xl hover:from-bordo-700 hover:to-bordo-800 transition-colors shadow-lg shadow-bordo-600/25 text-lg">
              Randevu Al
            </Link>
            <a href="tel:+905548550590" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-colors border border-primary-200 text-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              0554 855 05 90
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
