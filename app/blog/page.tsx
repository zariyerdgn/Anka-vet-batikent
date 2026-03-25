'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BlogFilter from '@/components/BlogFilter';
import PawPattern from '@/components/PawPattern';

const blogPosts = [
  {
    slug: 'kopeklerde-parvovirus-tedavisi',
    title: 'Köpeklerde Parvovirüs: Belirtileri, Teşhisi ve Tedavi Süreci',
    excerpt: 'Parvovirüs, özellikle yavru köpeklerde ölümcül olabilen tehlikeli bir viral enfeksiyondur. Erken teşhis ve doğru tedavi yaklaşımıyla hayat kurtarılabilir.',
    category: 'Köpek',
    date: '2026-03-10',
    readTime: '12 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
  },
  {
    slug: 'kedilerde-bobrek-yetmezligi',
    title: 'Kedilerde Kronik Böbrek Yetmezliği: Tanıdan Tedaviye Kapsamlı Rehber',
    excerpt: 'Yaşlı kedilerde sık görülen kronik böbrek yetmezliği, erken teşhis ve doğru yönetimle kontrol altına alınabilir.',
    category: 'Kedi',
    date: '2026-03-05',
    readTime: '14 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
  },
  {
    slug: 'veteriner-cerrahide-ortopedik-yaklasimlar',
    title: 'Veteriner Cerrahide Ortopedik Yaklaşımlar: Kırık Tedavisinden Proteze',
    excerpt: 'Evcil hayvanlarda kırık, çıkık ve eklem hastalıklarının cerrahi tedavisinde modern yaklaşımlar ve iyileşme süreci hakkında kapsamlı bilgi.',
    category: 'Köpek',
    date: '2026-02-25',
    readTime: '15 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
  },
  {
    slug: 'evcil-hayvanlarda-anestezi-guvenligi',
    title: 'Evcil Hayvanlarda Anestezi Güvenliği: Bilmeniz Gereken Her Şey',
    excerpt: 'Ameliyat öncesi anestezi uygulaması, riskleri, güvenlik önlemleri ve modern anestezi yöntemleri hakkında sahiplerin bilmesi gerekenler.',
    category: 'Genel',
    date: '2026-02-18',
    readTime: '11 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
  },
  {
    slug: 'kopeklerde-kalp-hastaliklari',
    title: 'Köpeklerde Kalp Hastalıkları: Belirtiler, Tanı ve Yaşam Kalitesi',
    excerpt: 'Köpeklerde sık görülen kalp hastalıkları, erken uyarı işaretleri ve tedavi seçenekleri hakkında detaylı bilgi.',
    category: 'Köpek',
    date: '2026-02-10',
    readTime: '13 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
  },
  {
    slug: 'yurt-disi-cikis-islemleri',
    title: 'Evcil Hayvanlarla Yurt Dışı Çıkış İşlemleri: 2026 Rehberi',
    excerpt: 'Evcil hayvanınızla yurt dışına seyahat ederken gerekli belgeler, aşılar, mikroçip ve gümrük prosedürleri hakkında detaylı bilgi.',
    category: 'Genel',
    date: '2026-01-10',
    readTime: '10 dk',
    author: 'Uzm. Vet. Hek. Özge Yıldırım',
  },
  {
    slug: 'kopeklerde-asi-takvimi',
    title: 'Köpeklerde Aşı Takvimi: 2026 Güncel Rehber',
    excerpt: 'Yavru ve yetişkin köpeklerde uygulanması gereken aşılar ve takvimi hakkında kapsamlı bilgiler.',
    category: 'Köpek',
    date: '2026-01-15',
    readTime: '6 dk',
    author: 'Uzm. Vet. Hek. Özge Yıldırım',
  },
  {
    slug: 'kedilerde-beslenme',
    title: 'Kedilerde Doğru Beslenme: Sağlıklı Mama Seçimi',
    excerpt: 'Kedilerin yaşlarına ve ihtiyaçlarına göre doğru beslenme ve mama seçimi rehberi.',
    category: 'Kedi',
    date: '2024-11-20',
    readTime: '7 dk',
    author: 'Vet. Hek. Emel Eda Şahin',
  },
  {
    slug: 'kis-aylarinda-evcil-hayvan-bakimi',
    title: 'Kış Aylarında Evcil Hayvan Bakımı',
    excerpt: 'Soğuk havalarda evcil hayvanlarınızı korumak için almanız gereken önlemler ve kış bakım önerileri.',
    category: 'Genel',
    date: '2024-11-15',
    readTime: '5 dk',
    author: 'Uzm. Vet. Hek. Özge Yıldırım',
  },
  {
    slug: 'kopeklerde-dis-sagligi',
    title: 'Köpeklerde Diş Sağlığı ve Bakımı',
    excerpt: 'Köpeklerde diş taşı, diş eti hastalıkları ve ağız bakımı hakkında kapsamlı bilgi.',
    category: 'Köpek',
    date: '2024-11-08',
    readTime: '6 dk',
    author: 'Vet. Hek. Emel Eda Şahin',
  },
  {
    slug: 'kedilerde-stres-belirtileri',
    title: 'Kedilerde Stres Belirtileri ve Çözüm Yolları',
    excerpt: 'Kedinizin stresli olduğunu nasıl anlarsınız? Stres kaynaklarını ve çözüm önerilerini keşfedin.',
    category: 'Kedi',
    date: '2024-10-30',
    readTime: '7 dk',
    author: 'Vet. Hek. Emel Eda Şahin',
  },
  {
    slug: 'yavru-kopek-egitimi',
    title: 'Yavru Köpek Eğitimi: İlk Adımlar',
    excerpt: 'Yavru köpeğinizi eğitirken dikkat etmeniz gereken temel konular ve pratik ipuçları.',
    category: 'Köpek',
    date: '2024-10-22',
    readTime: '8 dk',
    author: 'Uzm. Vet. Hek. Özge Yıldırım',
  },
  {
    slug: 'kuslarda-tuy-dokulmesi',
    title: 'Kuşlarda Tüy Dökülmesi: Nedenleri ve Tedavisi',
    excerpt: 'Kuşlarda tüy dökülmesinin yaygın nedenleri, önleme yöntemleri ve tedavi seçenekleri.',
    category: 'Genel',
    date: '2024-10-15',
    readTime: '5 dk',
    author: 'Vet. Hek. Emel Eda Şahin',
  },
  {
    slug: 'evcil-hayvanlarda-obezite',
    title: 'Evcil Hayvanlarda Obezite: Görünmez Tehlike',
    excerpt: 'Evcil hayvanlarda obezite riskleri, belirtileri ve sağlıklı kilo yönetimi önerileri.',
    category: 'Genel',
    date: '2024-10-08',
    readTime: '6 dk',
    author: 'Uzm. Vet. Hek. Özge Yıldırım',
  },
  {
    slug: 'kedilerde-tirnak-bakimi',
    title: 'Kedilerde Tırnak Bakımı Nasıl Yapılır?',
    excerpt: 'Kedilerde tırnak kesimi ve bakımı hakkında bilmeniz gereken her şey.',
    category: 'Kedi',
    date: '2024-10-01',
    readTime: '4 dk',
    author: 'Vet. Hek. Emel Eda Şahin',
  },
];

const categories = ['Tümü', 'Köpek', 'Kedi', 'Genel'];

export default function BlogPage() {
  const [active, setActive] = useState('Tümü');
  const filtered = active === 'Tümü' ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <PawPattern className="text-white opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
            <p className="text-lg text-primary-100">Hayvan sağlığı ve bakımı hakkında faydalı bilgiler</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <PawPattern className="text-primary-300" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <BlogFilter categories={categories} active={active} onChange={setActive} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">{post.category}</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">{post.title}</h2>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
