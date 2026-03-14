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
    description: `${loc.name} ve çevresinde veteriner hizmetleri. Evcil hayvan sağlığı. (0312) 354 26 52`,
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
            <svg className="w-12 h-12 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Bölge Bilgileri</h3>
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
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Hemen İletişime Geçin</h3>
                  <div className="space-y-3 mb-6">
                    <a href="tel:+903123542652" className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl text-primary-700 font-medium hover:bg-primary-100 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> (0312) 354 26 52
                    </a>
                    <a href="https://wa.me/905548550590?text=Merhaba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-green-50 rounded-xl text-green-700 font-medium hover:bg-green-100 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> WhatsApp
                    </a>
                  </div>
                  <Link href="/randevu" className="block w-full text-center py-3 bg-gradient-to-r from-bordo-600 to-bordo-700 text-white font-bold rounded-xl hover:from-bordo-700 hover:to-bordo-800 transition-colors shadow-lg shadow-bordo-600/25">
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
