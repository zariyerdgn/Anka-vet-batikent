import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import GoogleReviews from '@/components/GoogleReviews';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Müşteri Görüşleri | Google Yorumları',
  description: 'Anka Veteriner Kliniği Batıkent müşteri yorumları ve değerlendirmeleri. Google üzerinden doğrulanmış gerçek yorumlarımızı inceleyin.',
};

const WRITE_REVIEW_URL = "https://www.google.com/search?sca_esv=d0d51c5094d38dd2&sxsrf=ANbL-n788bgKOM8T5iyWVkPsPA1aQKB8JQ:1772924380319&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOeRroW35CWlQblTMpIRTqXlv2ifEYjEoJSzDlecC2PleJJ3JifggUAEeBVIOr3rW2pI21Vs7qIyEoL2YGMaAkXHgajvigQUg99xS0m-6-C2h-e_iHa3gUgEgupTO_G0UKJRb7JY%3D&q=Bat%C4%B1kent+Anka+Veteriner+Klini%C4%9Fi+Yorumlar&sa=X&ved=2ahUKEwiV95v_8Y6TAxWj5AIHHYFFG3gQ0bkNegQIIxAF&biw=1470&bih=772&dpr=2";

export default function MusteriGorusleriPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Hakkımızda', href: '/hakkimizda' },
          { name: 'Müşteri Görüşleri', href: '/hakkimizda/musteri-gorusleri' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-100 text-sm font-medium mb-6 border border-white/10">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Google Doğrulanmış Yorumlar
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Müşterilerimiz Ne Diyor?
            </h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
              Anka Veteriner Kliniği Batıkent hakkında Google üzerinden yapılan gerçek değerlendirmeler
            </p>
            <a
              href={WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all shadow-lg"
            >
              <svg viewBox="0 0 48 48" className="w-5 h-5">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              Google&apos;da Yorum Bırakın
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleReviews />
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Bizi Ziyaret Edin</h2>
              <p className="text-gray-600">Kentkoop Mh 1859. Cadde, Batıkent Blv. Özgünkent Sitesi No:22C, Yenimahalle/Ankara</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.5!2d32.7329!3d39.9743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU4JzI3LjUiTiAzMsKwNDMnNTguNCJF!5e0!3m2!1str!2str!4v1&q=Anka+Veteriner+Klini%C4%9Fi+Bat%C4%B1kent"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anka Veteriner Kliniği Batıkent - Google Haritalar"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
