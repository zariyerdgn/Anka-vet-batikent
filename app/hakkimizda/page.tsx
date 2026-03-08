import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import StatCard from '@/components/StatCard';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Hakkımızda - Bizi Tanıyın',
  description: 'Anka Veteriner Kliniği Batıkent. Uzman veteriner hekimlerimiz, modern tesislerimiz ve hayvan sağlığına olan tutkumuz hakkında bilgi edinin.',
};

const values = [
  { icon: '❤️', title: 'Şefkat', desc: 'Her hastamıza sevgi ve şefkatle yaklaşırız.' },
  { icon: '🏆', title: 'Mükemmellik', desc: 'En yüksek standartlarda hizmet sunarız.' },
  { icon: '🤝', title: 'Güven', desc: 'Şeffaf ve dürüst iletişim ile güven oluştururuz.' },
  { icon: '💡', title: 'Yenilikçilik', desc: 'Veteriner hekimlikte en son gelişmeleri takip ederiz.' },
];

export default function HakkimizdaPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hakkımızda', href: '/hakkimizda' }]} />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/hero/klinik-dis.jpeg" alt="Anka Veteriner Kliniği Batıkent" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">📖 Hikayemiz</span>
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
            <StatCard number="15+" label="Yıllık Deneyim" icon="📅" delay={0} />
            <StatCard number="5000+" label="Mutlu Hasta" icon="🐾" delay={0.1} />
            <StatCard number="3" label="Uzman Hekim" icon="👨‍⚕️" delay={0.2} />
            <StatCard number="24/7" label="Acil Hizmet" icon="🚑" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 h-full border border-primary-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
                <p className="text-gray-600 leading-relaxed">
                  Batıkent ve Ankara genelinde hayvan sağlığı alanında en yüksek kalitede hizmet sunarak, hayvanların yaşam kalitesini artırmak ve sahiplerinin gönül rahatlığını sağlamak. Her hastamıza şefkat, bilgi ve en modern tedavi yöntemleriyle yaklaşmak.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 h-full border border-secondary-200">
                <div className="text-4xl mb-4">🔭</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ankara&apos;nın önde gelen veteriner klinikleri arasında yer alarak, evcil hayvanların sağlığında referans noktası olmak. Sürekli gelişen teknoloji ve bilgiyle donatılmış, güvenilir ve yenilikçi bir sağlık merkezi olmak.
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
                  <div className="text-5xl mb-4">{v.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Tesislerimiz</h2>
              <p className="mt-3 text-gray-600">Modern ekipmanlarla donatılmış tesislerimiz</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Laboratuvar', image: '/images/lab/laboratuvar.jpeg', desc: 'Tam donanımlı laboratuvarımızda kan testleri, idrar analizleri ve mikrobiyolojik incelemeler yapıyoruz.' },
              { title: 'Görüntüleme', image: '/images/gallery/ultrason.jpeg', desc: 'Ultrason ve röntgen cihazlarımız ile detaylı görüntüleme hizmeti sunuyoruz.' },
              { title: 'Ameliyathane', image: '/images/surgery/ameliyathane-ici.jpeg', desc: 'Steril ameliyathanemizde güvenli cerrahi operasyonlar gerçekleştiriyoruz.' },
            ].map((facility, i) => (
              <AnimatedSection key={facility.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="relative h-56">
                    <Image src={facility.image} alt={facility.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{facility.title}</h3>
                    <p className="text-sm text-gray-600">{facility.desc}</p>
                  </div>
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
