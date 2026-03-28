import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import StatCard from '@/components/StatCard';
import LocalTrustSignals from '@/components/LocalTrustSignals';
import SectionDivider from '@/components/SectionDivider';
import HeroSlider from '@/components/HeroSlider';

const diseases = [
  {
    title: 'Köpek Hastalıkları',
    desc: 'Köpeklerde sık karşılaşılan enfeksiyöz ve paraziter hastalıkların erken teşhis ve tedavisi.',
    items: [
      { sub: 'Enfeksiyöz', list: ['Parvovirüs', 'Distemper', 'Leptospiroz', 'Kennel Cough'] },
      { sub: 'Paraziter', list: ['Pire', 'Kene', 'İç Parazitler', 'Mantar'] },
    ],
  },
  {
    title: 'Kedi Hastalıkları',
    desc: 'Kedilerde görülen bulaşıcı hastalıklar ve paraziter enfeksiyonların uzman tedavisi.',
    items: [
      { sub: 'Enfeksiyöz', list: ['FIP', 'FIV', 'FeLV', 'Kedi Nezlesi'] },
      { sub: 'Paraziter', list: ['Pire', 'Kulak Uyuzu', 'İç Parazitler', 'Mantar'] },
    ],
  },
  {
    title: 'Kuş Hastalıkları',
    desc: 'Evcil kuşlarda yaygın görülen solunum, deri ve sindirim hastalıklarının tedavisi.',
    items: [
      { sub: 'Yaygın', list: ['Tüy Dökülmesi', 'Solunum Yolu', 'Parazitler', 'Mantar'] },
    ],
  },
  {
    title: 'Kemirgen Hastalıkları',
    desc: 'Hamster, tavşan ve diğer kemirgenlerde sık görülen sağlık sorunlarının tanı ve tedavisi.',
    items: [
      { sub: 'Yaygın', list: ['Diş Sorunları', 'Solunum Yolu', 'Deri Hastalıkları', 'Sindirim'] },
    ],
  },
];

const whyUs = [
  { title: 'Uzman Hekim Kadrosu', desc: 'Deneyimli veteriner hekimlerimiz ile güvendesiniz.' },
  { title: 'Modern Tesisler', desc: 'Son teknoloji ekipmanlarla donatılmış kliniğimiz.' },
  { title: 'Sevgi Dolu Yaklaşım', desc: 'Her hastamıza şefkat ve sevgi ile yaklaşırız.' },
  { title: '7/24 Acil Hizmet', desc: 'Acil durumlarda her zaman yanınızdayız.' },
];

const whyUsIcons = [
  <svg key="team" className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  <svg key="building" className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg key="heart" className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  <svg key="alert" className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
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
      {/* ===== HERO SLIDER ===== */}
      <HeroSlider />

      {/* ===== STATS ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard number="11+" label="Yıllık Deneyim" icon="calendar" delay={0} />
            <StatCard number="5000+" label="Mutlu Müşteri" icon="smile" delay={0.1} />
            <StatCard number="3" label="Uzman Hekim" icon="hospital" delay={0.2} />
            <StatCard number="24/7" label="Acil Hizmet" icon="emergency" delay={0.3} />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ===== NEDEN BİZ ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                Neden Biz?
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
                  <div className="w-16 h-16 mx-auto mb-5 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {whyUsIcons[i]}
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
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Sağlık Rehberi
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
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">{cat.desc}</p>
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
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Hizmet Bölgelerimiz
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
                  <svg className="w-6 h-6 mx-auto mb-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
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
                className="px-8 py-4 bg-gradient-to-r from-bordo-600 to-bordo-700 text-white font-bold rounded-xl hover:from-bordo-700 hover:to-bordo-800 transition-colors shadow-xl shadow-bordo-600/25 text-lg"
              >
                Hemen Randevu Alın
              </Link>
              <a
                href="tel:+905548550590"
                className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors text-lg"
              >
                0554 855 05 90
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
