import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import RelatedServices from '@/components/RelatedServices';
import LocalTrustSignals from '@/components/LocalTrustSignals';
import { locations } from '@/lib/locations';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return { title: 'Bölge Bulunamadı' };
  return {
    title: `${loc.name} Veteriner | Anka Veteriner Kliniği`,
    description: `${loc.name} ve çevresinde veteriner hizmetleri. Evcil hayvan sağlığı. ☎ (0312) 354 26 52`,
    keywords: loc.keywords,
  };
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export default async function BolgeDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmet Bölgeleri', href: '/bolge' }, { name: loc.name, href: `/bolge/${slug}` }]} />

      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-5xl mb-4">📍</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{loc.name} Veteriner</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">{loc.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{loc.name} Veteriner Hizmetleri</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Anka Veteriner Kliniği olarak {loc.name} ve çevresinde kapsamlı veteriner sağlık hizmetleri sunuyoruz.
                  {loc.distanceFromCenter !== 'Merkez' && ` Kliniğimize ${loc.distanceFromCenter} uzaklıkta bulunan ${loc.name} bölgesine hizmet vermekteyiz.`}
                  {' '}Uzman veteriner hekimlerimiz ile evcil hayvan sağlığı alanında profesyonel hizmet alabilirsiniz.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{loc.name} Bölgesinde Sunduğumuz Hizmetler</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {loc.services.map((service) => (
                    <div key={service} className="flex items-center gap-2 p-3 bg-primary-50 rounded-xl">
                      <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">📊 Bölge Bilgileri</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-500">Bölge</span>
                      <p className="font-semibold text-gray-900">{loc.region}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Mesafe</span>
                      <p className="font-semibold text-gray-900">{loc.distanceFromCenter}</p>
                    </div>
                    {loc.population && (
                      <div>
                        <span className="text-sm text-gray-500">Nüfus</span>
                        <p className="font-semibold text-gray-900">{loc.population}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-sm text-gray-500">Tür</span>
                      <p className="font-semibold text-gray-900">{loc.isDistrict ? 'İlçe' : 'Semt'}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 sticky top-24">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📞 Hemen İletişime Geçin</h3>
                  <div className="space-y-3 mb-6">
                    <a href="tel:+903123542652" className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl text-primary-700 font-medium hover:bg-primary-100 transition-colors">
                      <span>📞</span> (0312) 354 26 52
                    </a>
                    <a href="https://wa.me/905548550590?text=Merhaba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-green-50 rounded-xl text-green-700 font-medium hover:bg-green-100 transition-colors">
                      <span>💬</span> WhatsApp
                    </a>
                  </div>
                  <Link href="/randevu" className="block w-full text-center py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-colors shadow-lg">
                    Randevu Al
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <LocalTrustSignals variant="compact" />
      <RelatedServices showAllLink />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VeterinaryCare',
            name: `Anka Veteriner Kliniği - ${loc.name}`,
            description: `${loc.name} bölgesinde veteriner hizmetleri`,
            areaServed: { '@type': 'AdministrativeArea', name: loc.name },
            telephone: '+903123542652',
            url: `https://batikentveteriner.com/bolge/${slug}`,
          }),
        }}
      />
    </>
  );
}
