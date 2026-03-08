import AnimatedSection from './AnimatedSection';

interface LocalTrustSignalsProps {
  variant?: 'compact' | 'full';
}

export default function LocalTrustSignals({ variant = 'full' }: LocalTrustSignalsProps) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">⭐</span>
          <span className="font-semibold">4.9</span>
          <span>Google Puanı</span>
        </div>
        <span className="text-gray-300">|</span>
        <div className="flex items-center gap-1">
          <span>💬</span>
          <span className="font-semibold">200+</span>
          <span>Yorum</span>
        </div>
        <span className="text-gray-300">|</span>
        <div className="flex items-center gap-1">
          <span>🏥</span>
          <span className="font-semibold">15+</span>
          <span>Yıllık Deneyim</span>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Batıkent&apos;in Güvenilir Veteriner Kliniği
            </h2>
            <p className="mt-3 text-gray-600">
              Binlerce evcil hayvan sahibinin tercihi
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection direction="left" delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">⭐</div>
              <div className="text-3xl font-bold text-gray-900">4.9 / 5</div>
              <p className="text-gray-600 mt-1">Google Puanı</p>
              <div className="flex justify-center gap-0.5 mt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">💬</div>
              <div className="text-3xl font-bold text-gray-900">200+</div>
              <p className="text-gray-600 mt-1">Mutlu Müşteri Yorumu</p>
              <p className="text-sm text-primary-600 mt-2 font-medium">Batıkent ve Ankara</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🏥</div>
              <div className="text-3xl font-bold text-gray-900">15+ Yıl</div>
              <p className="text-gray-600 mt-1">Profesyonel Deneyim</p>
              <p className="text-sm text-primary-600 mt-2 font-medium">Uzman Veteriner Hekimler</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
