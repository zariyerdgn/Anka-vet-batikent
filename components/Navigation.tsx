'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { name: 'Ana Sayfa', href: '/' },
  {
    name: 'Hakkımızda',
    href: '/hakkimizda',
    submenu: [
      { name: 'Bizi Tanıyın', href: '/hakkimizda' },
      { name: 'Ekibimiz', href: '/hakkimizda/ekibimiz' },
      { name: 'SSS', href: '/hakkimizda/sss' },
      { name: 'Müşteri Görüşleri', href: '/hakkimizda/musteri-gorusleri' },
    ],
  },
  { name: 'Hizmetler', href: '/hizmetler' },
  { name: 'Ürünlerimiz', href: '/urunlerimiz' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Blog', href: '/blog' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
    setMobileSubmenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen, closeMenu]);

  return (
    <>
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Ana içeriğe atla
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        aria-label="Ana navigasyon"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 p-0.5">
                <Image
                  src="/images/logo/anka-logo.jpeg"
                  alt="Anka Veteriner Kliniği Logo"
                  width={48}
                  height={48}
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  Anka Veteriner Kliniği
                </span>
                <span className="text-[10px] text-gray-500 font-medium -mt-0.5">
                  Vet.Hek. İbrahim Yıldırım
                </span>
                <span className="text-[9px] text-gray-400 -mt-0.5">
                  Batıkent - Ankara
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) =>
                item.submenu ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50 flex items-center gap-1"
                    >
                      {item.name}
                      <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link
                href="/randevu"
                className="ml-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40"
              >
                Randevu Al
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => {
                setMobileOpen(!mobileOpen);
                if (!mobileOpen) document.body.style.overflow = 'hidden';
                else document.body.style.overflow = '';
              }}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={closeMenu}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden overflow-y-auto shadow-2xl"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-lg font-bold text-primary-600">Menü</span>
                    <button onClick={closeMenu} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Menüyü kapat">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-1">
                    {menuItems.map((item) =>
                      item.submenu ? (
                        <div key={item.name}>
                          <button
                            onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors font-medium"
                          >
                            {item.name}
                            <svg className={`w-4 h-4 transition-transform ${mobileSubmenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <AnimatePresence>
                            {mobileSubmenuOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden ml-4"
                              >
                                {item.submenu.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={closeMenu}
                                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMenu}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors font-medium"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <Link
                      href="/randevu"
                      onClick={closeMenu}
                      className="block w-full text-center px-5 py-3 text-white font-semibold bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl shadow-lg"
                    >
                      Randevu Al
                    </Link>
                    <div className="mt-4 flex gap-3">
                      <a
                        href="tel:+903123542652"
                        className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-primary-600 border border-primary-200 rounded-xl hover:bg-primary-50 transition-colors"
                      >
                        📞 Ara
                      </a>
                      <a
                        href="https://wa.me/905548550590?text=Merhaba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-green-600 border border-green-200 rounded-xl hover:bg-green-50 transition-colors"
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
