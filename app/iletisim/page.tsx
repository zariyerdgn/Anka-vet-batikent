'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const subjects = [
  'Genel Bilgi',
  'Randevu Talebi',
  'Hizmet Bilgisi',
  'Şikayet / Öneri',
  'Diğer',
];

export default function IletisimPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Merhaba, ben ${form.name}.%0A%0AKonu: ${form.subject}%0ATelefon: ${form.phone}%0AE-posta: ${form.email}%0A%0AMesaj: ${form.message}`;
    window.open(`https://wa.me/905548550590?text=${text}`, '_blank');
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'İletişim', href: '/iletisim' },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-100 text-sm font-medium mb-6">
              📞 Bize Ulaşın
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              İletişim
            </h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Sorularınız, randevu talepleriniz veya acil durumlar için bize hemen ulaşın
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Ana İçerik */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Üst Bilgi Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-14">
            {/* Adres */}
            <AnimatedSection delay={0}>
              <a
                href="https://maps.google.com/?q=Kentkoop+Mh+1859+Cadde+Batıkent+Blv+Özgünkent+Sitesi+No:22C+Yenimahalle+Ankara"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all h-full"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-xl group-hover:bg-primary-200 transition-colors">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">Adres</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Kentkoop Mh. 1859. Cadde,
                    <br />
                    Batıkent Blv. Özgünkent Sitesi
                    <br />
                    No:22C, Yenimahalle / Ankara
                  </p>
                </div>
              </a>
            </AnimatedSection>

            {/* Telefon */}
            <AnimatedSection delay={0.1}>
              <a
                href="tel:+903123542652"
                className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all h-full"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-xl group-hover:bg-green-200 transition-colors">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">Telefon</h3>
                  <p className="text-sm text-primary-600 font-semibold">(0312) 354 26 52</p>
                  <p className="text-xs text-gray-500 mt-1">Aramak için tıklayın</p>
                </div>
              </a>
            </AnimatedSection>

            {/* E-posta */}
            <AnimatedSection delay={0.2}>
              <a
                href="mailto:info@batikentveteriner.com"
                className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all h-full"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl group-hover:bg-blue-200 transition-colors">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">E-posta</h3>
                  <p className="text-sm text-primary-600 font-semibold">info@batikentveteriner.com</p>
                  <p className="text-xs text-gray-500 mt-1">Mail göndermek için tıklayın</p>
                </div>
              </a>
            </AnimatedSection>

            {/* Çalışma Saatleri */}
            <AnimatedSection delay={0.3}>
              <div className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-full">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-xl">
                  🕐
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">Çalışma Saatleri</h3>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-600">Pzt — Cum</span>
                      <span className="text-sm font-semibold text-gray-800">09:00 – 19:00</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-600">Cumartesi</span>
                      <span className="text-sm font-semibold text-gray-800">09:00 – 17:00</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-600">Pazar</span>
                      <span className="text-sm font-semibold text-red-500">Sadece Acil</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sosyal Medya Butonları */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              <a
                href="https://wa.me/905548550590?text=Merhaba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/25 text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/ankavetbatikent/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/25 text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
              <a
                href="tel:+903123542652"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25 text-base"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Ara
              </a>
            </div>
          </AnimatedSection>

          {/* Form + Harita Grid */}
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Form — Sol 3 kolon */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Bize Yazın</h2>
                    <p className="text-sm text-gray-500">Mesajınız WhatsApp üzerinden iletilecektir</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Ad Soyad */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Ad Soyad <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>

                  {/* E-posta & Telefon yan yana */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        E-posta
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                        placeholder="ornek@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Telefon <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                        placeholder="05XX XXX XX XX"
                      />
                    </div>
                  </div>

                  {/* Konu */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Konu
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-gray-800"
                    >
                      <option value="">Seçiniz</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mesaj */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Mesajınız <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none text-gray-800 placeholder:text-gray-400"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  {/* Gönder */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg shadow-green-500/25 text-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp ile Gönder
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Harita + Klinik Görseli — Sağ 2 kolon */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Klinik Dış Görseli */}
              <AnimatedSection direction="right">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/clinic/klinik-dis.jpeg"
                    alt="Anka Veteriner Kliniği Batıkent - Dış Görünüm"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-xl w-fit">
                      <span className="text-lg">🏥</span>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Anka Veteriner Kliniği</p>
                        <p className="text-xs text-gray-500">Batıkent, Ankara</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Harita */}
              <AnimatedSection direction="right" delay={0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex-1">
                  <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                    <span className="text-lg">🗺️</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Konum</p>
                      <p className="text-xs text-gray-500">Haritada görüntüle</p>
                    </div>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48912.85455073927!2d32.68!3d39.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33e8c2f3de577%3A0xbe308f3c2a4c7e95!2sBat%C4%B1kent%2C%20Yenimahalle%2FAnkara!5e0!3m2!1str!2str!4v1"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Anka Veteriner Kliniği Batıkent Konum"
                    className="w-full"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">🐾</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Acil Durumlar İçin 7/24 Yanınızdayız
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Evcil dostunuzun acil sağlık sorunları için gece gündüz demeden bizi arayabilirsiniz
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+903123542652"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-lg text-lg"
              >
                🚨 Acil: (0312) 354 26 52
              </a>
              <a
                href="https://wa.me/905548550590?text=Acil+durum+var"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-600 font-bold rounded-xl border-2 border-green-200 hover:bg-green-50 transition-all text-lg"
              >
                💬 WhatsApp Acil
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
