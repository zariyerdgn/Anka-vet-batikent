import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import StatCard from '@/components/StatCard';
import LocalTrustSignals from '@/components/LocalTrustSignals';
import RelatedServices from '@/components/RelatedServices';
import SectionDivider from '@/components/SectionDivider';

const services = [
  {
    name: 'Kedi & Köpek Muayene',
    href: '/kedi-kopek-muayene',
    icon: '🐱',
    desc: 'Evcil dostlarınız için kapsamlı sağlık kontrolü ve tedavi.',
    image: '/images/services/kopek-muayene.jpeg',
  },
  {
    name: 'Aşılama Hizmetleri',
    href: '/asilama',
    icon: '💉',
    desc: 'Koruyucu aşı programları ile evcil hayvanlarınızı hastalıklardan koruyun.',
    image: '/images/services/muayenehane.jpeg',
  },
  {
    name: 'Acil Veteriner',
    href: '/iletisim',
    icon: '🚑',
    desc: '7/24 acil veteriner hizmeti ile yanınızdayız.',
    image: '/images/surgery/ameliyathane.jpeg',
  },
  {
    name: 'Kedi Kısırlaştırma',
    href: '/kedi-kisirlastrma',
    icon: '✂️',
    desc: 'Güvenli ve profesyonel kısırlaştırma operasyonları.',
    image: '/images/services/muayenehane-3.jpeg',
  },
  {
    name: 'Pet Pansiyon',
    href: '/pansiyon',
    icon: '🏠',
    desc: 'Veteriner gözetiminde güvenli ve konforlu pansiyon hizmeti.',
    image: '/images/clinic/bekleme-alani.jpeg',
  },
];

const diseases = [
  {
    title: 'Köpek Hastalıkları',
    icon: '🐕',
    items: [
      { sub: 'Enfeksiyöz', list: ['Parvovirüs', 'Distemper', 'Leptospiroz', 'Kennel Cough'] },
      { sub: 'Paraziter', list: ['Pire', 'Kene', 'İç Parazitler', 'Mantar'] },
    ],
  },
  {
    title: 'Kedi Hastalıkları',
    icon: '🐈',
    items: [
      { sub: 'Enfeksiyöz', list: ['FIP', 'FIV', 'FeLV', 'Kedi Nezlesi'] },
      { sub: 'Paraziter', list: ['Pire', 'Kulak Aşurusu', 'İç Parazitler', 'Mantar'] },
    ],
  },
  {
    title: 'Kuş Hastalıkları',
    icon: '🦜',
    items: [
      { sub: 'Yaygın', list: ['Tüy Dökülmesi', 'Solunum Yolu', 'Parazitler', 'Mantar'] },
    ],
  },
  {
    title: 'Kemirgen Hastalıkları',
    icon: '🐹',
    items: [
      { sub: 'Yaygın', list: ['Diş Sorunları', 'Solunum Yolu', 'Deri Hastalıkları', 'Sindirim'] },
    ],
  },
];

const whyUs = [
  { icon: '👨‍⚕️', title: 'Uzman Hekim Kadrosu', desc: 'Deneyimli veteriner hekimlerimiz ile güvendesiniz.' },
  { icon: '🏥', title: 'Modern Tesisler', desc: 'Son teknoloji ekipmanlarla donatılmış kliniğimiz.' },
  { icon: '❤️', title: 'Sevgi Dolu Yaklaşım', desc: 'Her hastamıza şefkat ve sevgi ile yaklaşırız.' },
  { icon: '🚑', title: '7/24 Acil Hizmet', desc: 'Acil durumlarda her zaman yanınızdayız.' },
];

const regions = [
  { name: 'Batıkent', slug: 'batikent', type: 'Merkez' },
  { name: 'Yenimahalle', slug: 'yenimahalle', type: 'İlçe' },
  { name: 'Etimesgut', slug: 'etimesgut', type: 'İlçe' },
  { name: 'Sincan', slug: 'sincan', type: 'İlçe' },
  { name: 'Keçiören', slug: 'kecioren', type: 'İlçe' },
  { name: 'Demetevler', slug: 'demetevler', type: 'Semt' },
  { name: 'Eryaman', slug: 'eryaman', type: 'Semt' },
  { name: 'Çayyolu', slug: 'cayyolu', type: 'Semt' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Arka plan pet görseli — buğulu */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg/pets-bg.jpg"
            alt="Evcil hayvanlar arka plan"
            fill
            className="object-cover blur-[2px] scale-105"
            priority
          />
          {/* Beyaz buğulu katman */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-primary-50/40 to-white/70" />
        </div>

        {/* Dekoratif soft bloblar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-accent-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* SOL TARAF — Metin */}
            <div className="order-2 lg:order-1">
              {/* Üst badge */}
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-gray-100 text-primary-700 text-sm font-medium mb-6">
                  <span>🐾</span>
                  <span>Evcil Hayvan Sağlığı Uzmanı</span>
                </div>
              </AnimatedSection>

              {/* Ana başlık */}
              <AnimatedSection delay={0.1}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                  <span className="text-primary-600 underline decoration-primary-400 decoration-4 underline-offset-8">Batıkent ve</span>
                  <br />
                  <span className="text-primary-600 underline decoration-primary-400 decoration-4 underline-offset-8">Ankara geneli</span>
                  <br />
                  <span className="text-gray-800">veteriner hekimlik &amp;</span>
                  <br />
                  <span className="text-gray-800">pet</span>
                </h1>
              </AnimatedSection>

              {/* Alt açıklama */}
              <AnimatedSection delay={0.2}>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                  Batıkent, Ankara ve çevre bölgelerde kedi, köpek ve diğer evcil hayvanlarınız
                  için modern klinik hizmeti. Aşılama, kısırlaştırma, muayene, ameliyat,
                  laboratuvar ve 7/24 acil veteriner hizmetleri.
                </p>
              </AnimatedSection>

              {/* CTA butonları */}
              <AnimatedSection delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link
                    href="/randevu"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 text-lg"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Hemen Randevu Alın
                  </Link>
                  <Link
                    href="/hizmetler"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/90 backdrop-blur-md text-primary-700 font-semibold rounded-xl border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-50 transition-all text-lg"
                  >
                    Tüm Hizmetlerimiz
                  </Link>
                </div>
              </AnimatedSection>

              {/* Alt kısa bilgiler */}
              <AnimatedSection delay={0.4}>
                <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Kedi &amp; Köpek Bakımı
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Aşılama &amp; Kısırlaştırma
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    7/24 Acil
                  </span>
                </div>
              </AnimatedSection>
            </div>

            {/* SAĞ TARAF — Görsel kartı */}
            <div className="order-1 lg:order-2 relative">
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  {/* Ana klinik görseli */}
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
                    <Image
                      src="/images/clinic/klinik-dis.jpeg"
                      alt="Anka Veteriner Kliniği Batıkent - Klinik Dış Görünüm"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Klinik içi üst bilgi */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md">
                      <span className="text-xl">🐾</span>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Evcil Hayvan Sağlığı</p>
                        <p className="text-xs text-gray-500">Yanınızdayız</p>
                      </div>
                    </div>
                  </div>

                  {/* 7/24 Acil Etiketi — sağ alt */}
                  <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl shadow-xl">
                    <span className="text-xl">🚨</span>
                    <div>
                      <p className="font-bold text-base">7/24 ACİL</p>
                      <p className="text-xs opacity-90">Her Zaman Ulaşılabilir</p>
                    </div>
                  </div>

                  {/* Deneyim Etiketi — sol alt */}
                  <div className="absolute -bottom-6 left-4 md:bottom-4 md:left-4 flex items-center gap-3 px-4 py-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100">
                    <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🏆</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-900">11+</p>
                      <p className="text-xs text-gray-500">Yıllık Deneyim</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard number="11+" label="Yıllık Deneyim" icon="📅" delay={0} />
            <StatCard number="5000+" label="Mutlu Müşteri" icon="😊" delay={0.1} />
            <StatCard number="3" label="Uzman Hekim" icon="🏥" delay={0.2} />
            <StatCard number="24/7" label="Acil Hizmet" icon="🚑" delay={0.3} />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ===== HİZMETLER ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                🏥 Hizmetlerimiz
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Profesyonel Veteriner Hizmetleri
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Batıkent ve Ankara genelinde sunduğumuz kapsamlı veteriner sağlık hizmetleri
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.name} delay={i * 0.1}>
                <Link href={service.href} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-3xl">{service.icon}</span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600 flex-1">{service.desc}</p>
                      <div className="mt-4 flex items-center gap-2 text-primary-600 text-sm font-semibold">
                        Detaylı Bilgi
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="#ffffff" />

      {/* ===== NEDEN BİZ ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
                ⭐ Neden Biz?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Neden Anka Veteriner Kliniği?
              </h2>
              <p className="mt-3 text-gray-600">Evcil dostlarınız için en iyisini seçin</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group h-full">
                  <div className="w-16 h-16 mx-auto mb-5 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="#f9fafb" />

      {/* ===== HASTALIKLAR ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
                🩺 Sağlık Rehberi
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Sık Görülen Evcil Hayvan Hastalıkları
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Erken teşhis ve tedavi ile evcil dostlarınızın sağlığını koruyoruz
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diseases.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 h-full">
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-4">{cat.title}</h3>
                  {cat.items.map((item) => (
                    <div key={item.sub} className="mb-3">
                      <p className="text-sm font-semibold text-primary-600 mb-1">{item.sub}</p>
                      <ul className="space-y-1">
                        {item.list.map((d) => (
                          <li key={d} className="text-sm text-gray-600 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="#ffffff" />

      {/* ===== HİZMET BÖLGELERİ ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                📍 Hizmet Bölgelerimiz
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ankara Genelinde Hizmet
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Batıkent merkez olmak üzere Ankara genelinde veteriner hizmeti sunuyoruz
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {regions.map((region, i) => (
              <AnimatedSection key={region.slug} delay={i * 0.05}>
                <Link
                  href={`/bolge/${region.slug}`}
                  className="block p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all group text-center"
                >
                  <div className="text-2xl mb-2">📍</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {region.name}
                  </h3>
                  <span className="text-xs text-gray-500">{region.type}</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/bolge"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Tüm Bölgeleri Görüntüle
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Trust Signals */}
      <LocalTrustSignals variant="full" />

      {/* Related Services */}
      <RelatedServices showAllLink />

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        {/* CTA arka planı da pet görseli ile */}
        <div className="absolute inset-0">
          <Image
            src="/images/bg/pets-bg-2.jpg"
            alt="Evcil hayvanlar"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/85" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="relative w-20 h-20 mx-auto mb-6 opacity-80">
              <Image
                src="/images/logo/anka-vet.png"
                alt="Anka Veteriner Kliniği Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Evcil Dostlarınız İçin En İyi Bakımı Sağlayın
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Hemen randevu alın, uzman veteriner hekimlerimiz ile tanışın. Batıkent ve
              Ankara genelinde hizmetinizdeyiz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/randevu"
                className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-colors shadow-xl text-lg"
              >
                Hemen Randevu Alın
              </Link>
              <a
                href="tel:+903123542652"
                className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors text-lg"
              >
                📞 (0312) 354 26 52
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
