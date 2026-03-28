'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideData {
  src: string;
  alt: string;
  badge: string;
  title: string;
  subtitle: string;
  type: 'team' | 'scene';
}

const slides: SlideData[] = [
  {
    src: '/images/clinic/anka-vet-ekip.png',
    alt: 'Anka Veteriner Kliniği Ekibi - Batıkent',
    badge: 'Ekibimiz',
    title: 'Anka Veteriner Kliniği',
    subtitle: 'Uzman kadromuzla evcil dostlarınızın yanındayız',
    type: 'scene',
  },
  {
    src: '/images/team/vet-ibrahim-yildirim.jpeg',
    alt: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    badge: 'Başhekim',
    title: 'Uzm. Vet. Hek. İbrahim Yıldırım',
    subtitle: 'Başhekim • 11+ Yıl Deneyim',
    type: 'team',
  },
  {
    src: '/images/team/ozge-yildirim-2.jpeg',
    alt: 'Uzm. Vet. Hek. Özge Yıldırım',
    badge: 'Uzman Hekim',
    title: 'Uzm. Vet. Hek. Özge Yıldırım',
    subtitle: 'Veteriner Hekim • Kurucu Ortak',
    type: 'team',
  },
  {
    src: '/images/services/kopek-muayene.jpeg',
    alt: 'Köpek Tedavi - Anka Veteriner Kliniği Batıkent',
    badge: 'Tedavi',
    title: 'Profesyonel Tedavi Hizmeti',
    subtitle: 'Uzman eller ile dostlarınız güvende',
    type: 'scene',
  },
  {
    src: '/images/team/emel-eda-sahin-2.jpeg',
    alt: 'Vet. Hek. Emel Eda Şahin',
    badge: 'Uzman Hekim',
    title: 'Vet. Hek. Emel Eda Şahin',
    subtitle: 'Veteriner Hekim',
    type: 'team',
  },
  {
    src: '/images/surgery/kedi-ameliyati.jpeg',
    alt: 'Cerrahi Operasyon - Anka Veteriner Kliniği Batıkent',
    badge: 'Cerrahi',
    title: 'Cerrahi Operasyonlar',
    subtitle: 'Steril ortamda güvenli ameliyatlar',
    type: 'scene',
  },
];

const slideVariants = {
  enter: {
    x: '100%',
    opacity: 0,
    scale: 1.05,
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    x: '-100%',
    opacity: 0,
    scale: 0.95,
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(next, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, isHovered]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden bg-gray-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 30, mass: 1 },
            opacity: { duration: 0.6 },
            scale: { duration: 0.8, ease: 'easeOut' },
          }}
          className="absolute inset-0"
        >
          {slide.type === 'team' ? (
            <>
              {/* === TEAM SLIDE: split layout desktop, bg mobile === */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0c2e4a] to-gray-900" />
              <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-primary-500/8 rounded-full blur-[120px]" />
              <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary-400/5 rounded-full blur-[100px]" />

              {/* MOBILE: full background with person centered */}
              <div className="absolute inset-0 md:hidden">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.03 }}
                  transition={{ duration: 8, ease: 'linear' }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 25%' }}
                    priority={current <= 1}
                    sizes="100vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />
              </div>

              {/* DESKTOP: person photo on right panel */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[45%]">
                <motion.div
                  className="relative w-full h-full overflow-hidden"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.03 }}
                  transition={{ duration: 8, ease: 'linear' }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    priority={current <= 1}
                    sizes="45vw"
                  />
                </motion.div>
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0c2e4a] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-900/30 to-transparent" />
              </div>

              <div className="hidden md:block absolute right-[45%] top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-primary-400/30 to-transparent" />
            </>
          ) : (
            <>
              {/* === SCENE SLIDE: full screen background === */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.06 }}
                transition={{ duration: 8, ease: 'linear' }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                  priority={current <= 1}
                  sizes="100vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex items-end pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div key={`content-${current}`} className={slide.type === 'team' ? 'md:max-w-[52%]' : ''}>
              <motion.h1 custom={0} variants={textVariants} initial="hidden" animate="visible"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 drop-shadow-2xl leading-tight"
              >
                {slide.title}
              </motion.h1>

              <motion.p custom={1} variants={textVariants} initial="hidden" animate="visible"
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-lg"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div custom={2} variants={textVariants} initial="hidden" animate="visible"
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/randevu"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-bordo-600 to-bordo-700 text-white font-bold rounded-xl hover:from-bordo-700 hover:to-bordo-800 hover:scale-105 transition-all shadow-lg shadow-bordo-600/30 text-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Randevu Alın
                </Link>
                <Link
                  href="/hizmetler"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-md text-white font-semibold rounded-xl border border-white/25 hover:bg-white/25 hover:scale-105 transition-all text-lg"
                >
                  Tüm Hizmetlerimiz
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Nav arrows */}
      <button onClick={prev} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/30 transition-all flex items-center justify-center text-white border border-white/15 group" aria-label="Önceki">
        <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={next} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/30 transition-all flex items-center justify-center text-white border border-white/15 group" aria-label="Sonraki">
        <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative h-2.5 rounded-full overflow-hidden transition-all duration-500"
            style={{ width: i === current ? '2.5rem' : '0.625rem' }}
            aria-label={`Slayt ${i + 1}`}
          >
            <span className="absolute inset-0 bg-white/40 rounded-full" />
            {i === current && (
              <motion.span
                className="absolute inset-0 bg-white rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5.5, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-4 md:right-8 z-20 text-white/60 text-sm font-mono tracking-wider">
        <span className="text-white font-bold text-lg">{String(current + 1).padStart(2, '0')}</span>
        <span className="mx-1">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* 7/24 Acil badge */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-2.5 px-4 py-2.5 bg-red-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg shadow-red-600/30"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
          <div>
            <p className="font-bold text-sm leading-tight">7/24 ACİL</p>
            <p className="text-[10px] opacity-90">Her Zaman Ulaşılabilir</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
