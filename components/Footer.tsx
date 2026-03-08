import Link from 'next/link';

const quickLinks = [
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'Hizmetlerimiz', href: '/hizmetler' },
  { name: 'Yakınımda Veteriner', href: '/yakinimda-veteriner' },
  { name: 'Hizmet Bölgelerimiz', href: '/bolge' },
  { name: 'Blog', href: '/blog' },
  { name: 'Randevu Al', href: '/randevu' },
  { name: 'İletişim', href: '/iletisim' },
];

const services = [
  { name: 'Kedi & Köpek Muayene', href: '/kedi-kopek-muayene' },
  { name: 'Kedi Kısırlaştırması', href: '/kedi-kisirlastrma' },
  { name: 'Aşılama', href: '/asilama' },
  { name: 'Pet Pansiyonu', href: '/pansiyon' },
  { name: 'Ameliyat & Cerrahi', href: '/hizmetler' },
  { name: 'Acil Hizmet', href: '/iletisim' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Anka Veteriner Kliniği</h3>
                <p className="text-xs text-gray-400">Batıkent - Ankara</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Batıkent ve Ankara genelinde evcil hayvan sağlığı alanında profesyonel veteriner hekimlik hizmeti sunuyoruz.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ankavetbatikent/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/905548550590?text=Merhaba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-green-500 flex items-center justify-center transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2.5">
              {services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">İletişim</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+903123542652" className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <span className="text-lg">📞</span>
                <span>(0312) 354 26 52</span>
              </a>
              <a href="https://wa.me/905548550590" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <span className="text-lg">💬</span>
                <span>0554 855 0590</span>
              </a>
              <a href="mailto:info@batikentveteriner.com" className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <span className="text-lg">✉️</span>
                <span>info@batikentveteriner.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <span className="text-lg">📍</span>
                <span>Batıkent, Yenimahalle / Ankara</span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                🕐 Çalışma Saatleri
              </h4>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Pazartesi - Cuma</span>
                  <span className="text-primary-400 font-medium">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cumartesi</span>
                  <span className="text-primary-400 font-medium">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pazar</span>
                  <span className="text-red-400 font-medium">Sadece Acil</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Anka Veteriner Kliniği - Batıkent, Ankara. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/gizlilik-politikasi" className="hover:text-gray-300 transition-colors">
              Gizlilik Politikası
            </Link>
            <span>•</span>
            <Link href="/kullanim-kosullari" className="hover:text-gray-300 transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
