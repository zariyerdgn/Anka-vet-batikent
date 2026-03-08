import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🐾</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sayfa Bulunamadı</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönerek aradığınızı bulabilirsiniz.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors shadow-lg"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/iletisim"
            className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </div>
  );
}
