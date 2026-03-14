import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import StatCard from '@/components/StatCard';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import PawPattern from '@/components/PawPattern';

export const metadata: Metadata = {
  title: 'Hakkımızda - Bizi Tanıyın',
  description: 'Anka Veteriner Kliniği Batıkent. Uzman veteriner hekimlerimiz, modern tesislerimiz ve hayvan sağlığına olan tutkumuz hakkında bilgi edinin.',
};

const values = [
  { title: 'Şefkat', desc: 'Her hastamıza sevgi ve şefkatle yaklaşırız.' },
  { title: 'Mükemmellik', desc: 'En yüksek standartlarda hizmet sunarız.' },
  { title: 'Güven', desc: 'Şeffaf ve dürüst iletişim ile güven oluştururuz.' },
  { title: 'Yenilikçilik', desc: 'Veteriner hekimlikte en son gelişmeleri takip ederiz.' },
];

const valueIcons = [
  <svg key="heart" className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  <svg key="trophy" className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  <svg key="handshake" className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="lightbulb" className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
];

export default function HakkimizdaPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hakkımızda', href: '/hakkimizda' }]} />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <PawPattern className="text-white opacity-40" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bizi Tanıyın</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Batıkent&apos;in güvenilir veteriner kliniği olarak hayvan sağlığına adanmış bir ekibiz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-20 overflow-hidden">
        <PawPattern className="text-primary-300" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/hero/klinik-dis.jpeg" alt="Anka Veteriner Kliniği Batıkent" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">Hikayemiz</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Batıkent&apos;in Güvenilir Veteriner Kliniği</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Anka Veteriner Kliniği, Batıkent ve Ankara genelinde evcil hayvan sağlığı alanında uzmanlaşmış bir veteriner kliniğidir. Deneyimli hekim kadromuz ile evcil dostlarınızın sağlığını en üst düzeyde korumayı hedefliyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Modern ekipmanlarla donatılmış kliniğimizde, acil müdahaleden rutin kontrollere, ameliyattan aşılamaya kadar geniş bir yelpazede hizmet sunuyoruz. Her hastamıza özel ilgi göstererek, en iyi tedavi sonuçlarını elde etmeyi amaçlıyoruz.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard number="11+" label="Yıllık Deneyim" icon="calendar" delay={0} />
            <StatCard number="5000+" label="Mutlu Hasta" icon="paw" delay={0.1} />
            <StatCard number="3" label="Uzman Hekim" icon="team" delay={0.2} />
            <StatCard number="24/7" label="Acil Hizmet" icon="emergency" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 overflow-hidden">
        <PawPattern className="text-primary-200" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 h-full border border-primary-200">
                <div className="flex justify-center mb-4"><svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
                <p className="text-gray-600 leading-relaxed">
                  Batıkent ve Ankara genelinde hayvan sağlığı alanında en yüksek kalitede hizmet sunarak, hayvanların yaşam kalitesini artırmak ve sahiplerinin gönül rahatlığını sağlamak. Her hastamıza şefkat, bilgi ve en modern tedavi yöntemleriyle yaklaşmak.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 h-full border border-secondary-200">
                <div className="flex justify-center mb-4"><svg className="w-10 h-10 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                <p className="text-gray-600 leading-relaxed">
                  Anka Veteriner Kliniği, kurulduğu andan itibaren sürekli gelişmeyi hedef almış, yeni güncel cihaz donanımları ile tüm hastalarına en iyi hizmeti vermeyi hedeflemiştir.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Değerlerimiz</h2>
              <p className="mt-3 text-gray-600">Hizmet anlayışımızın temelleri</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                  <div className="flex justify-center mb-4">{valueIcons[i]}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bize Ulaşın</h2>
          <p className="text-gray-600 mb-8">Sorularınız için bize ulaşın veya randevu oluşturun.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/randevu" className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-colors shadow-lg text-lg">
              Randevu Al
            </Link>
            <Link href="/iletisim" className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-colors border border-primary-200 text-lg">
              İletişim
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
