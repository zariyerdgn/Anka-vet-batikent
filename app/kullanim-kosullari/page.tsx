import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları',
  description: 'Anka Veteriner Kliniği web sitesi kullanım koşulları ve şartlar.',
};

export default function KullanimKosullariPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Kullanım Koşulları', href: '/kullanim-kosullari' }]} />

      <section className="relative py-16 bg-gradient-to-br from-gray-700 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kullanım Koşulları</h1>
            <p className="text-lg text-gray-300">Son güncelleme: 2024</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Genel</h2>
              <p className="text-gray-600 mb-6">
                Bu web sitesi (batikentveteriner.com), Anka Veteriner Kliniği tarafından işletilmektedir. Web sitemizi kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen web sitemizi kullanmayınız.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hizmet Kapsamı</h2>
              <p className="text-gray-600 mb-6">
                Web sitemiz, kliniğimiz hakkında bilgi vermek, hizmetlerimizi tanıtmak ve iletişim kolaylığı sağlamak amacıyla hazırlanmıştır. Sitede yer alan bilgiler genel bilgilendirme amaçlıdır ve veteriner tıbbi tavsiye yerine geçmez.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Fikri Mülkiyet Hakları</h2>
              <p className="text-gray-600 mb-6">
                Web sitemizdeki tüm içerikler (metin, görsel, logo, tasarım, yazılım) Anka Veteriner Kliniği&apos;nin mülkiyetindedir ve telif hakları kanunu ile korunmaktadır. İçeriklerin izinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sorumluluk Sınırlaması</h2>
              <p className="text-gray-600 mb-4">Aşağıdaki hususlarda sorumluluk kabul etmiyoruz:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Web sitesinin kesintisiz veya hatasız çalışacağına dair garanti</li>
                <li>Site içeriğindeki bilgilerin eksiksiz veya güncel olduğuna dair garanti</li>
                <li>Üçüncü taraf web sitelerine verilen bağlantıların içerikleri</li>
                <li>Web sitesinin kullanımından doğabilecek doğrudan veya dolaylı zararlar</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Randevu ve İletişim Formları</h2>
              <p className="text-gray-600 mb-6">
                Web sitemiz üzerinden gönderilen randevu ve iletişim formları, WhatsApp üzerinden iletilmektedir. Form gönderimi, kesinleşmiş bir randevu anlamına gelmez. Randevunuz kliniğimiz tarafından onaylandığında size bilgi verilecektir.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kullanıcı Sorumlulukları</h2>
              <p className="text-gray-600 mb-4">Web sitemizi kullanırken:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Doğru ve güncel bilgiler paylaşmanız beklenmektedir</li>
                <li>Siteyi yasadışı amaçlarla kullanmanız yasaktır</li>
                <li>Site güvenliğini tehlikeye atacak eylemlerden kaçınmalısınız</li>
                <li>Diğer kullanıcıların haklarına saygı göstermelisiniz</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Tıbbi Sorumluluk Reddi</h2>
              <p className="text-gray-600 mb-6">
                Web sitemizdeki blog yazıları, hizmet açıklamaları ve diğer içerikler genel bilgilendirme amaçlıdır. Bu bilgiler profesyonel veteriner muayenesi ve tedavinin yerine geçmez. Hayvanınızın sağlık sorunları için mutlaka veteriner hekime başvurunuz.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Değişiklikler</h2>
              <p className="text-gray-600 mb-6">
                Bu kullanım koşulları önceden bildirim yapılmaksızın değiştirilebilir. Güncel koşullar web sitemizde yayımlanır. Web sitemizi kullanmaya devam etmeniz, güncel koşulları kabul ettiğiniz anlamına gelir.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Uygulanacak Hukuk</h2>
              <p className="text-gray-600 mb-6">
                Bu kullanım koşulları Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlık durumunda Ankara mahkemeleri ve icra daireleri yetkilidir.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. İletişim</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700"><strong>Anka Veteriner Kliniği</strong></p>
                <p className="text-gray-600">Batıkent, Yenimahalle / Ankara</p>
                <p className="text-gray-600">📞 (0312) 354 26 52</p>
                <p className="text-gray-600">✉️ info@batikentveteriner.com</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
