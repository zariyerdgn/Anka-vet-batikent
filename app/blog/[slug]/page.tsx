import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import AuthorBox from '@/components/AuthorBox';
import ShareButton from '@/components/ShareButton';
import RelatedBlogPosts from '@/components/RelatedBlogPosts';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const blogData: Record<string, { title: string; content: string; category: string; date: string; readTime: string; author: string; excerpt: string }> = {

  'kopeklerde-parvovirus-belirtileri': {
    title: 'Köpeklerde Parvovirüs: Belirtileri, Korunma ve Erken Teşhis',
    content: `Parvovirüs (CPV-2), özellikle aşılanmamış yavru köpeklerde yüksek ölüm oranına sahip, son derece bulaşıcı bir viral enfeksiyondur. Uzm. Vet. Hek. İbrahim Yıldırım olarak, kliniğimizde yılda onlarca parvovirüs vakası ile karşılaşıyoruz ve erken müdahalenin hayat kurtardığını biliyoruz.

## Parvovirüs Nedir?

Canine Parvovirus (CPV-2), köpeklerin bağırsak epitel hücrelerini ve kemik iliğini hedef alan, çevresel koşullara son derece dayanıklı bir virüstür. Virüs, enfekte köpeğin dışkısı yoluyla yayılır ve uygun koşullarda aylarca canlı kalabilir. Dezenfektanlara karşı oldukça dirençlidir.

## Belirtileri

- Şiddetli, kanlı ishal (karakteristik kötü koku)
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

## Korunma

- **Aşılama**: En etkili korunma yöntemidir. 6-8 haftadan itibaren 3-4 hafta aralıklarla 3 doz yapılır
- **Hijyen**: Enfekte bölgelerin %1'lik sodyum hipoklorit ile dezenfeksiyonu
- **Karantina**: Enfekte hayvanların izolasyonu
- **Anne sütü**: Yavru köpeklerin anne sütünden yeterli antikor almalarının sağlanması

## Ne Zaman Veterinere Gidilmeli?

Yavru köpeğinizde kanlı ishal, kusma ve halsizlik belirtileri gördüğünüzde derhal veteriner kliniğine başvurun. Parvovirüste erken müdahale hayat kurtarır. İlk 72 saat kritik öneme sahiptir.

Anka Veteriner Kliniği olarak 7/24 acil hizmetimizle parvovirüs şüphesi olan hastalarımıza hızlı müdahale imkanı sunuyoruz.`,
    category: 'Köpek',
    date: '2026-03-25',
    readTime: '10 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Parvovirüs, özellikle yavru köpeklerde ölümcül olabilen tehlikeli bir viral enfeksiyondur. Erken teşhis hayat kurtarır.',
  },

  'kedilerde-bobrek-hastaligi-belirtileri': {
    title: 'Kedilerde Kronik Böbrek Hastalığı: Belirtiler ve Erken Teşhis',
    content: `Kronik böbrek hastalığı (KBH), 7 yaş üstü kedilerin yaklaşık %30-40'ında görülen, ilerleyici bir hastalıktır. Uzm. Vet. Hek. İbrahim Yıldırım olarak, bu yazıda kedilerde kronik böbrek hastalığının belirtilerini ve erken teşhisin önemini ele alacağız.

## Böbreklerin Görevi

Böbrekler, vücuttaki atık ürünlerin filtrelenmesi, sıvı-elektrolit dengesinin korunması, kan basıncının düzenlenmesi ve eritropoetin hormonunun üretimi gibi hayati görevler üstlenir. Nefronların %75'i hasar görünceye kadar belirgin klinik belirtiler ortaya çıkmaz, bu nedenle erken teşhis kritik önemdedir.

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

- Aşırı su içme ve sık idrara çıkma (en erken belirtilerden)
- İştah kaybı ve kilo kaybı
- Kusma ve bulantı
- Halsizlik ve aktivite azalması
- Kötü deri ve kürk kalitesi
- Ağız kokusu (üremik koku)
- Kabuklu ağız yaraları
- Anemi belirtileri (soluk mukozalar)

## Teşhis Yöntemleri

### Kan Tahlili
- BUN (Kan Üre Azotu) ve Kreatinin: Böbrek fonksiyonunun temel göstergeleri
- SDMA: Böbrek hastalığını kreatininden çok daha erken tespit eder
- Fosfor, kalsiyum, potasyum düzeyleri
- Tam kan sayımı (anemi değerlendirmesi)

### İdrar Tahlili
- İdrar yoğunluğu (USG <1.035 kediler için anormal)
- Protein/kreatinin oranı (proteinüri değerlendirmesi)
- Sediment incelemesi

### Görüntüleme
- Ultrasonografi: Böbrek boyutu, yapısı, taş varlığı
- Röntgen: Böbrek boyutu, kalsifikasyon

## Öneriler

- **7 yaş üstü kedilerinize yılda en az bir kez kan tahlili yaptırın**
- Temiz, taze suya her zaman erişim sağlayın
- Kaliteli, yaşa uygun mama kullanın
- İdrar alışkanlıklarındaki değişiklikleri yakından takip edin

Anka Veteriner Kliniği'nde modern laboratuvar ekipmanlarımızla hızlı ve doğru tanı koyarak kedilerinizin sağlığını koruyoruz.`,
    category: 'Kedi',
    date: '2026-03-20',
    readTime: '12 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Yaşlı kedilerde sık görülen kronik böbrek hastalığının erken belirtilerini tanımak, kedinizin yaşam kalitesini korumak için kritiktir.',
  },

  'kopeklerde-kalp-hastaliklari-belirtileri': {
    title: 'Köpeklerde Kalp Hastalıkları: Belirtiler ve Erken Uyarı İşaretleri',
    content: `Kalp hastalıkları, köpeklerde özellikle orta yaş ve üzerinde sık karşılaşılan ciddi sağlık sorunlarıdır. Erken belirtileri tanımak ve zamanında veterinere başvurmak büyük önem taşır.

## Köpeklerde Yaygın Kalp Hastalıkları

### Mitral Kapak Hastalığı (MVD)
- Küçük ırklarda en sık görülen kalp hastalığı
- Cavalier King Charles Spaniel, Chihuahua, Poodle gibi ırklar risk altında
- Kapak dejenerasyonu sonucu kan geri kaçışı (regürjitasyon)
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

## Belirtiler ve Erken Uyarı İşaretleri

- Öksürük (özellikle geceleri veya egzersiz sonrası)
- Nefes darlığı ve hızlı solunum
- Egzersiz intoleransı (çabuk yorulma)
- Baygınlık (senkop)
- Karın şişliği (asit birikimi)
- Kilo kaybı ve kas erimesi
- Huzursuzluk, uyuyamama
- Mor-mavi mukozalar (siyanoz)
- İştahsızlık

## Risk Faktörleri

- Irk yatkınlığı (Cavalier, Doberman, Boxer, Great Dane)
- İleri yaş
- Obezite
- Diş hastalıkları (bakteriyel endokardit riski)
- Heartworm enfeksiyonu

## Teşhis Yöntemleri

### Oskultasyon
Kalp üfürümü ve ritim bozukluklarının stetoskopla tespiti. Düzenli kontrollerin ilk adımıdır.

### Röntgen
- Kalp büyüklüğü değerlendirmesi (VHS ölçümü)
- Akciğer ödemi varlığı
- Plevral efüzyon kontrolü

### Ekokardiyografi (Kalp Ultrasonografisi)
- Altın standart teşhis yöntemi
- Kalp odacıklarının boyutu ve kapak fonksiyonları
- Kasılma gücü (ejeksiyon fraksiyonu)
- Kan akım hızı ve yönü (Doppler)

### EKG
- Ritim bozukluklarının tespiti
- Atriyal fibrilasyon ve ventriküler aritmi tanısı

### Kardiyak Biyomarkerlar
- NT-proBNP: Kalp yetmezliği erken tanısı
- Kardiyak troponin: Miyokard hasarı göstergesi

## Ne Zaman Veterinere Gidilmeli?

Köpeğinizde öksürük, egzersiz intoleransı veya nefes darlığı fark ettiğinizde vakit kaybetmeden veteriner kontrolüne getirin. Yılda en az bir kez kalp oskultasyonu yaptırmanız önerilir.

Anka Veteriner Kliniği'nde köpeğinizin kalp sağlığını ekokardiyografi dahil modern teşhis yöntemleriyle değerlendiriyoruz.`,
    category: 'Köpek',
    date: '2026-03-15',
    readTime: '11 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Köpeklerde kalp hastalıklarının erken belirtilerini tanımak, zamanında veteriner müdahalesi için büyük önem taşır.',
  },

  'kedilerde-fip-hastaligi': {
    title: 'Kedilerde FIP Hastalığı: Belirtiler, Bulaşma ve Teşhis',
    content: `Feline İnfeksiyöz Peritonit (FIP), kedilerde coronavirus'un mutasyona uğramış formu tarafından oluşturulan ciddi bir hastalıktır. Uzm. Vet. Hek. İbrahim Yıldırım olarak FIP'in belirtileri ve teşhisi hakkında bilmeniz gerekenleri paylaşıyorum.

## FIP Nedir?

FIP, kedilerde bulunan feline coronavirus'un (FCoV) mutasyona uğramasıyla ortaya çıkar. Kedilerin büyük çoğunluğu coronavirus taşıyıcısıdır ancak sadece küçük bir kısmında virüs mutasyona uğrayarak FIP'e dönüşür. Hastalık özellikle genç kedilerde (6 ay - 2 yaş) daha sık görülür.

## Bulaşma

- Enfekte kedilerin dışkısı yoluyla ağız-dışkı (fecal-oral) yolla bulaşır
- Kalabalık kedi popülasyonlarında risk artar
- Barınaklar ve çok kedili evlerde yaygın
- Stres, bulaşma riskini artırır

## FIP Formları ve Belirtileri

### Yaş (Efüzyonlu) Form
- Karın şişliği (karın boşluğunda sıvı birikimi - asit)
- Göğüs boşluğunda sıvı birikimi (nefes darlığı)
- Ateş (genellikle 39.5°C üzeri, dalgalanan)
- İştahsızlık ve kilo kaybı
- Sarılık (mukozalarda ve deride sararma)
- Halsizlik

### Kuru (Granülomatöz) Form
- Göz lezyonları (üveit, iris renk değişikliği)
- Nörolojik belirtiler (yürüme bozukluğu, titreme, nöbet)
- Organ granülomları (böbrek, karaciğer, dalak)
- Kronik kilo kaybı
- İnatçı ateş
- Sarılık

## Risk Faktörleri

- Genç yaş (6 ay - 2 yaş)
- Kalabalık yaşam ortamı
- Stres (ev değişikliği, yeni kedi, kısırlaştırma dönemi)
- Zayıf bağışıklık sistemi
- FeLV pozitif kediler

## Teşhis Yöntemleri

### Klinik Muayene
Fizik muayene bulguları, ateş paterni ve efüzyon varlığı değerlendirilir.

### Efüzyon Analizi
- Rivalta testi: Basit ama yönlendirici bir test
- Efüzyon sıvısının rengi, kıvamı ve protein içeriği
- Hücre sayımı ve sitoloji

### Kan Tahlili
- Hiperglobulinemi (yüksek globulin)
- Albumin/globulin oranı düşüklüğü
- Bilirubin yüksekliği
- Lenfopeni

### PCR Testi
Efüzyon sıvısında veya dokuda FCoV RNA tespiti.

### Görüntüleme
- Ultrasonografi: Karın içi sıvı, organ değişiklikleri
- Röntgen: Göğüs ve karın değerlendirmesi

## Korunma

- Kalabalık ortamlardan kaçınma
- Stresin azaltılması
- Düzenli veteriner kontrolleri
- Kedi kumu hijyenine dikkat
- Yeni gelen kedilerin karantinası

Anka Veteriner Kliniği olarak kedilerinizin FIP şüphesinde kapsamlı laboratuvar ve görüntüleme hizmetleri sunuyoruz.`,
    category: 'Kedi',
    date: '2026-03-10',
    readTime: '9 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Feline İnfeksiyöz Peritonit (FIP), kedilerde ciddi seyir gösteren viral bir hastalıktır. Belirtilerini erken tanımak çok önemlidir.',
  },

  'kopeklerde-kalca-displazisi': {
    title: 'Köpeklerde Kalça Displazisi: Belirtiler, Tanı ve Korunma',
    content: `Kalça displazisi, köpeklerde en sık karşılaşılan ortopedik sorunlardan biridir. Özellikle büyük ırk köpeklerde genetik yatkınlık taşıyan bu hastalığın erken tanısı, yaşam kalitesi açısından çok önemlidir.

## Kalça Displazisi Nedir?

Kalça eklemi, femur başı (uyluk kemiği) ve asetabulum (kalça çukuru) arasındaki eklemdir. Displazide bu eklem yüzeyleri tam uyum sağlayamaz; eklem gevşekliği, kıkırdak hasarı ve zamanla artroz gelişir.

## Belirtiler

### Yavru Dönem (4-12 ay)
- Tavşan gibi sıçrayarak koşma (arka bacakları birlikte kullanma)
- Merdiven çıkmaktan ve yüksek yerlere atlamaktan kaçınma
- Uzun yürüyüşlerden sonra topallama
- Arka bacaklarda sertlik (özellikle sabahları)
- Oturuş pozisyonunda anormallik

### Yetişkin Dönem
- Kronik topallama (tek veya çift taraflı)
- Arka bacak kas erimesi
- Egzersiz intoleransı
- Kalça bölgesinde ağrı (dokunulduğunda tepki)
- Yatarken ve kalkarken zorlanma
- Dış bacak salınımı (sallanan yürüyüş)

## Risk Faktörleri

- **Irk**: Alman Çoban Köpeği, Golden Retriever, Labrador, Rottweiler, Saint Bernard
- **Genetik**: Her iki ebeveynde displazi varsa risk çok yüksektir
- **Hızlı büyüme**: Aşırı beslenme ve kontrolsüz büyüme
- **Obezite**: Eklemlere aşırı yük biner
- **Uygunsuz egzersiz**: Yavru dönemde aşırı egzersiz

## Teşhis Yöntemleri

### Fizik Muayene
- Ortolani testi: Kalça gevşekliğini değerlendiren klinik test
- Barlow testi: Eklem instabilitesinin tespiti
- Yürüyüş analizi ve kas kitlesi değerlendirmesi

### Röntgen
- Penn-HIP yöntemi: Kalça gevşekliğinin nicel ölçümü
- OFA (Orthopedic Foundation for Animals) değerlendirmesi
- Kalça eklemi açıları ve uyum değerlendirmesi

### İleri Görüntüleme
- BT (Bilgisayarlı Tomografi): 3 boyutlu eklem değerlendirmesi
- Artroskopi: Eklem içi doğrudan görüntüleme

## Korunma ve Öneriler

- Damızlık seçiminde kalça displazisi taraması yapılmış ebeveynler tercih edilmeli
- Yavru köpeklerde kontrollü büyüme sağlanmalı
- Aşırı beslenmeden kaçınılmalı
- Yavru dönemde aşırı egzersizden kaçınılmalı (merdiven, zıplama)
- İdeal vücut ağırlığı korunmalı
- Düzenli veteriner kontrolleri

## Ne Zaman Veterinere Gidilmeli?

Büyük ırk köpeğinizde topallama, yürüyüş bozukluğu veya arka bacaklarda güçsüzlük fark ettiğinizde mutlaka veteriner muayenesi yaptırın. Erken dönemde alınacak önlemler, hastalığın ilerlemesini yavaşlatabilir.

Anka Veteriner Kliniği olarak dijital röntgen ve ileri görüntüleme yöntemleriyle kalça displazisi tanısı koyuyoruz.`,
    category: 'Köpek',
    date: '2026-03-05',
    readTime: '10 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Büyük ırk köpeklerde sık görülen kalça displazisinin erken belirtileri ve tanı yöntemleri hakkında bilmeniz gerekenler.',
  },

  'evcil-hayvanlarda-alerji-belirtileri': {
    title: 'Evcil Hayvanlarda Alerji: Belirtiler, Türler ve Korunma',
    content: `Alerji, evcil hayvanlarda son derece yaygın ve yaşam kalitesini ciddi şekilde etkileyen bir sağlık sorunudur. Uzm. Vet. Hek. İbrahim Yıldırım olarak, kliniğimizde en sık karşılaştığımız alerji türlerini ve belirtilerini sizlerle paylaşıyorum.

## Alerji Türleri

### Pire Alerjisi Dermatiti (PAD)
En yaygın alerji türüdür. Tek bir pire ısırığı bile şiddetli kaşıntıya neden olabilir. Pirenin tükürüğündeki proteinlere karşı aşırı duyarlılık reaksiyonu gelişir.

### Atopik Dermatit (Çevresel Alerji)
- Toz akarları, polenler, küf mantarları
- Mevsimsel olabilir (bahar-yaz) veya yıl boyu sürebilir
- Genetik yatkınlık önemli rol oynar

### Gıda Alerjisi
- Belirli protein kaynaklarına karşı reaksiyon
- En yaygın alerjenler: sığır eti, tavuk, süt ürünleri, buğday, soya
- Eliminasyon diyeti ile teşhis edilir

### Kontakt Alerjisi
- Belirli maddelere temas sonucu gelişir
- Temizlik ürünleri, çim, plastik malzemeler
- Nispeten nadir görülür

## Belirtiler

### Cilt Belirtileri
- Şiddetli kaşıntı (en belirgin belirti)
- Kızarıklık ve döküntü
- Tüy dökülmesi (özellikle kaşınan bölgelerde)
- Cilt kalınlaşması ve renk değişikliği
- Sıcak noktalar (hot spot)
- Kabuklanma ve pullanma

### Diğer Belirtiler
- Kronik kulak enfeksiyonları (özellikle atopide)
- Patileri yalama ve ısırma
- Yüz sürtme
- Göz yaşarması ve akıntısı
- Hapşırma (çevresel alerjide)
- Sindirim sorunları (gıda alerjisinde)

## Alerjinin Sık Görüldüğü Bölgeler

- Kulak içleri
- Pati araları
- Koltuk altı
- Kasık bölgesi
- Göz çevresi
- Dudak kenarları
- Kuyruk dibi (özellikle pire alerjisinde)

## Teşhis Yöntemleri

### Klinik Muayene ve Öykü
Belirtilerin başlangıç zamanı, mevsimselliği ve dağılımı değerlendirilir.

### Pire Kontrolü
Pire alerjisini ekarte etmek için ilk adımdır.

### Eliminasyon Diyeti
Gıda alerjisi şüphesinde 8-12 haftalık eliminasyon diyeti uygulanır.

### Alerji Testi
- İntradermal deri testi
- Serum IgE testleri

## Korunma Önerileri

- Düzenli pire ve parazit koruma programı uygulayın
- Evi sık sık temizleyin ve toz kontrolü yapın
- Kaliteli, sınırlı içerikli mama tercih edin
- Banyo programına dikkat edin (aşırı yıkama cildi kurutur)
- Düzenli veteriner kontrolleri yaptırın
- Alerjen maruziyetini minimumda tutun

Anka Veteriner Kliniği olarak evcil hayvanınızın alerji sorunlarında kapsamlı tanı ve yönlendirme hizmeti sunuyoruz.`,
    category: 'Genel',
    date: '2026-02-28',
    readTime: '9 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Kedi ve köpeklerde gıda, çevresel ve pire alerjisinin belirtileri ve korunma yöntemleri.',
  },

  'kedilerde-idrar-yolu-hastaliklari': {
    title: 'Kedilerde Alt İdrar Yolu Hastalıkları (FLUTD): Belirtiler ve Risk Faktörleri',
    content: `Feline Alt İdrar Yolu Hastalığı (FLUTD), kedilerde oldukça yaygın görülen ve acil müdahale gerektirebilen bir durumdur. Özellikle erkek kedilerde idrar yolu tıkanması hayati tehlike oluşturabilir.

## FLUTD Nedir?

FLUTD, kedilerde mesane ve üretrayı etkileyen çeşitli hastalıkların genel adıdır. İdiyopatik sistit (nedeni bilinmeyen mesane iltihabı) en sık görülen formudur ve vakaların yaklaşık %60'ını oluşturur.

## Nedenleri

- İdiyopatik sistit (%60-70)
- Mesane taşları (struvit, kalsiyum oksalat)
- Üretral tıkaç
- İdrar yolu enfeksiyonları (özellikle yaşlı kedilerde)
- Anatomik anormallikler
- Tümörler (nadir)

## Belirtiler

- Sık sık kum kabına gitme ama çok az veya hiç idrar yapamama
- İdrar yaparken ağrı belirtisi (miyavlama, inleme)
- Kanlı idrar (hematüri)
- Kum kabı dışında idrar yapma
- Genital bölgeyi aşırı yalama
- Huzursuzluk ve mırlama
- İştahsızlık
- Gizlenme davranışı

### ACİL BELİRTİLER (Erkek Kedilerde Tıkanma)
- 12-24 saatten fazla idrar yapamama
- Karın şişliği ve ağrısı
- Kusma
- Letarji, bilinç bulanıklığı

**DİKKAT**: Erkek kedilerde tam tıkanma, tedavi edilmezse 24-48 saat içinde ölümcül olabilir. Bu bir acil durumdur!

## Risk Faktörleri

- Erkek kediler (dar üretra nedeniyle tıkanma riski yüksek)
- İç mekan kediler
- Obez kediler
- Stresli yaşam ortamı
- Hareketsiz yaşam tarzı
- Kuru mama ağırlıklı beslenme
- Yetersiz su tüketimi
- 2-6 yaş arası kediler

## Teşhis Yöntemleri

### İdrar Tahlili
- İdrar pH'ı ve yoğunluğu
- Kristal analizi (struvit, kalsiyum oksalat)
- Kan ve enfeksiyon varlığı
- İdrar kültürü (enfeksiyon şüphesinde)

### Görüntüleme
- Röntgen: Radyoopak taşların tespiti
- Ultrasonografi: Mesane duvarı kalınlığı, taş varlığı

### Kan Tahlili
Tıkanma durumunda böbrek fonksiyonları ve elektrolit dengesi değerlendirilir.

## Korunma Önerileri

- **Su tüketimini artırın**: Çeşme tipi su kapları, birden fazla su noktası
- **Yaş mama oranını artırın**: Sıvı alımını destekler
- **Stresi azaltın**: Feliway, oyun zamanı, yüksek alanlar
- **Kum kabı hijyeni**: Her kedi için ayrı kum kabı + 1 ekstra
- **İdeal kiloyu koruyun**: Obeziteden kaçının
- **Düzenli veteriner kontrolü**: Yılda en az bir kez idrar tahlili

## Ne Zaman Acil Veterinere Gidilmeli?

Kediniz 12 saatten fazla idrar yapamıyorsa, idrar yaparken ağrı belirtisi gösteriyorsa veya kanlı idrar yapıyorsa derhal veteriner kliniğine başvurun.

Anka Veteriner Kliniği olarak 7/24 acil hizmetimizle idrar yolu tıkanması vakalarına hızlı müdahale ediyoruz.`,
    category: 'Kedi',
    date: '2026-02-22',
    readTime: '10 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Kedilerde sık görülen alt idrar yolu hastalıklarının belirtileri, risk faktörleri ve ne zaman acil veterinere gidilmesi gerektiği.',
  },

  'kopeklerde-diyabet-belirtileri': {
    title: 'Köpeklerde Diyabet: Belirtiler, Risk Faktörleri ve Tanı',
    content: `Diabetes mellitus (şeker hastalığı), köpeklerde giderek artan sıklıkta karşılaşılan metabolik bir hastalıktır. Uzm. Vet. Hek. İbrahim Yıldırım olarak, köpeklerde diyabetin erken belirtilerini tanımanın önemini vurguluyorum.

## Diyabet Nedir?

Diyabet, pankreas tarafından yeterli insülin üretilememesi (Tip 1) veya vücudun insüline yanıt verememesi (Tip 2) sonucu kan şekerinin kontrol edilemez yükselmesidir. Köpeklerde genellikle Tip 1 diyabet (insülin bağımlı) görülür.

## Belirtiler (4P Kuralı)

### Polidipsi (Aşırı Su İçme)
- Normal su tüketiminin 2-3 katı
- Su kabını sürekli boşaltma
- Yatağın yanına su döküntüleri

### Poliüri (Sık İdrara Çıkma)
- Normalden çok daha sık idrar
- Ev içinde idrar kaçırma (eğitimli köpeklerde)
- Gece idrara çıkma ihtiyacı

### Polifaji (Aşırı İştah)
- Sürekli aç davranma
- Yemek kaplandığı anda bitirme
- Masa altında yemek arama

### Kilo Kaybı
- İştah artmasına rağmen kilo verme
- Kas kitlesi kaybı
- Zayıflama

### Diğer Belirtiler
- Halsizlik ve aktivite azalması
- Tekrarlayan idrar yolu enfeksiyonları
- Katarakt gelişimi (gözlerde beyazlaşma)
- Yara iyileşmesinde yavaşlama
- Kürk kalitesinde bozulma

## Risk Faktörleri

- **Yaş**: Orta yaş ve üzeri (7-9 yaş) daha riskli
- **Cinsiyet**: Dişi köpeklerde 2 kat daha sık
- **Irk**: Samoyed, Poodle, Pug, Beagle, Schnauzer
- **Obezite**: En önemli önlenebilir risk faktörü
- **Pankreatit öyküsü**: Pankreas hasarı insülin üretimini azaltır
- **Cushing hastalığı**: Eşlik eden endokrin bozukluk
- **Kısırlaştırılmamış dişiler**: Hormonal etkiler

## Teşhis Yöntemleri

### Kan Şekeri Ölçümü
- Açlık kan şekeri: >200 mg/dL genellikle diyabet tanısını destekler
- Seri kan şekeri ölçümleri

### Fruktozamin Testi
Son 2-3 haftanın ortalama kan şekerini yansıtır. Stres kaynaklı yükselmelerden etkilenmez.

### İdrar Tahlili
- Glikozüri: İdrarda şeker varlığı
- Ketonüri: Diyabetik ketoasidoz belirtisi
- İdrar yolu enfeksiyonu taraması

### Tam Biyokimya Paneli
Karaciğer, böbrek ve pankreas fonksiyonlarının değerlendirilmesi.

## Korunma Önerileri

- İdeal vücut ağırlığını koruyun
- Dengeli ve düzenli beslenme programı uygulayın
- Düzenli egzersiz yaptırın
- Yılda bir kez kan tahlili yaptırın (özellikle 7 yaş üzeri)
- Dişi köpeklerin kısırlaştırılması hormonal diyabet riskini azaltır

## Ne Zaman Veterinere Gidilmeli?

Köpeğinizde aşırı su içme, sık idrara çıkma ve iştah artmasına rağmen kilo kaybı fark ederseniz en kısa sürede veteriner kontrolüne getirin.

Anka Veteriner Kliniği'nde modern laboratuvar ekipmanlarımızla hızlı kan şekeri ve hormon tahlilleri yaparak doğru tanı koyuyoruz.`,
    category: 'Köpek',
    date: '2026-02-15',
    readTime: '9 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Köpeklerde diyabetin erken belirtilerini tanımak, hastalığın yönetimi için kritik öneme sahiptir.',
  },

  'evcil-hayvanlarda-yaslilik-bakimi': {
    title: 'Evcil Hayvanlarda Yaşlılık Dönemi: Belirtiler ve Bakım Rehberi',
    content: `Evcil hayvanlarımız yaşlandıkça özel bakım ve dikkat gerektiren değişimler yaşarlar. Uzm. Vet. Hek. İbrahim Yıldırım olarak, yaşlanan dostlarınızın yaşam kalitesini korumak için bilmeniz gerekenleri paylaşıyorum.

## Ne Zaman Yaşlı Sayılır?

### Köpekler
- Küçük ırklar (10 kg altı): 10-12 yaş
- Orta ırklar (10-25 kg): 8-10 yaş
- Büyük ırklar (25-45 kg): 6-8 yaş
- Dev ırklar (45 kg üzeri): 5-6 yaş

### Kediler
- 7-10 yaş arası: Olgun dönem
- 10 yaş üzeri: Yaşlı kedi
- 15 yaş üzeri: Süper yaşlı

## Yaşlılık Belirtileri

### Fiziksel Değişimler
- Aktivite seviyesinde düşüş
- Eklem sertliği ve hareket kısıtlılığı
- Kilo değişiklikleri (artış veya kayıp)
- Tüy kalitesinde azalma, beyazlama
- Görme ve işitme kaybı
- Diş ve diş eti sorunlarında artış
- Kas kitlesi kaybı

### Davranışsal Değişimler
- Uyku süresinde artış
- Daha az oyun ve sosyal etkileşim
- Gece huzursuzluğu veya miyavlama (kedilerde)
- Tuvalet alışkanlığında değişiklik
- Bilişsel bozukluk belirtileri (demansiyon, Cognitive Dysfunction Syndrome)
- Konfüzyon, yön bulma güçlüğü
- Ayrılık anksiyetesi artışı

## Yaşlılık Dönemi Sağlık Sorunları

### Eklem ve Hareket Sorunları
- Osteoartrit (dejeneratif eklem hastalığı)
- Spondiloz (omurga dejenerasyonu)
- Kas atrofisi

### Organ Fonksiyon Azalması
- Böbrek hastalığı (özellikle kedilerde)
- Karaciğer fonksiyon azalması
- Kalp hastalıkları
- Tiroid bozuklukları

### Diğer Sorunlar
- Tümör/kanser riskinde artış
- Diyabet
- Görme sorunları (katarakt)
- İşitme kaybı
- Bilişsel bozukluk sendromu

## Teşhis ve Check-up

Yaşlı evcil hayvanlarda yılda en az iki kez check-up önerilir:

- Tam kan sayımı ve biyokimya
- İdrar tahlili
- Tiroid fonksiyon testleri
- Kan basıncı ölçümü
- Göğüs ve karın röntgeni
- Karın ultrasonografi
- Göz ve kulak muayenesi
- Diş muayenesi
- Kitle taraması

## Bakım Önerileri

### Beslenme
- Yaşa uygun, kolay sindirilebilir mama tercih edin
- Eklem destekli formüller (glukozamin, kondroitin içeren)
- Omega-3 yağ asitleri ile destekleme
- Porsiyon kontrolü (obeziteden kaçınma)

### Yaşam Ortamı
- Rahat, ortopedik yatak sağlayın
- Kaygan zemin önleyiciler kullanın
- Merdiven yerine rampa koyun
- Su ve mama kaplarını erişilebilir yere yerleştirin
- Sıcak ve sessiz dinlenme alanı oluşturun

### Egzersiz
- Kısa ama düzenli yürüyüşler
- Yüzme (eklem dostu egzersiz)
- Zihinsel uyarı sağlayan oyuncaklar
- Aşırı egzersizden kaçınma

### Düzenli Kontrol
- 6 ayda bir veteriner check-up'ı
- Diş temizliği kontrolü
- Aşı ve parazit koruma takibi
- Davranış değişikliklerini not edin

Anka Veteriner Kliniği olarak yaşlı evcil hayvanlarınız için kapsamlı geriatrik check-up ve takip hizmetleri sunuyoruz.`,
    category: 'Genel',
    date: '2026-02-08',
    readTime: '11 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Yaşlanan evcil hayvanınızın ihtiyaçlarını anlamak ve yaşam kalitesini korumak için kapsamlı rehber.',
  },

  'kopeklerde-kene-pire-korunma': {
    title: 'Köpeklerde Kene ve Pire: Belirtiler, Hastalıklar ve Korunma',
    content: `Kene ve pireler sadece rahatsızlık vermekle kalmaz, ciddi ve hatta ölümcül hastalıklara neden olabilir. Uzm. Vet. Hek. İbrahim Yıldırım olarak, bu dış parazitlerden korunmanın önemini vurguluyorum.

## Pireler

### Pire Belirtileri
- Şiddetli kaşıntı (özellikle kuyruk dibi ve karın bölgesi)
- Tüy dökülmesi
- Cilt kızarıklığı ve sıcak noktalar (hot spot)
- Pire dışkısı (kürkte siyah toz benzeri noktalar)
- Huzursuzluk ve sürekli kaşınma
- Ağır enfestasyonda anemi (özellikle yavru köpeklerde)

### Pire Kaynaklı Hastalıklar
- Pire alerjisi dermatiti (PAD)
- Dipylidium caninum (şerit paraziti) - pire yutularak bulaşır
- Anemi (ağır enfestasyonda, özellikle yavru hayvanlarda)
- Mycoplasma haemofelis (kedilerde)

## Keneler

### Kene Belirtileri
- Deride yapışmış kene (genellikle kulak, boyun, pati araları)
- Kene yapışma noktasında kızarıklık ve şişlik
- Kaşıntı
- Ağır enfestasyonda halsizlik

### Kene Kaynaklı Hastalıklar
- **Babesiosis (Piroplazmoz)**: Kırmızı kan hücrelerini yıkarak ağır anemi oluşturur
- **Ehrlichiosis**: Ateş, iştahsızlık, kanama eğilimi
- **Anaplasmosis**: Ateş, eklem ağrıları, halsizlik
- **Lyme hastalığı (Borreliosis)**: Topallama, ateş, eklem şişliği
- **Hepatozoonosis**: Ateş, kas ağrıları, kilo kaybı

## Kene Kaynaklı Hastalık Belirtileri

- Ani ateş yükselmesi
- İştahsızlık
- Halsizlik ve letarji
- Soluk mukozalar (anemi belirtisi)
- Burun kanaması, cilt altı kanamalar
- Topallama ve eklem ağrıları
- Koyu renkli idrar (hemoglobinüri)
- Sarılık

## Teşhis Yöntemleri

- Kan yayması incelemesi (parazitlerin mikroskobik tespiti)
- SNAP 4Dx testi (Ehrlichia, Anaplasma, Lyme, Heartworm)
- Hemogram (anemi ve trombositopeni değerlendirmesi)
- Biyokimya paneli

## Korunma

### Düzenli Dış Parazit Koruması
- Aylık spot-on (damlama) preparatları
- Kene-pire tasmaları
- Oral çiğneme tabletleri
- Düzenli uygulama takvimi oluşturun

### Çevre Kontrolü
- Ev ve yaşam alanının düzenli temizliği
- Çim ve bahçe bakımı
- Kene yoğun bölgelerden kaçınma
- Köpek yatağının düzenli yıkanması

### Kontrol Alışkanlıkları
- Her dış gezi sonrası kene kontrolü yapın
- Özellikle kulak, boyun, pati araları ve kasık bölgesini kontrol edin
- Keneyi uygun yöntemle çıkarın (kene çıkarma pensesi ile)
- Keneleri asla elle ezmeden, uygun şekilde imha edin

## İlkbahar ve Yaz Uyarısı

Kene ve pire aktivitesi ilkbahar ve yaz aylarında doruğa ulaşır. Ankara ve çevresinde özellikle Mart-Kasım arası dönemde parazit korumasına ekstra dikkat edilmelidir.

Anka Veteriner Kliniği'nde evcil hayvanınız için en uygun parazit koruma programını belirliyoruz.`,
    category: 'Köpek',
    date: '2026-02-01',
    readTime: '8 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Kene ve pire kaynaklı hastalıkların belirtileri ve etkili korunma yöntemleri hakkında her şey.',
  },

  'kedilerde-asi-takvimi': {
    title: 'Kedilerde Aşı Takvimi: 2026 Güncel Rehber',
    content: `Kedilerin sağlığını korumak için düzenli aşılama programı büyük önem taşır. Uzm. Vet. Hek. İbrahim Yıldırım olarak, kedilerde uygulanması gereken aşıları ve takvimlerini açıklıyorum.

## Yavru Kedi Aşı Takvimi

### 6-8 Hafta
- İlk karma aşı (Feline Panleukopenia, Calicivirus, Rhinotracheitis)

### 10-12 Hafta
- İkinci karma aşı
- FeLV (Feline Lösemi Virüsü) - ilk doz

### 14-16 Hafta
- Üçüncü karma aşı
- FeLV - ikinci doz
- Kuduz aşısı

### 6 Ay
- Kısırlaştırma öncesi genel değerlendirme

## Yetişkin Kedi Aşıları

- **Yıllık karma aşı**: Panleukopenia, Calicivirus, Rhinotracheitis
- **Yıllık kuduz aşısı**: Yasal zorunluluk ve korunma
- **FeLV aşısı**: Risk grubundaki kediler için yıllık

## Temel Aşılar ve Korudukları Hastalıklar

### Feline Panleukopenia (Kedi Distemper)
- Son derece bulaşıcı ve ölümcül viral hastalık
- Kusma, ishal, dehidratasyon, lökopeni
- Çevre koşullarına çok dayanıklı

### Feline Calicivirus (FCV)
- Üst solunum yolu enfeksiyonu
- Ağız ülserleri, hapşırma, burun akıntısı
- Kronik taşıyıcılık gelişebilir

### Feline Rhinotracheitis (Herpesvirus - FHV-1)
- Kedi nezlesi olarak da bilinir
- Hapşırma, göz akıntısı, ateş
- Stres dönemlerinde tekrarlayabilir

### Kuduz
- Ölümcül viral hastalık
- İnsanlara da bulaşabilir (zoonotik)
- Yasal olarak zorunlu aşı

### Feline Lösemi Virüsü (FeLV)
- Bağışıklık sistemini baskılayan retroviral hastalık
- Dış mekan kedileri ve çok kedili evlerde risk yüksek
- Aşılama öncesi FeLV testi önerilir

## Aşılama Öncesi Dikkat Edilecekler

- Aşıdan önce iç ve dış parazit kontrolü yapılmalı
- Hasta kedilere aşı uygulanmamalı
- Hamile kedilere canlı aşı yapılmamalı
- Aşı sonrası 24-48 saat hafif yan etkiler normal olabilir (iştahsızlık, hafif ateş)

## Aşı Sonrası İzleme

- Aşı sonrası 30 dakika klinikte bekletme önerilir
- Nadiren alerjik reaksiyon gelişebilir (yüz şişmesi, kusma, nefes darlığı)
- Aşı bölgesinde geçici şişlik normal olabilir
- 48 saat içinde geçmeyen belirtilerde veterinere başvurun

## İç Mekan vs. Dış Mekan Kediler

İç mekan kediler daha az riske maruz kalsa da, temel aşılar (karma + kuduz) mutlaka yapılmalıdır. Veteriner ziyaretinde veya kaçma durumunda enfeksiyon riski vardır. Dış mekan kedileri için FeLV ve FIV test taraması önerilir.

Anka Veteriner Kliniği'nde kediniz için kişiselleştirilmiş aşılama programı oluşturuyoruz.`,
    category: 'Kedi',
    date: '2026-01-28',
    readTime: '7 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Yavru ve yetişkin kedilerde uygulanması gereken zorunlu ve isteğe bağlı aşılar hakkında bilmeniz gerekenler.',
  },

  'kopeklerde-capraz-bag-yirtigi-belirtileri': {
    title: 'Köpeklerde Çapraz Bağ Yırtığı: Belirtiler ve Tanı',
    content: `Cranial cruciate ligament (CCL) yırtığı, köpeklerde en sık karşılaşılan ortopedik sorunlardan biridir. Uzm. Vet. Hek. İbrahim Yıldırım olarak, çapraz bağ yırtığının belirtilerini ve tanı yöntemlerini paylaşıyorum.

## Çapraz Bağ Nedir?

Diz eklemi içindeki cranial cruciate ligament (ön çapraz bağ), tibia kemiğinin öne kaymasını engeller ve diz stabilitesini sağlar. Bu bağın yırtılması veya zayıflaması, diz instabilitesine ve zamanla menisküs hasarı ile artroze yol açar.

## Belirtiler

### Akut (Ani) Yırtık
- Ani topallama (arka bacakta)
- Yere basamama veya parmak ucunda basma
- Diz bölgesinde şişlik
- Ağrı belirtileri (inleme, dokunulduğunda tepki)
- Aktivite azalması

### Kronik (Kademeli) Yırtık
- Yavaş gelişen, giderek artan topallama
- Egzersiz sonrası şiddetlenen aksama
- Dinlenme sonrası sertlik ("sıcak başlangıç" topallığı)
- Arka bacak kas erimesi
- Oturma pozisyonunda anormallik (bacağı yana uzatma)
- Merdiven çıkma ve atlama güçlüğü

### İki Taraflı Yırtık (Her İki Diz)
- Vakaların yaklaşık %40-60'ında karşı diz de etkilenir
- Arka bacaklarda genel güçsüzlük
- Kalkmakta ve yürümekte belirgin zorluk

## Risk Faktörleri

- **Irk**: Labrador Retriever, Golden Retriever, Rottweiler, Newfoundland
- **Obezite**: Ekleme aşırı yük biner
- **Yaş**: Orta yaşlı ve yaşlı köpeklerde daha sık
- **Fiziksel yapı**: Dik tibial plato açısı
- **Ani hareket**: Ani dönüş, atlama ve oyun sırasında
- **Önceki yırtık**: Bir diz yırtıldığında diğerinin de yırtılma riski %40-60

## Teşhis Yöntemleri

### Klinik Muayene
- **Drawer (Çekmece) testi**: Tibianın öne kayıp kaymadığını değerlendiren test
- **Tibial thrust (Tibial kompresyon) testi**: Ayak bükülürken tibianın öne itilmesi
- Diz şişliği ve ağrı değerlendirmesi
- Kas kitlesi karşılaştırması

### Röntgen
- Diz eklemi efüzyonu (sıvı birikimi)
- Tibia ileri pozisyonu
- Artrotik değişiklikler
- Tibial plato açısı ölçümü (cerrahi planlama için)

### İleri Görüntüleme
- MRI: Menisküs hasarı ve yumuşak doku değerlendirmesi
- Artroskopi: Eklem içi doğrudan görüntüleme

## Ne Zaman Veterinere Gidilmeli?

Köpeğinizde ani veya kademeli gelişen arka bacak topallığı, diz şişliği veya yürüme güçlüğü fark ettiğinizde veteriner ortopedi muayenesi yaptırın. Erken tanı, menisküs hasarını ve artrozun ilerlemesini önlemek açısından kritiktir.

Anka Veteriner Kliniği olarak dijital röntgen ve ortopedik muayene ile çapraz bağ yırtığının doğru tanısını koyuyoruz.`,
    category: 'Köpek',
    date: '2026-01-20',
    readTime: '8 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Köpeklerde en sık görülen ortopedik sorunlardan biri olan çapraz bağ yırtığının belirtileri ve tanı yöntemleri.',
  },

  'kopeklerde-cilt-hastaliklari-belirtileri': {
    title: 'Köpeklerde Cilt Hastalıkları: Belirtiler ve Ne Zaman Veterinere Gidilmeli?',
    content: `Cilt hastalıkları, köpeklerde veteriner kliniklerine en sık başvuru nedenlerinden biridir. Uzm. Vet. Hek. İbrahim Yıldırım olarak, sık karşılaşılan cilt sorunlarının belirtilerini paylaşıyorum.

## Yaygın Cilt Hastalıkları ve Belirtileri

### Bakteriyel Deri Enfeksiyonları (Pyoderma)
- Kızarık, kabuklu lezyonlar
- İltihaplı sivilce benzeri yapılar
- Kötü koku
- Tüy dökülmesi
- Kaşıntı

### Mantar Enfeksiyonları (Dermatofitozis)
- Yuvarlak, tüysüz lekeler
- Pullanma ve kabuklanma
- Hafif kaşıntı
- Tırnakta kalınlaşma ve kırılganlık
- İnsanlara bulaşabilir (zoonotik)

### Demodikozis (Demodeks Uyuzu)
- Yavru köpeklerde sık görülür
- Tüy dökülmesi (genellikle yüz ve ön bacaklarda başlar)
- Kızarıklık ve kabuklanma
- Şiddetli vakalarda bakteriyel enfeksiyon eşlik eder

### Sarkoptik Uyuz (Scabies)
- Çok şiddetli kaşıntı
- Kulak kenarı, dirsek, karın bölgesinde lezyonlar
- Kabuklanma ve kalınlaşma
- İnsanlara geçici bulaşabilir

### Sıcak Noktalar (Hot Spot)
- Ani başlangıçlı, nemli, kızarık lezyon
- Şiddetli kaşıntı ve yalama
- Hızla büyüyen iltihaplı alan
- Uzun tüylü ırklarda sık görülür

## Kaşıntının Yaygın Nedenleri

- Pire ve kene enfestasyonu
- Alerjiler (gıda, çevresel, kontakt)
- Deri enfeksiyonları (bakteri, mantar)
- Parazitler (uyuz)
- Hormonal bozukluklar
- Stres kaynaklı yalama

## Teşhis Yöntemleri

### Deri Kazıntısı
Deriden alınan kazıntı örneği mikroskop altında parazit, mantar ve hücre incelemesi yapılır.

### Mantar Kültürü
Dermatofitozis şüphesinde mantar türünün belirlenmesi için kültür yapılır.

### Sitoloji
Lezyondan alınan örneğin boyama ile incelenmesi. Bakteriyel enfeksiyon ve maya (Malassezia) tespiti.

### Wood Lambası
Bazı mantar türlerinin UV ışık altında floresan vermesi ile hızlı tarama.

### Biyopsi
Kronik veya atipik lezyonlarda histopatolojik inceleme.

## Ne Zaman Veterinere Gidilmeli?

- Kaşıntı 48 saatten fazla sürüyorsa
- Tüy dökülmesi yaygınlaşıyorsa
- Cilt lezyonları büyüyorsa veya çoğalıyorsa
- Kötü koku varsa
- Yara oluşmuşsa
- İştahsızlık eşlik ediyorsa

Anka Veteriner Kliniği'nde dermatoloji alanında kapsamlı muayene ve tanı hizmetleri sunuyoruz.`,
    category: 'Köpek',
    date: '2024-09-25',
    readTime: '8 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Köpeklerde sık görülen cilt hastalıklarının belirtileri, nedenleri ve ne zaman profesyonel yardım almanız gerektiği.',
  },

  'kedilerde-goz-hastaliklari': {
    title: 'Kedilerde Göz Hastalıkları: Belirtiler ve Erken Teşhis',
    content: `Göz hastalıkları kedilerde oldukça yaygındır ve zamanında fark edilmezse kalıcı görme kaybına yol açabilir. Uzm. Vet. Hek. İbrahim Yıldırım olarak, kedilerde göz hastalıklarının belirtilerini tanımanın önemini vurguluyorum.

## Yaygın Göz Hastalıkları

### Konjonktivit (Göz İltihabı)
- En sık görülen göz sorunu
- Viral (herpesvirus), bakteriyel veya alerjik kökenli olabilir
- Genellikle üst solunum yolu enfeksiyonlarına eşlik eder

### Kornea Ülseri
- Gözün saydam tabakasında yara
- Travma, enfeksiyon veya kuru göz kaynaklı
- Ağrılı ve acil müdahale gerektirebilir

### Glokom (Göz İçi Basınç Artışı)
- Göz içi sıvının birikmesi sonucu basınç artışı
- Görme sinirinde kalıcı hasar riski
- Acil müdahale gerektirir

### Katarakt
- Göz merceğinin opaklaşması
- Yaşlı kedilerde daha sık
- İlerleyici görme kaybı

### Üveit (Göz İç Tabakası İltihabı)
- FIP, FeLV, FIV gibi sistemik hastalıklara eşlik edebilir
- Göz renginde değişiklik
- Ciddi ve önemi büyük bir bulgu

## Belirtiler

- Göz akıntısı (berrak, sarı veya yeşil)
- Gözü kısma veya kapatma
- Göz kızarıklığı
- Göz büyümesi veya şişmesi
- Göz bebeğinde boyut farklılığı
- Üçüncü göz kapağının görünür olması
- Gözü sürekli ovuşturma (patileri ile)
- Bulanık veya beyazlaşmış kornea
- Gözde kanlı görünüm
- Işığa hassasiyet
- Görmede azalma (nesnelere çarpma)

## Risk Faktörleri

- Brakisefal (basık yüzlü) ırklar (Persian, Exotic Shorthair)
- Kronik herpesvirus taşıyıcısı kediler
- FeLV veya FIV pozitif kediler
- Yaşlı kediler
- Dış mekan kedileri (travma riski)

## Teşhis Yöntemleri

### Göz Muayenesi
- Oftalmoskopi ile göz dibi incelemesi
- Pupilla refleks testi
- Görsel takip değerlendirmesi

### Fluoresein Boyama Testi
Kornea ülserlerinin tespiti için floresan boya damlatılır.

### Tonometri
Göz içi basınç ölçümü (glokom tanısı için kritik).

### Schirmer Gözyaşı Testi
Gözyaşı üretiminin yeterliliğini ölçer (kuru göz tanısı).

### Kan Tahlili
Sistemik hastalık kaynaklı göz sorunlarında (FIP, FeLV, FIV, toksoplazmoz) gereklidir.

## Ne Zaman Acil Veterinere Gidilmeli?

- Ani göz kapanması
- Göz büyümesi
- Gözde görünür yara
- Ani görme kaybı belirtileri
- Yoğun kanlı akıntı

Anka Veteriner Kliniği'nde göz hastalıklarının tanısı için tonometri, oftalmoskopi ve fluoresein testi dahil kapsamlı göz muayenesi yapıyoruz.`,
    category: 'Kedi',
    date: '2024-09-18',
    readTime: '7 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Kedilerde sık görülen göz hastalıklarının belirtilerini tanımak ve zamanında müdahale etmek için bilmeniz gerekenler.',
  },

  'evcil-hayvanlarda-zehirlenme-belirtileri': {
    title: 'Evcil Hayvanlarda Zehirlenme: Belirtiler ve Acil Müdahale',
    content: `Ev ortamında pek çok madde evcil hayvanlar için tehlikeli olabilir. Uzm. Vet. Hek. İbrahim Yıldırım olarak, zehirlenme belirtilerini tanımanızı ve acil durumda yapmanız gerekenleri paylaşıyorum.

## Evdeki Tehlikeli Maddeler

### İnsan İlaçları
- Parasetamol (kediler için çok tehlikeli)
- İbuprofen ve aspirin
- Antidepresanlar
- Kalp ilaçları

### Gıdalar
- Çikolata (teobromin zehirlenmesi)
- Üzüm ve kuru üzüm (böbrek yetmezliği riski)
- Soğan ve sarımsak (kırmızı kan hücresi hasarı)
- Ksilitol (şekersiz ürünlerde bulunan tatlandırıcı)
- Alkol
- Kafein
- Makadamya cevizi

### Bitkiler
- Zambak (kedilerde böbrek yetmezliği - çok tehlikeli!)
- Alokazya
- Difenbahya
- Oleander
- Azalea

### Kimyasallar
- Antifriz (etilen glikol - çok tehlikeli!)
- Fare ve böcek zehirleri
- Temizlik ürünleri
- Gübreler ve böcek ilaçları

## Zehirlenme Belirtileri

### Sindirim Sistemi Belirtileri
- Kusma (bazen kanlı)
- İshal
- Aşırı salyalama
- İştahsızlık
- Karın ağrısı

### Nörolojik Belirtiler
- Titreme ve kasılma
- Nöbet
- Koordinasyon bozukluğu (sallantılı yürüyüş)
- Konfüzyon
- Bilinç kaybı

### Kardiyovasküler Belirtiler
- Hızlı veya yavaş kalp atışı
- Soluk veya siyanotik mukozalar
- Hipotansiyon

### Diğer Belirtiler
- Aşırı susama ve idrara çıkma
- Solunum güçlüğü
- Pupillalarda genişleme veya daralma
- Sarılık
- Kanamalar (fare zehiri kaynaklı)

## Acil Durumda Ne Yapılmalı?

- **Sakin olun** ve panik yapmayın
- **Zehirli maddeyi tespit edin** (ambalajı saklayın)
- **Hayvanı maddeden uzaklaştırın**
- **Hemen veteriner kliniğini arayın** (0554 855 05 90)
- **Kendi başınıza kusturma yapmayın** (bazı maddeler kusturulmamalıdır)
- **Veterinere giderken süreyi, miktarı ve maddeyi not edin**

## Yapılmaması Gerekenler

- Veterinere danışmadan kusturma yapmayın
- Süt veya su içirmeyin (veteriner onayı olmadan)
- Beklemeyin, "kendiliğinden geçer" demeyin
- Zaman kaybetmeyin

## Korunma Önerileri

- İlaçları kilitli dolapta saklayın
- Tehlikeli gıdaları erişilmez yerde tutun
- Zehirli bitkileri evden uzaklaştırın
- Temizlik ürünlerini güvenli yerde saklayın
- Çöp kutularını kapalı tutun
- Bahçede fare zehiri kullanırken dikkatli olun
- Antifriz döküntülerini hemen temizleyin

## Acil Durumda

Anka Veteriner Kliniği olarak 7/24 acil hizmetimizle zehirlenme vakalarına hızlı müdahale ediyoruz. Zaman hayat kurtarır, şüphe durumunda hemen arayın!`,
    category: 'Genel',
    date: '2024-09-10',
    readTime: '9 dk',
    author: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    excerpt: 'Ev ortamındaki tehlikeli maddeler, zehirlenme belirtileri ve acil durumda yapmanız gerekenler.',
  },

  'yurt-disi-cikis-islemleri': { title: 'Evcil Hayvanlarla Yurt Dışı Çıkış İşlemleri: 2026 Rehberi', content: `Evcil hayvanınızla yurt dışına seyahat etmek istiyorsanız, belirli prosedürleri önceden tamamlamanız gerekmektedir.\n\n## Gerekli Belgeler\n\n- Evcil hayvan pasaportu\n- Mikroçip (ISO 11784/11785 uyumlu)\n- Kuduz aşı sertifikası (en az 21 gün önce yapılmış)\n- Sağlık sertifikası (seyahat tarihinden en fazla 10 gün önce)\n- Gidilecek ülkenin özel gereksinimleri\n\n## Mikroçip Uygulaması\n\nTüm aşı ve sağlık kayıtları mikroçip numarasına bağlanmalıdır. Mikroçip uygulaması aşılamadan önce veya aynı gün yapılmalıdır.\n\n## Kuduz Aşısı ve Antikor Testi\n\n- Kuduz aşısı mikroçip uygulamasından sonra yapılmalıdır\n- AB ülkeleri için kuduz antikor titresi testi gerekebilir\n- Test sonucu en az 0.5 IU/ml olmalıdır\n- Test sonuçları 3-4 hafta sürebilir, erken planlama önemlidir\n\n## Ülkelere Göre Özel Gereksinimler\n\n### Avrupa Birliği Ülkeleri\n- EU Pet Passport veya veteriner sağlık sertifikası\n- Kuduz aşısı (en az 21 gün önce)\n- Mikroçip zorunlu\n- Bazı ülkelerde şerit parazit uygulaması (İngiltere, İrlanda)\n\n### ABD ve Kanada\n- Kuduz aşı sertifikası\n- Sağlık sertifikası\n- Bazı eyaletlerde ek gereksinimler olabilir\n\n## Uçuş Öncesi Hazırlıklar\n\n- Havayolu şirketinin evcil hayvan politikasını kontrol edin\n- IATA onaylı taşıma kabini temin edin\n- Uçuştan 4-6 saat önce beslemeyi kesin\n- Sakinleştirici kullanımı için veterinerinize danışın\n\n## Önemli Uyarılar\n\n- İşlemlere en az 4 ay önceden başlayın\n- Tüm belgelerin güncel ve eksiksiz olduğundan emin olun\n- Gidilecek ülkenin karantina politikalarını araştırın\n- Dönüş için de gerekli belgeleri hazırlayın\n\nAnka Veteriner Kliniği olarak yurt dışı seyahat işlemlerinizin tüm aşamalarında yanınızdayız.`, category: 'Genel', date: '2026-01-10', readTime: '10 dk', author: 'Uzm. Vet. Hek. Özge Yıldırım', excerpt: 'Evcil hayvanınızla yurt dışına seyahat ederken gerekli belgeler, aşılar, mikroçip ve gümrük prosedürleri hakkında detaylı bilgi.' },

  'kopeklerde-asi-takvimi': { title: 'Köpeklerde Aşı Takvimi: 2026 Güncel Rehber', content: `Köpeğinizin sağlığını korumak için düzenli aşılama programına uyulması çok önemlidir.\n\n## Yavru Köpek Aşı Takvimi\n\n- 6-8 Hafta: İlk karma aşı\n- 10-12 Hafta: İkinci karma aşı\n- 14-16 Hafta: Üçüncü karma aşı + Kuduz\n- 6 Ay: Rapel aşılar\n\n## Yetişkin Köpek Aşıları\n\nYılda bir kez karma ve kuduz aşısı yaptırılmalıdır. Lyme aşısı kene riski olan bölgelerde önerilmektedir.\n\n## Lyme Aşısı\n\n- Kene kaynaklı Lyme hastalığına karşı koruma sağlar\n- 12. haftadan itibaren uygulanabilir\n- Yıllık tekrar dozu gereklidir\n- Özellikle kırsal alanlarda yaşayan köpekler için önerilir\n\n## Bronşit (Kennel Cough)\n\nBordetella bronchiseptica ve parainfluenza virüsünün neden olduğu bulaşıcı bir solunum yolu enfeksiyonudur. Özellikle kalabalık ortamlarda hızla yayılır. Öksürük, burun akıntısı ve halsizlik gibi belirtiler görülür. Aşılama ile önlenebilir.\n\n## Coronavirus\n\nKöpeklerde coronavirus sindirim sistemini etkiler; ishal, kusma ve iştahsızlık gibi belirtilere yol açar. Özellikle yavru köpeklerde daha ağır seyredebilir. Leptospiroz aşısı ile birlikte uygulanabilir.\n\n## Önemli Notlar\n\n- Aşı öncesi parazit kontrolü yapılmalıdır\n- Hasta veya hamile köpeklere aşı uygulanmamalıdır\n- Aşı sonrası 24-48 saat gözlem gereklidir`, category: 'Köpek', date: '2026-01-15', readTime: '6 dk', author: 'Uzm. Vet. Hek. Özge Yıldırım', excerpt: 'Yavru ve yetişkin köpeklerde uygulanması gereken aşılar ve takvimi hakkında kapsamlı bilgiler. Karma, kuduz, Lyme ve diğer aşılar.' },

  'kedilerde-beslenme': { title: 'Kedilerde Doğru Beslenme: Sağlıklı Mama Seçimi', content: `Kediler zorunlu karnivor hayvanlardır ve protein ağırlıklı beslenmeye ihtiyaç duyarlar.\n\n## Yaşa Göre Beslenme\n\n### Yavru Kedi (0-12 ay)\n- Yüksek proteinli yavru maması\n- Günde 3-4 öğün\n\n### Yetişkin Kedi (1-7 yaş)\n- Dengeli yetişkin maması\n- Günde 2 öğün\n\n### Yaşlı Kedi (7+ yaş)\n- Düşük kalorili, eklem destekli mama\n\n## Dikkat Edilmesi Gerekenler\n\n- Temiz su her zaman ulaşılabilir olmalı\n- İnsan yemekleri verilmemeli\n- Ani mama değişikliklerinden kaçınılmalı`, category: 'Kedi', date: '2024-11-20', readTime: '7 dk', author: 'Vet. Hek. Emel Eda Şahin', excerpt: 'Kedilerin yaşlarına ve ihtiyaçlarına göre doğru beslenme ve mama seçimi rehberi.' },

  'kis-aylarinda-evcil-hayvan-bakimi': { title: 'Kış Aylarında Evcil Hayvan Bakımı', content: `Kış aylarında evcil hayvanlarınızın sağlığını korumak için ekstra önlemler almanız gerekir.\n\n## Soğuktan Koruma\n\n- Kısa tüylü ırklar için kıyafet kullanın\n- Dış mekanda barınak sağlayın\n- Pati bakımına dikkat edin\n\n## Beslenme\n\n- Soğuk havalarda kalori ihtiyacı artar\n- Taze su erişimini sağlayın\n\n## Sağlık Kontrolleri\n\n- Kış öncesi check-up yaptırın\n- Aşılarını kontrol edin\n- Parazit korumasına devam edin`, category: 'Genel', date: '2024-11-15', readTime: '5 dk', author: 'Uzm. Vet. Hek. Özge Yıldırım', excerpt: 'Soğuk havalarda evcil hayvanlarınızı korumak için almanız gereken önlemler.' },

  'kopeklerde-dis-sagligi': { title: 'Köpeklerde Diş Sağlığı ve Bakımı', content: `Köpeklerde diş sağlığı genel sağlığın önemli bir göstergesidir.\n\n## Diş Hastalıkları\n\n- Diş taşı oluşumu\n- Diş eti iltihabı\n- Diş çürükleri\n- Ağız kokusu\n\n## Koruyucu Önlemler\n\n- Haftada 2-3 kez diş fırçalama\n- Diş bakım ürünleri kullanma\n- Çiğneme oyuncakları sağlama\n- Düzenli veteriner kontrolleri\n\n## Profesyonel Temizlik\n\nYılda en az bir kez profesyonel diş temizliği (detartraj) yaptırılmalıdır.`, category: 'Köpek', date: '2024-11-08', readTime: '6 dk', author: 'Vet. Hek. Emel Eda Şahin', excerpt: 'Köpeklerde diş taşı, diş eti hastalıkları ve ağız bakımı hakkında kapsamlı bilgi.' },

  'kedilerde-stres-belirtileri': { title: 'Kedilerde Stres Belirtileri ve Çözüm Yolları', content: `Kediler strese karşı hassas hayvanlardır ve stres belirtilerini tanımak önemlidir.\n\n## Stres Belirtileri\n\n- Aşırı tüy dökme\n- İştahsızlık veya aşırı yeme\n- Saklanma davranışı\n- Saldırganlık\n- Uygunsuz tuvaleti\n\n## Çözüm Önerileri\n\n- Sakin ve düzenli bir ortam sağlayın\n- Yüksekte tırmanma alanları oluşturun\n- Oyun zamanı ayırın\n- Feliway gibi feromonlar kullanın`, category: 'Kedi', date: '2024-10-30', readTime: '7 dk', author: 'Vet. Hek. Emel Eda Şahin', excerpt: 'Kedinizin stresli olduğunu nasıl anlarsınız? Stres kaynaklarını ve çözüm önerilerini keşfedin.' },

  'yavru-kopek-egitimi': { title: 'Yavru Köpek Eğitimi: İlk Adımlar', content: `Yavru köpek eğitimi, erken dönemde başladığında en iyi sonuçları verir.\n\n## Temel Eğitim\n\n- Tuvalet eğitimi\n- Otur, bekle, gel komutları\n- Tasma eğitimi\n- Sosyalleşme\n\n## İpuçları\n\n- Pozitif pekiştirme kullanın\n- Tutarlı olun\n- Kısa seanslar halinde çalışın\n- Sabırlı olun`, category: 'Köpek', date: '2024-10-22', readTime: '8 dk', author: 'Uzm. Vet. Hek. Özge Yıldırım', excerpt: 'Yavru köpeğinizi eğitirken dikkat etmeniz gereken temel konular ve pratik ipuçları.' },

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
    keywords: `${post.category}, veteriner, evcil hayvan, ${post.title.split(':')[0]}, Batıkent veteriner`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'tr_TR',
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: { canonical: `https://batikentankavet.com/blog/${slug}` },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) notFound();

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Anka Veteriner Kliniği',
      url: 'https://batikentankavet.com',
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `https://batikentankavet.com/blog/${slug}`,
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    inLanguage: 'tr',
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />

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
              <ShareButton title={post.title} url={`https://batikentankavet.com/blog/${slug}`} />
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
