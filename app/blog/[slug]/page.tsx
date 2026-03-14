import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import AuthorBox from '@/components/AuthorBox';
import ShareButton from '@/components/ShareButton';
import RelatedBlogPosts from '@/components/RelatedBlogPosts';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const blogData: Record<string, { title: string; content: string; category: string; date: string; readTime: string; author: string; excerpt: string }> = {
  'kopeklerde-parvovirus-tedavisi': {
    title: 'Köpeklerde Parvovirüs: Belirtileri, Teşhisi ve Tedavi Süreci',
    content: `Parvovirüs (CPV-2), özellikle aşılanmamış yavru köpeklerde yüksek ölüm oranına sahip, son derece bulaşıcı bir viral enfeksiyondur. Uzm. Vet. Hek. İbrahim Yıldırım olarak, kliniğimizde yılda onlarca parvovirüs vakası ile karşılaşıyoruz ve erken müdahale ile başarılı sonuçlar alıyoruz.

## Parvovirüs Nedir?

Canine Parvovirus (CPV-2), köpeklerin bağırsak epitel hücrelerini ve kemik iliğini hedef alan, çevresel koşullara son derece dayanıklı bir virüstür. Virüs, enfekte köpeğin dışkısı yoluyla yayılır ve uygun koşullarda aylarca canlı kalabilir.

## Belirtileri

- Şiddetli, kanlı ishal (karakteristik koku)
- Kusma, sıvı alamama
- Yüksek ateş (39.5-41°C)
- İştahsızlık ve hızlı kilo kaybı
- Letarji, halsizlik ve depresyon
- Karın ağrısı ve şişkinlik
- Dehidratasyon belirtileri (göz çöküklüğü, deri elastikiyet kaybı)
- Ağır vakalarda septik şok

## Risk Faktörleri

- 6 hafta - 6 ay arası yavru köpekler en yüksek risk grubundadır
- Aşılanmamış veya eksik aşılı köpekler
- Rottweiler, Doberman, Alman Çoban Köpeği gibi ırklar genetik olarak daha yatkındır
- Bağışıklık sistemi zayıf olan hayvanlar
- Kalabalık barınaklarda yaşayan köpekler

## Teşhis Yöntemleri

### Hızlı Antijen Testi (SNAP Testi)
Kliniğimizde 10 dakika içinde sonuç veren SNAP testi ile parvovirüsü yüksek doğruluk oranıyla tespit edebiliyoruz.

### Kan Tahlili (Hemogram)
- Lökopeni (özellikle nötropeni): Bağışıklık sisteminin baskılanmasını gösterir
- Hematokrit değerleri: Dehidratasyon derecesini belirler
- Biyokimya paneli: Organ fonksiyonlarını değerlendirir

### PCR Testi
Şüpheli vakalarda kesin tanı için dışkıdan PCR testi yapılabilir.

## Tedavi Protokolü

Parvovirüs için spesifik bir antiviral ilaç bulunmadığından, tedavi destek tedavisi şeklindedir:

### 1. Sıvı Tedavisi (Kritik Önem)
- İntavenöz (IV) kristaloid sıvılar (Ringer Laktat, %0.9 NaCl)
- Elektrolit dengesinin düzeltilmesi (potasyum, sodyum)
- Kolloid sıvılar (ağır hipoproteinemi durumunda)

### 2. Antiemetik Tedavi
- Maropitant (Cerenia): Kusma kontrolü için altın standart
- Ondansetron: İlave antiemetik olarak

### 3. Antibiyotik Tedavisi
- Ampisilin-sulbaktam veya sefazolin: Sekonder bakteriyel enfeksiyonlara karşı
- Metronidazol: Anaerobik bakterilere karşı, bağırsak duvarı koruması

### 4. Beslenme Desteği
- Erken entereal beslenme (12-24 saat içinde)
- Yüksek sindirilebilirliğe sahip gastrointestinal diyetler
- Gerekirse parenteral beslenme

### 5. Ağrı Yönetimi
- Buprenorfin veya metadon: Karın ağrısı kontrolü
- NSAID’ler dehidratasyon düzelinceye kadar kaçınılmalıdır

## Prognoz

- Tedavi edilmeyen vakalarda ölüm oranı: %91’e kadar
- Erken ve agresif tedavi ile hayatta kalma oranı: %80-95
- Tedaviye başlangıçtan itibaren ilk 72 saat kritik öneme sahiptir
- İyileşme süreci genellikle 5-10 gün sürer

## Korunma

- **Aşılama**: En etkili korunma yöntemidir. 6-8 haftadan itibaren 3-4 hafta aralıklarla 3 doz
- **Hijyen**: Enfekte bölgelerin %1’lik sodyum hipoklorit ile dezenfeksiyonu
- **Karantina**: Enfekte hayvanların izolasyonu
- **Anne sütü**: Yavru köpeklerin anne sütünden yeterli antikor almalarının sağlanması

Anka Veteriner Kliniği olarak 7/24 acil hizmetimizle parvovirüs şüphesi olan hastalarımıza hızlı müdahale imkanı sunuyoruz.`,
    category: 'Köpek',
    date: '2025-03-10',
    readTime: '12 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Parvovirüs, özellikle yavru köpeklerde ölümcül olabilen tehlikeli bir viral enfeksiyondur.',
  },
  'kedilerde-bobrek-yetmezligi': {
    title: 'Kedilerde Kronik Böbrek Yetmezliği: Tanıdan Tedaviye Kapsamlı Rehber',
    content: `Kronik böbrek hastalığı (KBH), 7 yaş üstü kedilerin yaklaşık %30-40’ında görülen, ilerleyici bir hastalıktır. Uzm. Vet. Hek. İbrahim Yıldırım olarak, bu yazıda kedilerde kronik böbrek yetmezliğinin tüm yönlerini ele alacağız.

## Böbreklerin Görevi

Böbrekler, vücuttaki atık ürünlerin filtrelenmesi, sıvı-elektrolit dengesinin korunması, kan basıncının düzenlenmesi ve eritropoetin hormonunun üretimi gibi hayati görevler üstlenir. Nefronların %75’i hasar görünceye kadar belirgin klinik belirtiler ortaya çıkmaz.

## Evreleme (IRIS Sınıflandırması)

### Evre 1 (Hafif)
- Kreatinin: <1.6 mg/dL
- Belirtiler minimal, sadece idrar yoğunluğunda azalma
- Erken teşhis için SDMA testi kritik önemdedir

### Evre 2 (Hafif-Orta)
- Kreatinin: 1.6-2.8 mg/dL
- Hafif polidipsi (aşırı su içme) ve poliüri
- İştah değişikliği başlayabilir

### Evre 3 (Orta-Ağır)
- Kreatinin: 2.9-5.0 mg/dL
- Belirgin kilo kaybı, kusma, dehidratasyon
- Anemi gelişebilir

### Evre 4 (Ağır - Son Dönem)
- Kreatinin: >5.0 mg/dL
- Üremik sendrom: Ağız yaraları, kusma, nörolojik belirtiler
- Yaşam kalitesi ciddi şekilde etkilenir

## Belirtiler

- Aşırı su içme ve sık idrara çıkma
- İştah kaybı ve kilo kaybı
- Kusma ve bulantı
- Halsizlik ve aktivite azalması
- Kötü deri ve kürk kalitesi
- Ağız kokusu (üremik koku)
- Kabuklu ağız yaraları
- Anemi belirtileri (soluk mukozalar)

## Teşhis

### Kan Tahlili
- BUN (Kan Üre Azotu) ve Kreatinin: Böbrek fonksiyonunun temel göstergeleri
- SDMA: Böbrek hastalığını kreatininden önce tespit eder
- Fosfor, kalsiyum, potasyum düzeyleri
- Tam kan sayımı (anemi değerlendirmesi)

### İdrar Tahlili
- İdrar yoğunluğu (USG <1.035 kediler için anormal)
- Protein/kreatinin oranı (proteinüri değerlendirmesi)
- Sediment incelemesi

### Görüntüleme
- Ultrasonografi: Böbrek boyutu, yapısı, taş varlığı
- Röntgen: Böbrek boyutu, kalsifikasyon

## Tedavi ve Yönetim

### Diyet Yönetimi
- Renal diyetler: Düşük fosfor, düşük-orta protein
- Hill’s k/d, Royal Canin Renal gibi reçeteli mamalar
- Omega-3 yağ asitleri ile destekleme

### Sıvı Tedavisi
- Evde subcutan sıvı uygulaması (sahiplere eğitim verilir)
- Klinikte intavenöz sıvı tedavisi (ağır vakalarda)

### İlaç Tedavisi
- Fosfor bağlayıcılar (Aluminyum hidroksit)
- ACE inhibitörleri (Benazepril): Proteinüri ve hipertansiyon kontrolü
- Antiemetikler (kusma kontrolü)
- Eritropoetin (ağır anemide)
- Potasyum takviyesi (hipokalemi durumunda)

### Takip
- Her 3-6 ayda bir kan ve idrar tahlili
- Kan basıncı ölçümü
- Vücut ağırlığı takibi

## Yaşam Kalitesi ve Beklentisi

Erken evre teşhis ve uygun yönetimle kediler yıllarca kaliteli yaşam sürebilir. Evre 2’de teşhis edilen kedilerin medyan yaşam süresi 3-4 yıl olabilirken, evre 4’te bu süre önemli ölçüde kısalır. Düzenli veteriner kontrolleri ve uygun tedavi yaşam kalitesini belirgin şekilde artırır.

## Öneriler

- **7 yaş üstü kedilerinize yılda en az bir kez kan tahlili yaptırın**
- Temiz, taze suya her zaman erişim sağlayın
- Kaliteli, yaşa uygun mama kullanın
- İdrar alışkanlıklarındaki değişiklikleri takip edin

Anka Veteriner Kliniği’nde modern laboratuvar ekipmanlarımızla hızlı ve doğru tanı koyarak kedilerinizin sağlığını koruyoruz.`,
    category: 'Kedi',
    date: '2025-03-05',
    readTime: '14 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Yaşlı kedilerde sık görülen kronik böbrek yetmezliği, erken teşhis ve doğru yönetimle kontrol altına alınabilir.',
  },
  'veteriner-cerrahide-ortopedik-yaklasimlar': {
    title: 'Veteriner Cerrahide Ortopedik Yaklaşımlar: Kırık Tedavisinden Proteze',
    content: `Evcil hayvanlarda ortopedik sorunlar, yaşam kalitesini ciddi şekilde etkileyen durumlar arasındadır. Veteriner cerrahisi yüksek lisansımı tamamlamış bir cerrah olarak, bu alanda güncel yaklaşımları sizlerle paylaşmak istiyorum.

## Yaygın Ortopedik Problemler

### Köpeklerde
- Çapraz bağ (cranial cruciate ligament) yırtıkları
- Patella lükzasyonu
- Kalça displazisi
- Dirsek displazisi
- Kırıklar (travmatik)
- Legg-Calvé-Perthes hastalığı

### Kedilerde
- Yüksekten düşme kırıkları (“High-rise sendromu”)
- Pelvis kırıkları
- Femur kırıkları
- Kuyruk travmaları

## Kırık Tedavi Yöntemleri

### Konservatif (Cerrahi Dışı) Tedavi
- Alçı ve atel uygulaması
- Robert Jones bandajı
- Hareket kısıtlaması ve kafes dinlenmesi
- Genellikle stabil, yer değiştirmemiş kırıklarda tercih edilir

### Cerrahi Tedavi - İç Tespit
- **Plak-vida sistemi**: En yaygın yöntem. Kilit plaklar (LCP) anatomik redüksiyon sağlar
- **İntrameduller pin**: Uzun kemik kırıklarında iyi sonuçlar
- **Serklaş teli**: Yardımcı tespit yöntemi
- **Eksternal fiksasyon**: Açık kırıklar ve enfekte kırıklarda
- **Interlocking nail**: Uzun kemik kırıklarında rotasyonel stabilite

## Çapraz Bağ Yırtığı (TPLO/TTA)

Köpeklerde en sık karşılaşılan ortopedik sorunlardan biridir.

### TPLO (Tibial Plato Seviyeleme Osteotomisi)
- Altın standart tedavi yöntemi
- Tibial platonun açısı değiştirilerek dizin stabilizasyonu
- Başarı oranı %90’ın üzerinde

### TTA (Tibial Tuberosity Advancement)
- Tibial tüberositesin ilerletilmesi
- Daha az invaziv yaklaşım
- Hızlı iyileşme süreci

## Patella Lükzasyonu

- **Grade 1-2**: Konservatif tedavi veya minimal invaziv cerrahi
- **Grade 3-4**: Cerrahi düzeltme gerekli (trochlear sulcoplasti, tibial crest transpozisyonu)
- Küçük ırklarda daha yaygın
- Tedavi edilmezse artroz gelişir

## Kalça Displazisi

- FHO (Femoral Head Ostectomy): Ekonomik, etkili
- Total kalça protezi (THP): En iyi fonksiyonel sonuç
- JPS (Juvenil Pubik Simfiyodez): Erken dönemde önleyici cerrahi
- İyi yönetimle köpekler normal yaşam sürebilir

## Ameliyat Sonrası Bakım

- **Hareket kısıtlaması**: İlk 6-8 hafta kritik
- **Fizik tedavi**: Pasif ROM egzersizleri, yüzme terapisi
- **Ağrı yönetimi**: Multimodal analjezi
- **Beslenme**: Kalsiyum, D vitamini, glukozamin desteği
- **Kontrol röntgenleri**: 4, 8, 12. haftalarda

## Rehabilitasyon

Modern veteriner ortopedisinde cerrahi sonrası rehabilitasyon tedavinin ayrılmaz parçasıdır:

- Hidroterapi (özellikle su altı koşu bandı)
- Lazer tedavisi
- Elektrostimülasyon
- Masaj ve pasif hareketler
- Denge egzersizleri

## Sonuç

Anka Veteriner Kliniği olarak ortopedik cerrahide modern teknikler ve ekipmanlarla hizmet veriyoruz. Evcil dostuuzun hareket kabiliyetini geri kazanması için uzman ekibimiz yanınızdadır.`,
    category: 'Köpek',
    date: '2025-02-25',
    readTime: '15 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Evcil hayvanlarda kırık, çıkık ve eklem hastalıklarının cerrahi tedavisinde modern yaklaşımlar.',
  },
  'evcil-hayvanlarda-anestezi-guvenligi': {
    title: 'Evcil Hayvanlarda Anestezi Güvenliği: Bilmeniz Gereken Her Şey',
    content: `Evcil hayvanınızın ameliyat olması gerektiğinde, sahiplerin en çok endişe duyduğu konu anestezi güvenliğidir. Uzm. Vet. Hek. İbrahim Yıldırım olarak, anestezi süreci hakkında bilmeniz gereken her şeyi açıklıyorum.

## Anestezi Nedir?

Genel anestezi, hastanın bilinç, ağrı algısı ve kas tonusunun geçici olarak ortadan kaldırılmasıdır. Modern veteriner anestezisi, çok sayıda güvenlik protokolü ve ileri monitorizasyon ekipmanları ile yürütülür.

## Ameliyat Öncesi Değerlendirme

### Fizik Muayene
- Kalp ve akciğer oskultasyonu
- Mukoza rengi ve kapiller dolum zamanı
- Vücut kondisyon skoru
- Lenf nodları palpasyonu

### Laboratuvar Testleri
- Tam kan sayımı (CBC)
- Biyokimya paneli (karaciğer, böbrek fonksiyonları)
- Koagülasyon profili (gerekirse)
- Yaşlı hastalarda tiroid fonksiyon testleri

### ASA Sınıflandırması
Her hasta, anestezi riskine göre ASA I-V sınıflandırmasına tabi tutulur. Bu sınıflandırma, anestezi protokolünü belirlemede yol göstericidir.

## Anestezi Aşamaları

### 1. Premedikasyon
- Sedatif ve analjezik ilaçlar
- Anksiyete ve ağrıyı azaltır
- Ana anestezik ilaç ihtiyacını düşürür

### 2. İndüksiyon
- İntavenöz indüksiyon ajanları (propofol, alfaxalone)
- Hızlı ve kontrollü bilinç kaybı sağlar
- Entübasyon için uygun koşullar oluşturur

### 3. İdame (İnhaler Anestezi)
- İzofluran veya sevofluran kullanılır
- Anestezi derinliği hassas şekilde ayarlanabilir
- Solunum ve kardiyovasküler fonksiyonlar sürekli izlenir

### 4. Derlenme
- Anestezik gazların kesilmesi
- Yutkunma refleksi dönünce ekstübasyon
- Sıcaklık kontrolü ve yakın gözlem

## Monitorizasyon

Kliniğimizde ameliyat sırasında şu parametreler sürekli izlenir:

- Pulse oksimetri (SpO2): Oksijen satürasyonu
- Kapnografi (EtCO2): Solunum fonksiyonu
- EKG: Kalp ritmi
- Kan basıncı: İnvaziv/non-invaziv
- Vücut sıcaklığı
- Solunum hızı ve tidal volüm

## Risk Faktörleri

- Yaşlı hayvanlar (>8 yaş)
- Obez hayvanlar
- Brakisefal ırklar (Bulldog, Pug, Pekingese)
- Kalp veya solunum sistemi hastalıkları olan hastalar
- Karaciğer veya böbrek yetmezliği
- Acil ameliyatlar (hazarlıksız)

## Sahipler İçin Öneriler

- Ameliyattan 8-12 saat önce yem kesin, 2-4 saat önce su kesin
- Veterinerinize hayvanınızın tüm sağlık geçmişini aktarın
- Kullandığı ilaçları ve takviyeleri bildirin
- Ameliyat sonrası bakım talimatlarına uyun
- Derlenme sürecinde sıcak ve sakin bir ortam sağlayın

## Modern Anestezi Avantajları

Günümüzde veteriner anestezisi, 20 yıl öncesine kıyasla çok daha güvenlidir. Yeni ilaçlar, ileri monitorizasyon cihazları ve eğitimli personel sayesinde anestezi komplikasyonları minimum düzeye inmiştir.

Anka Veteriner Kliniği olarak, her hastanın bireysel risk profili değerlendirilerek kişiye özel anestezi protokolleri uygulanır.`,
    category: 'Genel',
    date: '2025-02-18',
    readTime: '11 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Ameliyat öncesi anestezi uygulaması, riskleri ve modern anestezi yöntemleri hakkında sahiplerin bilmesi gerekenler.',
  },
  'kopeklerde-kalp-hastaliklari': {
    title: 'Köpeklerde Kalp Hastalıkları: Belirtiler, Tanı ve Yaşam Kalitesi',
    content: `Kalp hastalıkları, köpeklerde özellikle orta yaş ve üzerinde sık karşılaşılan ciddi sağlık sorunlarıdır. Erken teşhis ve uygun tedavi ile köpeklerin yaşam kalitesi önemli ölçüde iyileştirilebilir.

## Köpeklerde Yaygın Kalp Hastalıkları

### Mitral Kapak Hastalığı (MVD)
- Küçük ırklarda en sık görülen kalp hastalığı
- Cavalier King Charles Spaniel, Chihuahua, Poodle gibi ırklar risk altında
- Kapak dejenerasyonu sonucu regürjitasyon (geri kaçış)
- Yaş ile prevalans artar

### Dilate Kardiyomiyopati (DCM)
- Büyük ırklarda yaygın (Doberman, Great Dane, Boxer)
- Kalp kasının zayıflaması ve genişlemesi
- Pompalama fonksiyonunun azalması
- İlerleyici ve ciddi bir hastalık

### Doğuştan Kalp Hastalıkları
- Patent duktus arteriozus (PDA)
- Pulmoner stenoz
- Aort stenozu
- Ventrikuler septal defekt

## Belirtiler

- Öksürük (özellikle geceleri veya egzersiz sonrası)
- Nefes darlığı ve hızlı solunum
- Egzersiz intoleransı
- Baygınlık (senkop)
- Karın şişliği (asit)
- Kilo kaybı ve kas erimesi
- Huzursuzluk, uyuyamama
- Mor-mavi mukozalar (siyanoz)

## Teşhis

### Oskultasyon
Kalp üfürümü ve ritim bozukluklarının tespiti

### Röntgen
- Kalp büyüklüğü değerlendirmesi (VHS ölçümü)
- Akciğer ödemi varlığı
- Plevral efüzyon

### Ekokardiyografi (Kalp Ultrasonografisi)
- Altın standart teşhis yöntemi
- Kalp odacıklarının boyutu
- Kapak fonksiyonları
- Kasılma gücü (ejeksiyon fraksiyonu)
- Kan akım hızı (Doppler)

### EKG
- Ritim bozukluklarının tespiti
- Atriyal fibrilasyon
- Ventriküler aritmi

### Kardiyak Biyomarkerlar
- NT-proBNP: Kalp yetmezliği tanısı
- Kardiyak troponin: Miyokard hasarı

## Tedavi

### İlaç Tedavisi
- **Pimobendan**: İnotropik ve vazodilatör etki, yaşam süresini uzatır
- **ACE inhibitörleri** (Enalapril, Benazepril): Afterload azaltma
- **Furosemid**: Ödem kontrolü, acil durumlarda hayat kurtarıcı
- **Spironolakton**: Aldosteron antagonisti
- **Digoksin**: Atriyal fibrilasyonda hız kontrolü
- **Atenolol/Diltiazem**: Antiaritmik tedavi

### Diyet
- Düşük sodyumlu diyetler
- Omega-3 yağ asitleri (EPA/DHA)
- Taurin ve L-karnitin takviyesi (DCM’de)
- Yeterli kalori alımının sağlanması

### Yaşam Tarzı Düzenleme
- Orta düzeyde düzenli egzersiz
- Stres faktörlerinin azaltılması
- Sıcak ve nemli ortamlardan kaçınma
- Düzenli veteriner kontrolleri

## Prognoz

- MVD: Erken evre teşhis ve pimobendan tedavisi ile yıllarca yaşam kalitesi korunabilir
- DCM: Daha ciddi prognoz, ancak tedavi ile semptomlar kontrol altına alınabilir
- Doğuştan defektler: Erken cerrahi düzeltme ile iyi prognoz mümkün

Anka Veteriner Kliniği’nde köpeğinizin kalp sağlığını düzenli kontrollerle takip ediyor, erken teşhis ve uygun tedavi ile yaşam kalitesini artırıyoruz.`,
    category: 'Köpek',
    date: '2025-02-10',
    readTime: '13 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Köpeklerde sık görülen kalp hastalıkları, erken uyarı işaretleri ve tedavi seçenekleri.',
  },
  'kedilerde-idrar-yolu-hastaliklari': {
    title: 'Kedilerde İdrar Yolu Hastalıkları (FLUTD): Acil Durum Rehberi',
    content: `Feline Lower Urinary Tract Disease (FLUTD), kedilerde alt üriner sistemi etkileyen hastalıkların genel adıdır. Özellikle erkek kedilerde idrar tıkanıklığı, acil müdahale gerektiren hayatı tehdit eden bir durumdur.

## FLUTD Nedir?

FLUTD, kedilerin mesane ve üretrasını etkileyen çeşitli hastalıkları kapsayan bir şemsiye terimdir:

- Feline İdiopatik Sistit (FIC) - %55-65
- Ürolityazis (İdrar taşı) - %15-25
- Üretral tıkanma - %10-20
- Bakteriyel enfeksiyon - %1-8
- Neoplazi (tümör) - %1-2

## Acil Belirtiler (İdrar Tıkanıklığı)

Aşağıdaki belirtileri görürseniz DERHAL veterinere gidin:

- Sık sık kum kabına gidip idrar yapamama
- Kum kabında ıkınma ve ağlama
- Karın bölgesine dokunulduğunda ağrı tepkisi
- Kusma ve iştahsızlık
- Letarji, hareketsizlik
- 24 saatten fazla idrar yapamama ÖLÜMCÜL olabilir

## Neden Acildir?

İdrar tıkanıklığı tedavi edilmezse:
- Mesane rüptürü (patlaması) riski
- Akut böbrek yetmezliği
- Hiperkalemi (yüksek potasyum) → Kalp durması
- Metabolik asidoz
- Ölüm (24-48 saat içinde)

## Teşhis

### Fizik Muayene
- Büyük, sert, ağrılı mesane palpasyonu
- Dehidratasyon değerlendirmesi

### Laboratuvar
- Tam kan sayımı ve biyokimya (BUN, kreatinin, potasyum)
- İdrar tahlili (pH, kristal, kan, bakteri)
- İdrar kültürü

### Görüntüleme
- Röntgen: Radyoopak taşların tespiti
- Ultrasonografi: Mesane duvar kalınlığı, taş, sediment

## Tedavi

### Acil Tıkanma Tedavisi
1. Stabilizasyon: IV sıvı tedavisi, hiperkalemi düzeltilmesi
2. Üretral kateterizasyon: Anestezi altında tıkanmanın giderilmesi
3. Mesane lavajı: Kristal ve debrisin temizlenmesi
4. İdrar kateterinin 24-72 saat bırakılması
5. Antibiyotik ve ağrı kesici tedavi

### İdiopatik Sistit (FIC) Tedavisi
- Stres yönetimi (en önemli faktör)
- Çevresel zenginleştirme
- Feliway (feromonlar)
- Yaş mama ile su alımını artırma
- GAG destekleyiciler
- Analjezikler (buprenorfin)

### İdrar Taşı Tedavisi
- Struvit taşları: Diyet ile eritilebilir
- Kalsiyum oksalat: Cerrahi çıkarım gerekli
- Önleyici diyet tedavisi

## Korunma

- **Su tüketimini artırın**: Çeşme tipi su kapları, yaş mama
- **Kum kabı hijyeni**: Günde 1-2 kez temizlik, kedi başına +1 kum kabı
- **Stres azaltma**: Sakin ortam, oyun zamanları, yükseklik alanları
- **Uygun diyet**: Ürolojik sağlık mamaları (Hill’s c/d, Royal Canin Urinary)
- **Düzenli kontrol**: Yılda en az 1 kez idrar tahlili
- **Kilo kontrolü**: Obezite riski artırır

## Tekrarlayan Vakalarda

Eğer kediniz tekrarlayan tıkanma yaşıyorsa, perineal üretrostomi (PU) ameliyatı düşünülebilir. Bu cerrahi işlem, üretranın genişletilmesini sağlar ve tekrarlayan tıkanma riskini önemli ölçüde azaltır.

Anka Veteriner Kliniği olarak 7/24 acil hizmetimizle idrar tıkanıklığı gibi hayati tehlike oluşturan durumlarda hızlı müdahale imkanı sunuyoruz.`,
    category: 'Kedi',
    date: '2025-02-01',
    readTime: '10 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Kedilerde alt üriner sistem hastalıkları, idrar tıkanıklığı belirtileri ve acil müdahale gerektiren durumlar.',
  },

  'yurt-disi-cikis-islemleri': { title: 'Evcil Hayvanlarla Yurt Dışı Çıkış İşlemleri: 2025 Rehberi', content: `Evcil hayvanınızla yurt dışına seyahat etmek istiyorsanız, belirli prosedürleri önceden tamamlamanız gerekmektedir.\n\n## Gerekli Belgeler\n\n- Evcil hayvan pasaportu\n- Mikroçip (ISO 11784/11785 uyumlu)\n- Kuduz aşı sertifikası (en az 21 gün önce yapılmış)\n- Sağlık sertifikası (seyahat tarihinden en fazla 10 gün önce)\n- Gidilecek ülkenin özel gereksinimleri\n\n## Mikroçip Uygulaması\n\nTüm aşı ve sağlık kayıtları mikroçip numarasına bağlanmalıdır. Mikroçip uygulaması aşılamadan önce veya aynı gün yapılmalıdır.\n\n## Kuduz Aşısı ve Antikor Testi\n\n- Kuduz aşısı mikroçip uygulamasından sonra yapılmalıdır\n- AB ülkeleri için kuduz antikor titresi testi gerekebilir\n- Test sonucu en az 0.5 IU/ml olmalıdır\n- Test sonuçları 3-4 hafta sürebilir, erken planlama önemlidir\n\n## Ülkelere Göre Özel Gereksinimler\n\n### Avrupa Birliği Ülkeleri\n- EU Pet Passport veya veteriner sağlık sertifikası\n- Kuduz aşısı (en az 21 gün önce)\n- Mikroçip zorunlu\n- Bazı ülkelerde şerit parazit tedavisi (İngiltere, İrlanda)\n\n### ABD ve Kanada\n- Kuduz aşı sertifikası\n- Sağlık sertifikası\n- Bazı eyaletlerde ek gereksinimler olabilir\n\n## Uçuş Öncesi Hazırlıklar\n\n- Havayolu şirketinin evcil hayvan politikasını kontrol edin\n- IATA onaylı taşıma kabini temin edin\n- Uçuştan 4-6 saat önce beslemeyi kesin\n- Sakinleştirici ilaç veteriner onayı ile kullanılabilir\n\n## Önemli Uyarılar\n\n- İşlemlere en az 4 ay önceden başlayın\n- Tüm belgelerin güncel ve eksiksiz olduğundan emin olun\n- Gidilecek ülkenin karantina politikalarını araştırın\n- Dönüş için de gerekli belgeleri hazırlayın\n\nAnka Veteriner Kliniği olarak yurt dışı seyahat işlemlerinizin tüm aşamalarında yanınızdayız.`, category: 'Genel', date: '2025-01-10', readTime: '10 dk', author: 'Uzm. Vet. Hek. Özge Yıldırım', excerpt: 'Evcil hayvanınızla yurt dışına seyahat ederken gerekli belgeler, aşılar, mikroçip ve gümrük prosedürleri hakkında detaylı bilgi.' },
  'kopeklerde-asi-takvimi': { title: 'Köpeklerde Aşı Takvimi: 2025 Güncel Rehber', content: `Köpeğinizin sağlığını korumak için düzenli aşılama programına uyulması çok önemlidir.\n\n## Yavru Köpek Aşı Takvimi\n\n- 6-8 Hafta: İlk karma aşı\n- 10-12 Hafta: İkinci karma aşı\n- 14-16 Hafta: Üçüncü karma aşı + Kuduz\n- 6 Ay: Rapel aşılar\n\n## Yetişkin Köpek Aşıları\n\nYılda bir kez karma ve kuduz aşısı yaptırılmalıdır. Lyme aşısı kene riski olan bölgelerde önerilmektedir.\n\n## Lyme Aşısı\n\n- Kene kaynaklı Lyme hastalığına karşı koruma sağlar\n- 12. haftadan itibaren uygulanabilir\n- Yıllık tekrar dozu gereklidir\n- Özellikle kırsal alanlarda yaşayan köpekler için önerilir\n\n## Önemli Notlar\n\n- Aşı öncesi parazit kontrolü yapılmalıdır\n- Hasta veya hamile köpeklere aşı uygulanmamalıdır\n- Aşı sonrası 24-48 saat gözlem gereklidir`, category: 'Köpek', date: '2024-11-28', readTime: '6 dk', author: 'Uzm. Vet. Hek. Özge Yıldırım', excerpt: 'Yavru ve yetişkin köpeklerde uygulanması gereken aşılar ve takvimi hakkında kapsamlı bilgiler. Karma, kuduz, Lyme ve diğer aşılar.' },
  'kedilerde-beslenme': { title: 'Kedilerde Doğru Beslenme: Sağlıklı Mama Seçimi', content: `Kediler zorunlu karnivor hayvanlardır ve protein ağırlıklı beslenmeye ihtiyaç duyarlar.\n\n## Yaşa Göre Beslenme\n\n### Yavru Kedi (0-12 ay)\n- Yüksek proteinli yavru maması\n- Günde 3-4 öğün\n\n### Yetişkin Kedi (1-7 yaş)\n- Dengeli yetişkin maması\n- Günde 2 öğün\n\n### Yaşlı Kedi (7+ yaş)\n- Düşük kalorili, eklem destekli mama\n\n## Dikkat Edilmesi Gerekenler\n\n- Temiz su her zaman ulaşılabilir olmalı\n- İnsan yemekleri verilmemeli\n- Ani mama değişikliklerinden kaçınılmalı`, category: 'Kedi', date: '2024-11-20', readTime: '7 dk', author: 'Vet. Hek. Emel Eda Şahin', excerpt: 'Kedilerin yaşlarına ve ihtiyaçlarına göre doğru beslenme ve mama seçimi rehberi.' },
  'kis-aylarinda-evcil-hayvan-bakimi': { title: 'Kış Aylarında Evcil Hayvan Bakımı', content: `Kış aylarında evcil hayvanlarınızın sağlığını korumak için ekstra önlemler almanız gerekir.\n\n## Soğuktan Koruma\n\n- Kısa tüylü ırklar için kıyafet kullanın\n- Dış mekanda barınak sağlayın\n- Pati bakımına dikkat edin\n\n## Beslenme\n\n- Soğuk havalarda kalori ihtiyacı artar\n- Taze su erişimini sağlayın\n\n## Sağlık Kontrolleri\n\n- Kış öncesi check-up yaptırın\n- Aşılarını kontrol edin\n- Parazit korumasına devam edin`, category: 'Genel', date: '2024-11-15', readTime: '5 dk', author: 'Uzm. Vet. Hek. Özge Yıldırım', excerpt: 'Soğuk havalarda evcil hayvanlarınızı korumak için almanız gereken önlemler.' },
  'kopeklerde-dis-sagligi': { title: 'Köpeklerde Diş Sağlığı ve Bakımı', content: `Köpeklerde diş sağlığı genel sağlığın önemli bir göstergesidir.\n\n## Diş Hastalıkları\n\n- Diş taşı oluşumu\n- Diş eti iltihabı\n- Diş çürükleri\n- Ağız kokusu\n\n## Koruyucu Önlemler\n\n- Haftada 2-3 kez diş fırçalama\n- Diş bakım ürünleri kullanma\n- Çiğneme oyuncakları sağlama\n- Düzenli veteriner kontrolleri\n\n## Profesyonel Temizlik\n\nYılda en az bir kez profesyonel diş temizliği (detartraj) yaptırılmalıdır.`, category: 'Köpek', date: '2024-11-08', readTime: '6 dk', author: 'Vet. Hek. Emel Eda Şahin', excerpt: 'Köpeklerde diş taşı, diş eti hastalıkları ve ağız bakımı hakkında kapsamlı bilgi.' },
  'kedilerde-stres-belirtileri': { title: 'Kedilerde Stres Belirtileri ve Çözüm Yolları', content: `Kediler strese karşı hassas hayvanlardır ve stres belirtilerini tanımak önemlidir.\n\n## Stres Belirtileri\n\n- Aşırı tüy dökme\n- İştahsızlık veya aşırı yeme\n- Saklanma davranışı\n- Saldırganlık\n- Uygunsuz tuvaleti\n\n## Çözüm Önerileri\n\n- Sakin ve düzenli bir ortam sağlayın\n- Yüksekte tırmanma alanları oluşturun\n- Oyun zamanı ayırın\n- Feliway gibi feromonlar kullanın`, category: 'Kedi', date: '2024-10-30', readTime: '7 dk', author: 'Vet. Hek. Emel Eda Şahin', excerpt: 'Kedinizin stresli olduğunu nasıl anlarsınız? Stres kaynaklarını ve çözüm önerilerini keşfedin.' },
  'yavru-kopek-egitimi': { title: 'Yavru Köpek Eğitimi: İlk Adımlar', content: `Yavru köpek eğitimi, erken dönemde başladığında en iyi sonuçları verir.\n\n## Temel Eğitim\n\n- Tuvalet eğitimi\n- Otur, bekle, gel komutları\n- Tasma eğitimi\n- Sosyalleşme\n\n## İpuçları\n\n- Pozitif pekiştirme kullanın\n- Tutarlı olun\n- Kısa seanslar halinde çalışın\n- Sabırlı olun`, category: 'Köpek', date: '2024-10-22', readTime: '8 dk', author: 'Uzm. Vet. Hek. Özge Yıldırım', excerpt: 'Yavru köpeğinizi eğitirken dikkat etmeniz gereken temel konular ve pratik ipuçları.' },
  'kuslarda-tuy-dokulmesi': { title: 'Kuşlarda Tüy Dökülmesi: Nedenleri ve Tedavisi', content: `Kuşlarda tüy dökülmesi normal bir süreç olabilir, ancak bazen bir sağlık sorununa işaret eder.\n\n## Normal Tüy Değişimi\n\nKuşlar yılda 1-2 kez tüy değiştirir. Bu normal bir süreçtir.\n\n## Anormal Tüy Dökülmesi Nedenleri\n\n- Beslenme eksiklikleri\n- Stres\n- Parazitler\n- Hormonal bozukluklar\n- Mantar enfeksiyonları\n\n## Tedavi\n\nAnormal tüy dökülmesi durumunda mutlaka veteriner hekime başvurulmalıdır.`, category: 'Genel', date: '2024-10-15', readTime: '5 dk', author: 'Vet. Hek. Emel Eda Şahin', excerpt: 'Kuşlarda tüy dökülmesinin yaygın nedenleri, önleme yöntemleri ve tedavi seçenekleri.' },
  'evcil-hayvanlarda-obezite': { title: 'Evcil Hayvanlarda Obezite: Görünmez Tehlike', content: `Obezite, evcil hayvanlarda ciddi sağlık sorunlarına yol açabilir.\n\n## Obezite Riskleri\n\n- Eklem problemleri\n- Diyabet\n- Kalp hastalıkları\n- Karaciğer yağlanması\n- Ömür kısalması\n\n## Kilo Kontrolü\n\n- Porsiyon kontrolü yapın\n- Düzenli egzersiz sağlayın\n- Atıştırmalıkları sınırlayın\n- Veteriner kontrolünde diyet programı uygulayın`, category: 'Genel', date: '2024-10-08', readTime: '6 dk', author: 'Uzm. Vet. Hek. Özge Yıldırım', excerpt: 'Evcil hayvanlarda obezite riskleri, belirtileri ve sağlıklı kilo yönetimi önerileri.' },
  'kedilerde-tirnak-bakimi': { title: 'Kedilerde Tırnak Bakımı Nasıl Yapılır?', content: `Kedi tırnak bakımı, hem kedinizin hem de ev eşyalarınızın korunması için önemlidir.\n\n## Tırnak Kesimi\n\n- 2-3 haftada bir kontrol edin\n- Sadece şeffaf kısmı kesin\n- Özel kedi tırnak makası kullanın\n- Sakin bir ortamda yapın\n\n## Tırnak Tahtası\n\n- Çeşitli tırmalama tahtaları sağlayın\n- Kedinin tercih ettiği yüzeyi keşfedin\n\n## Dikkat\n\nTırnak bakımında kendinizi güvende hissetmiyorsanız veterinerinize başvurun.`, category: 'Kedi', date: '2024-10-01', readTime: '4 dk', author: 'Vet. Hek. Emel Eda Şahin', excerpt: 'Kedilerde tırnak kesimi ve bakımı hakkında bilmeniz gereken her şey.' },
};

const allPosts = Object.entries(blogData).map(([slug, data]) => ({
  slug,
  title: data.title,
  excerpt: data.excerpt,
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
              {post.category}
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
              <AuthorBox
                name={post.author}
                role={post.author.includes('İbrahim') ? 'Başhekim - Anka Veteriner Kliniği' : post.author.includes('Özge') ? 'Uzman Veteriner Hekim & Kurucu Ortak' : post.author.includes('Emel') ? 'Veteriner Hekim' : 'Veteriner Sağlık Ekibi'}
                image={post.author.includes('İbrahim') ? '/images/team/ibrahim-yildirim.jpeg' : post.author.includes('Özge') ? '/images/team/ozge-yildirim.jpeg' : post.author.includes('Emel') ? '/images/team/emel-eda-sahin.jpeg' : '/images/logo/anka-logo.jpeg'}
                bio={post.author.includes('İbrahim') ? 'Anka Veteriner Kliniği Başhekimi. Veteriner cerrahisi alanında uzmanlaşmış, 10 yılı aşkın klinik deneyime sahip.' : post.author.includes('Özge') ? 'Anka Veteriner Kliniği kurucu ortağı. İç hastalıkları ve koruyucu hekimlik alanlarında uzman.' : post.author.includes('Emel') ? 'Anka Veteriner Kliniği veteriner hekimi. Evcil hayvan beslenmesi ve bakımı konularında deneyimli.' : undefined}
              />
              <RelatedBlogPosts currentSlug={slug} posts={allPosts} />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
