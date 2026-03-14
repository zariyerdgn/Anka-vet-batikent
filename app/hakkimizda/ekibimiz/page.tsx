import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Ekibimiz - Uzman Veteriner Hekim Kadromuz',
  description:
    'Anka Veteriner Kliniği Batıkent uzman veteriner hekim kadrosu. Uzm. Vet. Hek. İbrahim Yıldırım, Uzm. Vet. Hek. Özge Yıldırım, Vet. Hek. Emel Eda Şahin.',
};

const team = [
  {
    name: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    role: 'Kurucu Hekim / Başhekim',
    image: '/images/team/ibrahim-yildirim.jpeg',
    specialties: ['Veteriner Cerrahisi', 'Küçük Hayvan Tedavisi', 'Ortopedik Cerrahi', 'Tanı ve Cerrahi'],
    bio: '1990 doğumlu olan İbrahim Yıldırım, ortaöğretim eğitimine 2005 yılında Çankırı Fen Lisesi\'nde başlamış, eğitimine Kırıkkale Fen Lisesi\'nde devam ederek 2009 yılında mezun olmuştur. 2010 yılında Afyon Kocatepe Üniversitesi Veteriner Fakültesi\'nde veteriner hekimlik eğitimine başlamış ve 2015 yılında mezun olarak meslek hayatına adım atmıştır. Mesleki bilgi ve becerilerini geliştirmek amacıyla akademik çalışmalarını sürdürerek 2025 yılında Veteriner Cerrahisi alanında yüksek lisans eğitimini tamamlamıştır. Veteriner hekimlik mesleğini bilimsel yaklaşım, etik değerler ve hayvan refahı ilkeleri doğrultusunda icra etmeyi ilke edinmiştir. O günden bu yana Anka Veteriner Kliniği bünyesinde görev yapmakta; evcil hayvanların tanı, tedavi ve cerrahi süreçlerinde hizmet vererek hayvan dostlarımızın sağlığı için çalışmalarını sürdürmektedir.',
    education: 'Afyon Kocatepe Üniversitesi Veteriner Fakültesi\nVeteriner Cerrahisi Yüksek Lisans (2025)',
    experience: '11+ Yıl',
    color: 'primary',
  },
  {
    name: 'Uzm. Vet. Hek. Özge Yıldırım',
    role: 'Uzman Veteriner Hekim & Kurucu Ortak',
    image: '/images/team/ozge-yildirim.jpeg',
    specialties: ['Fizyoloji', 'İç Hastalıkları', 'Kardiyoloji', 'Ultrasonografi'],
    bio: '2014 yılında Afyon Kocatepe Üniversitesi Veteriner Fakültesi\'nden mezun olan Özge Yıldırım, üniversite eğitimi boyunca bilimin güncel gelişmelerini yakından takip ederek hem teorik hem de pratik eğitimin önemine inanmıştır. Lisans eğitiminin başlangıcından itibaren çeşitli profesyonel hayvan hastanelerinde staj yaparak mesleki deneyim kazanmıştır. Mezuniyetinin ardından özel sektörde ve farklı kliniklerde çalışarak mesleki tecrübesini geliştirmiş, daha sonra eşi İbrahim Yıldırım ile birlikte hayalini kurdukları Anka Veteriner Kliniği\'ni kurarak hizmet vermeye başlamıştır. Mesleki ilgi alanları arasında fizyoloji, iç hastalıkları, kardiyoloji ve ultrasonografi yer almaktadır. Bu alanlarda kendini sürekli geliştirmeye özen göstermekte, kongre, seminer ve eğitim programlarına düzenli olarak katılmaktadır. Meslek hayatının yanı sıra üç çocuk annesi olan Özge Hanım, sokaktan kurtardıkları dört kedileriyle birlikte yaşamaktadır. Kitap okumayı, müzik dinlemeyi, doğada vakit geçirmeyi ve hayvanlarla ilgilenmeyi çok sevmektedir.',
    education: 'Afyon Kocatepe Üniversitesi Veteriner Fakültesi (2014)',
    experience: '12+ Yıl',
    color: 'secondary',
  },
  {
    name: 'Vet. Hek. Emel Eda Şahin',
    role: 'Veteriner Hekim',
    image: '/images/team/emel-eda-sahin.jpeg',
    specialties: ['Klinik Uygulama', 'Koruyucu Hekimlik', 'Aşılama Programları', 'İç Hastalıkları', 'Laboratuvar'],
    bio: '2001 yılında Ankara\'da doğan Emel Eda Şahin, ilkokul, ortaokul ve lise öğrenimlerini Ankara\'da tamamlamıştır. Hayvanlara olan sevgisi ve onlara yardım etme isteğiyle 2018 yılında Afyon Kocatepe Üniversitesi Veteriner Fakültesi\'ni tercih etmiştir. Eğitim hayatı boyunca sadece akademik başarıyla yetinmeyip mesleki topluluklarda da aktif rol almıştır. IVSA Afyon\'un kurucu ekibinde yer alarak hem kendi gelişimine hem de meslektaşlarının gelişimine katkıda bulunmuştur. Aynı zamanda TÜVECCA genç üyesi olarak birçok kongre ve seminere katılmıştır. Lisans eğitimi boyunca çeşitli kliniklerde ve hayvan hastanelerinde gönüllü ve zorunlu stajlar yaparak klinik saha tecrübesi edinmiştir. Mesleki yolculuğuna güncel tedavi yöntemlerini ve etik değerleri merkeze alarak devam etmektedir.',
    education: 'Afyon Kocatepe Üniversitesi Veteriner Fakültesi',
    experience: '3+ Yıl',
    color: 'accent',
  },
];

type ColorKey = 'primary' | 'secondary' | 'accent';

const colorMap: Record<
  ColorKey,
  { gradient: string; badge: string; border: string; iconBg: string; tag: string }
> = {
  primary: {
    gradient: 'from-primary-600 to-primary-800',
    badge: 'bg-primary-100 text-primary-700',
    border: 'border-primary-200',
    iconBg: 'bg-primary-50 text-primary-600',
    tag: 'bg-primary-100 text-primary-700',
  },
  secondary: {
    gradient: 'from-secondary-600 to-secondary-800',
    badge: 'bg-secondary-100 text-secondary-700',
    border: 'border-secondary-200',
    iconBg: 'bg-secondary-50 text-secondary-600',
    tag: 'bg-secondary-100 text-secondary-700',
  },
  accent: {
    gradient: 'from-accent-500 to-accent-700',
    badge: 'bg-accent-100 text-accent-700',
    border: 'border-accent-200',
    iconBg: 'bg-accent-50 text-accent-600',
    tag: 'bg-accent-100 text-accent-700',
  },
};

export default function EkibimizPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Hakkımızda', href: '/hakkimizda' },
          { name: 'Ekibimiz', href: '/hakkimizda/ekibimiz' },
        ]}
      />

      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-100 text-sm font-medium mb-6">
              Profesyonel Kadro
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Uzman <span className="text-accent-400">Ekibimiz</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Deneyimli ve uzman veteriner hekim kadromuz, evcil dostlarınızın sağlığı için
              en yüksek kalitede hizmet sunmaktadır.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Members - Alternating Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {team.map((member, i) => {
            const colors = colorMap[member.color as ColorKey];
            const isReversed = i % 2 !== 0;
            return (
              <AnimatedSection key={member.name} delay={0.1}>
                <div
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center mb-20 last:mb-0`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-5/12">
                    <div className="relative group">
                      <div
                        className={`absolute -inset-4 bg-gradient-to-r ${colors.gradient} rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                      />
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1 ${colors.badge} rounded-full text-xs font-semibold backdrop-blur-sm`}
                          >
                            {member.experience} Deneyim
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="w-full lg:w-7/12">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 ${colors.badge} rounded-full text-sm font-medium mb-4`}
                    >
                      {member.role}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {member.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">{member.bio}</p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div
                        className={`flex items-center gap-3 p-4 rounded-xl ${colors.iconBg} border ${colors.border}`}
                      >
                        <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Eğitim</p>
                          <p className="text-sm font-semibold text-gray-800">
                            {member.education}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`flex items-center gap-3 p-4 rounded-xl ${colors.iconBg} border ${colors.border}`}
                      >
                        <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Deneyim</p>
                          <p className="text-sm font-semibold text-gray-800">
                            {member.experience}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-3">
                        Uzmanlık Alanları
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((spec) => (
                          <span
                            key={spec}
                            className={`px-3 py-1.5 ${colors.tag} rounded-lg text-xs font-medium`}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Quick Cards Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Hekimlerimize Hızlı Bakış
              </h2>
              <p className="mt-3 text-gray-600">
                3 uzman hekim, tek bir amaç: Evcil dostlarınızın sağlığı
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => {
              const colors = colorMap[member.color as ColorKey];
              return (
                <AnimatedSection key={`card-${member.name}`} delay={i * 0.15}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group h-full">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-40`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800">
                          {member.experience}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary-200 text-sm font-medium">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {member.specialties.slice(0, 3).map((spec) => (
                          <span
                            key={spec}
                            className={`px-2 py-1 ${colors.tag} rounded-md text-[11px] font-medium`}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uzman Ekibimizle Tanışın
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Evcil dostunuzun sağlığı için hemen randevu alın. Deneyimli hekim kadromuz
              sizin için burada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/randevu"
                className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg text-lg hover:shadow-xl"
              >
                Randevu Al
              </Link>
              <Link
                href="/iletisim"
                className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-all border border-primary-200 text-lg shadow-md hover:shadow-lg"
              >
                İletişim
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
