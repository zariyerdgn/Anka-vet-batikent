import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import AuthorBox from '@/components/AuthorBox';
import ShareButton from '@/components/ShareButton';
import RelatedBlogPosts from '@/components/RelatedBlogPosts';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const blogData: Record<string, { title: string; content: string; emoji: string; category: string; date: string; readTime: string; author: string; excerpt: string }> = {
  'kopeklerde-asi-takvimi': { title: 'Köpeklerde Aşı Takvimi: 2025 Güncel Rehber', content: `Köpeğinizin sağlığını korumak için düzenli aşılama programına uyulması çok önemlidir.\n\n## Yavru Köpek Aşı Takvimi\n\n- 6-8 Hafta: İlk karma aşı\n- 10-12 Hafta: İkinci karma aşı\n- 14-16 Hafta: Üçüncü karma aşı + Kuduz\n- 6 Ay: Rapel aşılar\n\n## Yetişkin Köpek Aşıları\n\nYılda bir kez karma ve kuduz aşısı yaptırılmalıdır.\n\n## Önemli Notlar\n\n- Aşı öncesi parazit kontrolü yapılmalıdır\n- Hasta veya hamile köpeklere aşı uygulanmamalıdır\n- Aşı sonrası 24-48 saat gözlem gereklidir`, emoji: '🐕', category: 'Köpek', date: '2024-11-28', readTime: '6 dk', author: 'Dr. Özge Yıldırım', excerpt: 'Yavru ve yetişkin köpeklerde uygulanması gereken aşılar ve takvimi hakkında bilgiler.' },
  'kedilerde-beslenme': { title: 'Kedilerde Doğru Beslenme: Sağlıklı Mama Seçimi', content: `Kediler zorunlu karnivor hayvanlardır ve protein ağırlıklı beslenmeye ihtiyaç duyarlar.\n\n## Yaşa Göre Beslenme\n\n### Yavru Kedi (0-12 ay)\n- Yüksek proteinli yavru maması\n- Günde 3-4 öğün\n\n### Yetişkin Kedi (1-7 yaş)\n- Dengeli yetişkin maması\n- Günde 2 öğün\n\n### Yaşlı Kedi (7+ yaş)\n- Düşük kalorili, eklem destekli mama\n\n## Dikkat Edilmesi Gerekenler\n\n- Temiz su her zaman ulaşılabilir olmalı\n- İnsan yemekleri verilmemeli\n- Ani mama değişikliklerinden kaçınılmalı`, emoji: '🐱', category: 'Kedi', date: '2024-11-20', readTime: '7 dk', author: 'Dr. Emel Eda Şahin', excerpt: 'Kedilerin yaşlarına ve ihtiyaçlarına göre doğru beslenme ve mama seçimi rehberi.' },
  'kis-aylarinda-evcil-hayvan-bakimi': { title: 'Kış Aylarında Evcil Hayvan Bakımı', content: `Kış aylarında evcil hayvanlarınızın sağlığını korumak için ekstra önlemler almanız gerekir.\n\n## Soğuktan Koruma\n\n- Kısa tüylü ırklar için kıyafet kullanın\n- Dış mekanda barınak sağlayın\n- Pati bakımına dikkat edin\n\n## Beslenme\n\n- Soğuk havalarda kalori ihtiyacı artar\n- Taze su erişimini sağlayın\n\n## Sağlık Kontrolleri\n\n- Kış öncesi check-up yaptırın\n- Aşılarını kontrol edin\n- Parazit korumasına devam edin`, emoji: '❄️', category: 'Genel', date: '2024-11-15', readTime: '5 dk', author: 'Dr. Özge Yıldırım', excerpt: 'Soğuk havalarda evcil hayvanlarınızı korumak için almanız gereken önlemler.' },
  'kopeklerde-dis-sagligi': { title: 'Köpeklerde Diş Sağlığı ve Bakımı', content: `Köpeklerde diş sağlığı genel sağlığın önemli bir göstergesidir.\n\n## Diş Hastalıkları\n\n- Diş taşı oluşumu\n- Diş eti iltihabı\n- Diş çürükleri\n- Ağız kokusu\n\n## Koruyucu Önlemler\n\n- Haftada 2-3 kez diş fırçalama\n- Diş bakım ürünleri kullanma\n- Çiğneme oyuncakları sağlama\n- Düzenli veteriner kontrolleri\n\n## Profesyonel Temizlik\n\nYılda en az bir kez profesyonel diş temizliği (detartraj) yaptırılmalıdır.`, emoji: '🦷', category: 'Köpek', date: '2024-11-08', readTime: '6 dk', author: 'Dr. Emel Eda Şahin', excerpt: 'Köpeklerde diş taşı, diş eti hastalıkları ve ağız bakımı hakkında kapsamlı bilgi.' },
  'kedilerde-stres-belirtileri': { title: 'Kedilerde Stres Belirtileri ve Çözüm Yolları', content: `Kediler strese karşı hassas hayvanlardır ve stres belirtilerini tanımak önemlidir.\n\n## Stres Belirtileri\n\n- Aşırı tüy dökme\n- İştahsızlık veya aşırı yeme\n- Saklanma davranışı\n- Saldırganlık\n- Uygunsuz tuvaleti\n\n## Çözüm Önerileri\n\n- Sakin ve düzenli bir ortam sağlayın\n- Yüksekte tırmanma alanları oluşturun\n- Oyun zamanı ayırın\n- Feliway gibi feromonlar kullanın`, emoji: '😿', category: 'Kedi', date: '2024-10-30', readTime: '7 dk', author: 'Dr. Emel Eda Şahin', excerpt: 'Kedinizin stresli olduğunu nasıl anlarsınız? Stres kaynaklarını ve çözüm önerilerini keşfedin.' },
  'yavru-kopek-egitimi': { title: 'Yavru Köpek Eğitimi: İlk Adımlar', content: `Yavru köpek eğitimi, erken dönemde başladığında en iyi sonuçları verir.\n\n## Temel Eğitim\n\n- Tuvalet eğitimi\n- Otur, bekle, gel komutları\n- Tasma eğitimi\n- Sosyalleşme\n\n## İpuçları\n\n- Pozitif pekiştirme kullanın\n- Tutarlı olun\n- Kısa seanslar halinde çalışın\n- Sabırlı olun`, emoji: '🐶', category: 'Köpek', date: '2024-10-22', readTime: '8 dk', author: 'Dr. Özge Yıldırım', excerpt: 'Yavru köpeğinizi eğitirken dikkat etmeniz gereken temel konular ve pratik ipuçları.' },
  'kuslarda-tuy-dokulmesi': { title: 'Kuşlarda Tüy Dökülmesi: Nedenleri ve Tedavisi', content: `Kuşlarda tüy dökülmesi normal bir süreç olabilir, ancak bazen bir sağlık sorununa işaret eder.\n\n## Normal Tüy Değişimi\n\nKuşlar yılda 1-2 kez tüy değiştirir. Bu normal bir süreçtir.\n\n## Anormal Tüy Dökülmesi Nedenleri\n\n- Beslenme eksiklikleri\n- Stres\n- Parazitler\n- Hormonal bozukluklar\n- Mantar enfeksiyonları\n\n## Tedavi\n\nAnormal tüy dökülmesi durumunda mutlaka veteriner hekime başvurulmalıdır.`, emoji: '🦜', category: 'Genel', date: '2024-10-15', readTime: '5 dk', author: 'Dr. Emel Eda Şahin', excerpt: 'Kuşlarda tüy dökülmesinin yaygın nedenleri, önleme yöntemleri ve tedavi seçenekleri.' },
  'evcil-hayvanlarda-obezite': { title: 'Evcil Hayvanlarda Obezite: Görünmez Tehlike', content: `Obezite, evcil hayvanlarda ciddi sağlık sorunlarına yol açabilir.\n\n## Obezite Riskleri\n\n- Eklem problemleri\n- Diyabet\n- Kalp hastalıkları\n- Karaciğer yağlanması\n- Ömür kısalması\n\n## Kilo Kontrolü\n\n- Porsiyon kontrolü yapın\n- Düzenli egzersiz sağlayın\n- Atıştırmalıkları sınırlayın\n- Veteriner kontrolünde diyet programı uygulayın`, emoji: '⚖️', category: 'Genel', date: '2024-10-08', readTime: '6 dk', author: 'Dr. Özge Yıldırım', excerpt: 'Evcil hayvanlarda obezite riskleri, belirtileri ve sağlıklı kilo yönetimi önerileri.' },
  'kedilerde-tirnak-bakimi': { title: 'Kedilerde Tırnak Bakımı Nasıl Yapılır?', content: `Kedi tırnak bakımı, hem kedinizin hem de ev eşyalarınızın korunması için önemlidir.\n\n## Tırnak Kesimi\n\n- 2-3 haftada bir kontrol edin\n- Sadece şeffaf kısmı kesin\n- Özel kedi tırnak makası kullanın\n- Sakin bir ortamda yapın\n\n## Tırnak Tahtası\n\n- Çeşitli tırmalama tahtaları sağlayın\n- Kedinin tercih ettiği yüzeyi keşfedin\n\n## Dikkat\n\nTırnak bakımında kendinizi güvende hissetmiyorsanız veterinerinize başvurun.`, emoji: '✂️', category: 'Kedi', date: '2024-10-01', readTime: '4 dk', author: 'Dr. Emel Eda Şahin', excerpt: 'Kedilerde tırnak kesimi ve bakımı hakkında bilmeniz gereken her şey.' },
};

const allPosts = Object.entries(blogData).map(([slug, data]) => ({
  slug,
  title: data.title,
  excerpt: data.excerpt,
  emoji: data.emoji,
  category: data.category,
}));

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) return { title: 'Blog Yazısı Bulunamadı' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article', locale: 'tr_TR' },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) notFound();

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${slug}` }]} />

      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-white text-sm mb-4">
              {post.emoji} {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ overflowWrap: 'break-word' }}>{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-primary-100 text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} okuma</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-6">
              <ShareButton title={post.title} url={`https://batikentveteriner.com/blog/${slug}`} />
            </div>

            <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-600">
              {post.content.split('\n\n').map((para, i) => {
                if (para.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{para.replace('## ', '')}</h2>;
                if (para.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold text-gray-900 mt-6 mb-3">{para.replace('### ', '')}</h3>;
                if (para.startsWith('- ')) return (
                  <ul key={i} className="space-y-2 my-4">
                    {para.split('\n').map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
                return <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>;
              })}
            </article>

            <div className="mt-12 space-y-8">
              <AuthorBox />
              <RelatedBlogPosts currentSlug={slug} posts={allPosts} />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
