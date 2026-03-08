import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Anka Veteriner Kliniği gizlilik politikası. Kişisel verilerinizin korunması hakkında bilgi.',
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi' }]} />

      <section className="relative py-16 bg-gradient-to-br from-gray-700 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gizlilik Politikası</h1>
            <p className="text-lg text-gray-300">Son güncelleme: 2024</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Giriş</h2>
              <p className="text-gray-600 mb-6">
                Anka Veteriner Kliniği (&quot;Klinik&quot;, &quot;biz&quot;, &quot;bizim&quot;) olarak, web sitemizi (batikentveteriner.com) ziyaret eden kullanıcıların (&quot;siz&quot;, &quot;sizin&quot;) gizliliğini korumayı taahhüt ediyoruz. Bu gizlilik politikası, kişisel verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklamaktadır.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Toplanan Bilgiler</h2>
              <p className="text-gray-600 mb-4">Web sitemiz aracılığıyla aşağıdaki bilgileri toplayabiliriz:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>İletişim formu üzerinden gönderilen ad, soyad, telefon, e-posta bilgileri</li>
                <li>Randevu formu üzerinden gönderilen hayvan ve sahip bilgileri</li>
                <li>Google Analytics aracılığıyla toplanan anonim ziyaretçi istatistikleri</li>
                <li>Çerezler (cookies) aracılığıyla toplanan tarama bilgileri</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Bilgilerin Kullanımı</h2>
              <p className="text-gray-600 mb-4">Toplanan bilgiler aşağıdaki amaçlarla kullanılmaktadır:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Randevu ve iletişim taleplerinize yanıt vermek</li>
                <li>Veteriner hizmetlerimizi sunmak ve geliştirmek</li>
                <li>Web sitemizin performansını analiz etmek</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Bilgi Güvenliği</h2>
              <p className="text-gray-600 mb-6">
                Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler almaktayız. Verileriniz yetkisiz erişim, değiştirme, ifşa veya yok etmeye karşı korunmaktadır. SSL sertifikası ile web sitesi trafiği şifrelenmektedir.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Çerezler (Cookies)</h2>
              <p className="text-gray-600 mb-6">
                Web sitemiz, kullanıcı deneyimini iyileştirmek ve site performansını analiz etmek amacıyla çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz, ancak bu durumda bazı özellikler düzgün çalışmayabilir.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Üçüncü Taraf Hizmetler</h2>
              <p className="text-gray-600 mb-6">
                Web sitemizde Google Analytics, Google Maps ve WhatsApp gibi üçüncü taraf hizmetleri kullanılmaktadır. Bu hizmetlerin kendi gizlilik politikaları bulunmaktadır ve bu politikalardan sorumlu değiliz.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. KVKK Kapsamında Haklarınız</h2>
              <p className="text-gray-600 mb-4">6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmiş olan verilerinize ilişkin bilgi talep etme</li>
                <li>Verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Eksik veya yanlış işlenmiş verilerinizin düzeltilmesini isteme</li>
                <li>Verilerinizin silinmesini veya yok edilmesini isteme</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Değişiklikler</h2>
              <p className="text-gray-600 mb-6">
                Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler web sitemizde yayımlandığı tarihte yürürlüğe girer. Önemli değişiklikler hakkında web sitemiz üzerinden bilgilendirme yapılacaktır.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. İletişim</h2>
              <p className="text-gray-600 mb-4">Gizlilik politikamız hakkında sorularınız için bize ulaşabilirsiniz:</p>
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
