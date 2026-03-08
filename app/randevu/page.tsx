'use client';

import { useState, useMemo } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const animalTypes = ['Kedi', 'Köpek', 'Kuş', 'Kemirgen', 'Egzotik', 'Diğer'];
const reasons = ['Genel Muayene', 'Aşılama', 'Kısırlaştırma', 'Tırnak Kesimi', 'Diş Bakımı', 'Acil Durum', 'Kontrol Muayenesi', 'Yavru Kontrol', 'Diğer'];
const timeSlots = ['09:00-11:00', '11:00-13:00', '14:00-16:00', '16:00-18:00'];

export default function RandevuPage() {
  const [form, setForm] = useState({
    animalName: '', animalType: '', animalAge: '',
    ownerName: '', ownerEmail: '', ownerPhone: '',
    date: '', time: '', reason: '', notes: '',
  });

  const today = new Date().toISOString().split('T')[0];

  const availableSlots = useMemo(() => {
    if (form.date === today) {
      const now = new Date();
      const currentHour = now.getHours();
      return timeSlots.filter((slot) => {
        const startHour = parseInt(slot.split(':')[0]);
        return startHour > currentHour;
      });
    }
    return timeSlots;
  }, [form.date, today]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🐾 YENİ RANDEVU TALEBİ%0A%0A` +
      `🐕 Hayvan Bilgileri:%0AAdı: ${form.animalName}%0ATürü: ${form.animalType}%0AYaşı: ${form.animalAge}%0A%0A` +
      `👤 Sahip Bilgileri:%0AAdı: ${form.ownerName}%0ATelefon: ${form.ownerPhone}%0AE-posta: ${form.ownerEmail}%0A%0A` +
      `📅 Randevu Detayları:%0ATarih: ${form.date}%0ASaat: ${form.time}%0ANeden: ${form.reason}%0A%0A` +
      `📝 Ek Bilgi: ${form.notes || 'Yok'}`;
    window.open(`https://wa.me/905548550590?text=${text}`, '_blank');
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Randevu', href: '/randevu' }]} />

      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Online Randevu</h1>
            <p className="text-lg text-primary-100">Hızlı ve kolay randevu oluşturun</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: '⚡', title: 'Aynı Gün Randevu', desc: 'Müsait saatlerde aynı gün randevu' },
              { icon: '💬', title: 'Ücretsiz Danışma', desc: 'İlk danışma ücretsizdir' },
              { icon: '🐾', title: 'Tüm Türler', desc: 'Her tür hayvan için hizmet' },
            ].map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <div className="bg-primary-50 rounded-xl p-5 text-center border border-primary-100">
                  <div className="text-3xl mb-2">{c.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-600">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Form */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Animal Info */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">🐾 Hayvan Bilgileri</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hayvan Adı *</label>
                      <input type="text" required value={form.animalName} onChange={(e) => setForm({ ...form, animalName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="Örn: Pamuk" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hayvan Türü *</label>
                      <select required value={form.animalType} onChange={(e) => setForm({ ...form, animalType: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
                        <option value="">Seçin</option>
                        {animalTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Yaş</label>
                      <input type="text" value={form.animalAge} onChange={(e) => setForm({ ...form, animalAge: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="Örn: 2 yaş" />
                    </div>
                  </div>
                </div>

                {/* Owner Info */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">👤 Sahip Bilgileri</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad *</label>
                      <input type="text" required value={form.ownerName} onChange={(e) => setForm({ ...form, ownerName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="Adınız Soyadınız" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                      <input type="email" value={form.ownerEmail} onChange={(e) => setForm({ ...form, ownerEmail: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="ornek@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                      <input type="tel" required value={form.ownerPhone} onChange={(e) => setForm({ ...form, ownerPhone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="05XX XXX XX XX" />
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">📅 Randevu Detayları</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tarih *</label>
                      <input type="date" required min={today} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value, time: '' })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Saat Aralığı *</label>
                      <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
                        <option value="">Seçin</option>
                        {availableSlots.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Randevu Nedeni *</label>
                      <select required value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
                        <option value="">Seçin</option>
                        {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ek Bilgi</label>
                    <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none" placeholder="Varsa ek bilgi yazabilirsiniz..." />
                  </div>
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg shadow-accent-500/25 text-lg">
                  WhatsApp ile Randevu Oluştur
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
