'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const galleryImages = [
  { src: '/images/clinic/anka-vet-ekip.png' },
  { src: '/images/team/ibrahim-yildirim-2.jpeg' },
  { src: '/images/team/ozge-yildirim-2.jpeg' },
  { src: '/images/team/emel-eda-sahin-2.jpeg' },
  { src: '/images/hero/klinik-dis.jpeg' },
  { src: '/images/clinic/bekleme-alani.jpeg' },
  { src: '/images/clinic/danisma.jpeg' },
  { src: '/images/clinic/klinik-ici.jpeg' },
  { src: '/images/surgery/ameliyathane.jpeg' },
  { src: '/images/surgery/ameliyathane-ici.jpeg' },
  { src: '/images/surgery/ameliyathane-ekipman.jpeg' },
  { src: '/images/surgery/operasyon.jpeg' },
  { src: '/images/surgery/operasyon-2.jpeg' },
  { src: '/images/surgery/operasyon-3.jpeg' },
  { src: '/images/surgery/kedi-ameliyati.jpeg' },
  { src: '/images/lab/laboratuvar.jpeg' },
  { src: '/images/lab/laboratuvar-ekipman.jpeg' },
  { src: '/images/lab/laboratuvar-ekipman-2.jpeg' },
  { src: '/images/equipment/profesyonel-ekipman.jpeg' },
  { src: '/images/equipment/cihazlar.jpeg' },
  { src: '/images/equipment/ekg.jpeg' },
  { src: '/images/equipment/anestezi-ekipman.jpeg' },
  { src: '/images/equipment/sterilizator.jpeg' },
  { src: '/images/equipment/kan-sayim-cihazi.jpeg' },
  { src: '/images/equipment/kuvez.jpeg' },
  { src: '/images/gallery/ultrason.jpeg' },
  { src: '/images/gallery/ultrason-bolumu.jpeg' },
  { src: '/images/gallery/rontgen-goruntusu.jpeg' },
  { src: '/images/gallery/mikroskobik-goruntuler.jpeg' },
  { src: '/images/gallery/mikroskobik-inceleme.jpeg' },
  { src: '/images/gallery/mikroskoplar.jpeg' },
  { src: '/images/team/uzman-hekimlerimiz.jpeg' },
  { src: '/images/team/hekimimiz.jpeg' },
  { src: '/images/team/hekim-klinik-mudahale.jpeg' },
  { src: '/images/services/kopek-muayene.jpeg' },
  { src: '/images/services/detartraj.jpeg' },
  { src: '/images/services/agiz-dis/agiz-dis-1.jpeg' },
  { src: '/images/services/agiz-dis/agiz-dis-2.jpeg' },
  { src: '/images/services/agiz-dis/agiz-dis-3.jpeg' },
  { src: '/images/services/agiz-dis/agiz-dis-4.jpeg' },
  { src: '/images/services/agiz-dis/agiz-dis-5.jpeg' },
  { src: '/images/services/agiz-dis/agiz-dis-6.jpeg' },
  { src: '/images/services/eklem-cerrahi/eklem-cerrahi-1.jpeg' },
  { src: '/images/services/eklem-cerrahi/eklem-cerrahi-2.jpeg' },
  { src: '/images/services/eklem-cerrahi/eklem-cerrahi-3.jpeg' },
  { src: '/images/services/ekokardiyografi/ekokardiyografi-1.jpeg' },
  { src: '/images/services/ekokardiyografi/ekokardiyografi-2.jpeg' },
  { src: '/images/services/ekokardiyografi/ekokardiyografi-3.jpeg' },
  { src: '/images/services/ekokardiyografi/ekokardiyografi-4.jpeg' },
  { src: '/images/services/endoskopi/endoskopi-1.jpeg' },
  { src: '/images/services/endoskopi/endoskopi-2.jpeg' },
  { src: '/images/services/endoskopi/endoskopi-3.jpeg' },
  { src: '/images/services/goz/goz-1.jpeg' },
  { src: '/images/services/goz/goz-2.jpeg' },
  { src: '/images/services/goz/goz-3.jpeg' },
  { src: '/images/services/goz/goz-4.jpeg' },
  { src: '/images/services/laboratuvar/lab-1.jpeg' },
  { src: '/images/services/laboratuvar/lab-2.jpeg' },
  { src: '/images/services/laboratuvar/lab-3.jpeg' },
  { src: '/images/services/laboratuvar/lab-4.jpeg' },
  { src: '/images/services/laboratuvar/lab-5.jpeg' },
  { src: '/images/services/laboratuvar/lab-6.jpeg' },
  { src: '/images/services/laboratuvar/lab-7.jpeg' },
  { src: '/images/services/laboratuvar/lab-8.jpeg' },
  { src: '/images/services/laboratuvar/lab-9.jpeg' },
  { src: '/images/services/operasyon/operasyon-1.jpeg' },
  { src: '/images/services/operasyon/operasyon-2.jpeg' },
  { src: '/images/services/operasyon/operasyon-3.jpeg' },
  { src: '/images/services/operasyon/operasyon-4.jpeg' },
  { src: '/images/services/operasyon/operasyon-5.jpeg' },
  { src: '/images/services/sitoloji/sitoloji-1.jpeg' },
  { src: '/images/services/sitoloji/sitoloji-2.jpeg' },
  { src: '/images/services/sitoloji/sitoloji-3.jpeg' },
  { src: '/images/services/sitoloji/sitoloji-4.jpeg' },
  { src: '/images/services/sitoloji/sitoloji-5.jpeg' },
  { src: '/images/services/sitoloji/sitoloji-6.jpeg' },
  { src: '/images/services/sitoloji/sitoloji-7.jpeg' },
  { src: '/images/services/sitoloji/sitoloji-8.jpeg' },
  { src: '/images/services/sitoloji/sitoloji-9.jpeg' },
  { src: '/images/services/sitoloji/sitoloji-10.jpeg' },
  { src: '/images/services/ultrasonografi/ultrasonografi-1.jpeg' },
  { src: '/images/services/ultrasonografi/ultrasonografi-2.jpeg' },
  { src: '/images/services/ultrasonografi/ultrasonografi-3.jpeg' },
  { src: '/images/services/xray/xray-1.jpeg' },
  { src: '/images/services/xray/xray-2.jpeg' },
];

export default function GaleriPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Galeri</h1>
            <p className="text-lg text-primary-100">Kliniğimizden görüntüler</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={img.src} delay={i * 0.02}>
                <button onClick={() => setLightbox(i)} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer w-full">
                  <Image src={img.src} alt={`Anka Veteriner Kliniği - ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10">&times;</button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox(Math.max(0, lightbox - 1)); }} className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10">&lsaquo;</button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox(Math.min(galleryImages.length - 1, lightbox + 1)); }} className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10">&rsaquo;</button>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[lightbox].src} alt={`Anka Veteriner Kliniği - ${lightbox + 1}`} fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}
    </>
  );
}
