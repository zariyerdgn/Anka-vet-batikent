export interface LocationData {
  slug: string;
  name: string;
  region: string;
  description: string;
  distanceFromCenter: string;
  services: string[];
  keywords: string[];
  population: string;
  isDistrict: boolean;
  address?: string;
  distance?: string;
}

export const locations: LocationData[] = [
  {
    slug: 'batikent',
    name: 'Batıkent',
    region: 'Ankara',
    description: 'Batıkent merkezinde bulunan kliniğimizde kedi, köpek, kuş gibi evcil hayvanlarınız için kapsamlı veteriner hizmeti sunuyoruz. Modern ekipmanlarımız ve deneyimli kadromuzla 7/24 hizmetinizdeyiz.',
    distanceFromCenter: 'Merkez',
    services: ['Klinik Muayene', 'Cerrahi', 'Aşılama', 'Kısırlaştırma', 'Diş Bakımı', 'Acil Veteriner'],
    keywords: ['Batıkent veteriner', 'Batıkent veteriner kliniği', 'Batıkent acil veteriner'],
    population: '200.000+',
    isDistrict: true,
    address: 'Batıkent, Yenimahalle/Ankara',
    distance: 'Merkez Klinik',
  },
  {
    slug: 'yenimahalle',
    name: 'Yenimahalle',
    region: 'Ankara',
    description: 'Yenimahalle bölgesinden kliniğimize kolayca ulaşabilirsiniz. Yenimahalle ve çevresindeki tüm evcil hayvan sahiplerine profesyonel veteriner hizmeti sunuyoruz.',
    distanceFromCenter: '5 km',
    services: ['Klinik Muayene', 'Cerrahi', 'Aşılama', 'Acil Veteriner'],
    keywords: ['Yenimahalle veteriner', 'Yenimahalle veteriner kliniği'],
    population: '700.000+',
    isDistrict: true,
    distance: '~10 dakika',
  },
  {
    slug: 'etimesgut',
    name: 'Etimesgut',
    region: 'Ankara',
    description: 'Etimesgut bölgesine yakın konumumuz sayesinde hızlıca ulaşabilirsiniz. Evcil hayvanlarınız için tüm veteriner hizmetlerimizden faydalanabilirsiniz.',
    distanceFromCenter: '8 km',
    services: ['Klinik Muayene', 'Cerrahi', 'Aşılama', 'Acil Veteriner'],
    keywords: ['Etimesgut veteriner', 'Etimesgut veteriner kliniği'],
    population: '600.000+',
    isDistrict: true,
    distance: '~15 dakika',
  },
  {
    slug: 'sincan',
    name: 'Sincan',
    region: 'Ankara',
    description: 'Sincan ilçesinden kliniğimize kolayca ulaşabilirsiniz. Sincan bölgesindeki evcil hayvanlar için kapsamlı veteriner hizmeti sunuyoruz.',
    distanceFromCenter: '12 km',
    services: ['Klinik Muayene', 'Cerrahi', 'Aşılama', 'Acil Veteriner'],
    keywords: ['Sincan veteriner', 'Sincan veteriner kliniği'],
    population: '500.000+',
    isDistrict: true,
    distance: '~20 dakika',
  },
  {
    slug: 'kecioren',
    name: 'Keçiören',
    region: 'Ankara',
    description: 'Keçiören bölgesinden Batıkent\'teki kliniğimize rahatça ulaşabilirsiniz. Evcil hayvanlarınız için detaylı muayene ve tedavi hizmetleri sunuyoruz.',
    distanceFromCenter: '10 km',
    services: ['Klinik Muayene', 'Cerrahi', 'Aşılama', 'Acil Veteriner'],
    keywords: ['Keçiören veteriner', 'Keçiören veteriner kliniği'],
    population: '900.000+',
    isDistrict: true,
    distance: '~20 dakika',
  },
  {
    slug: 'demetevler',
    name: 'Demetevler',
    region: 'Ankara',
    description: 'Demetevler\'den Batıkent\'e sadece birkaç dakika mesafede bulunan kliniğimizde tüm veteriner hizmetlerinden faydalanabilirsiniz.',
    distanceFromCenter: '3 km',
    services: ['Klinik Muayene', 'Cerrahi', 'Aşılama', 'Diş Bakımı'],
    keywords: ['Demetevler veteriner', 'Demetevler veteriner kliniği'],
    population: '150.000+',
    isDistrict: false,
    distance: '~5 dakika',
  },
  {
    slug: 'ostim',
    name: 'Ostim',
    region: 'Ankara',
    description: 'Ostim bölgesinden kliniğimize hızlıca ulaşabilirsiniz. İş yerinize en yakın veteriner kliniği olarak hizmetinizdeyiz.',
    distanceFromCenter: '6 km',
    services: ['Klinik Muayene', 'Aşılama', 'Acil Veteriner'],
    keywords: ['Ostim veteriner', 'Ostim yakınında veteriner'],
    population: '50.000+',
    isDistrict: false,
    distance: '~10 dakika',
  },
  {
    slug: 'eryaman',
    name: 'Eryaman',
    region: 'Ankara',
    description: 'Eryaman\'dan Batıkent\'e metro ile kolayca ulaşabilirsiniz. Evcil hayvanlarınız için profesyonel veteriner hizmeti sunuyoruz.',
    distanceFromCenter: '7 km',
    services: ['Klinik Muayene', 'Cerrahi', 'Aşılama', 'Pet Pansiyon'],
    keywords: ['Eryaman veteriner', 'Eryaman veteriner kliniği'],
    population: '300.000+',
    isDistrict: false,
    distance: '~12 dakika',
  },
  {
    slug: 'cayyolu',
    name: 'Çayyolu',
    region: 'Ankara',
    description: 'Çayyolu bölgesinden Batıkent\'teki kliniğimize ulaşarak evcil hayvanlarınız için profesyonel veteriner hizmeti alabilirsiniz.',
    distanceFromCenter: '15 km',
    services: ['Klinik Muayene', 'Cerrahi', 'Aşılama'],
    keywords: ['Çayyolu veteriner', 'Çayyolu veteriner kliniği'],
    population: '250.000+',
    isDistrict: false,
    distance: '~25 dakika',
  },
];
