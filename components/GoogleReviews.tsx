'use client';

import { useState, useEffect } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  date?: string;
}

interface ReviewData {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  googleReviewsUrl: string;
  writeReviewUrl: string;
}

const WRITE_REVIEW_URL = "https://www.google.com/search?sca_esv=d0d51c5094d38dd2&sxsrf=ANbL-n788bgKOM8T5iyWVkPsPA1aQKB8JQ:1772924380319&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOeRroW35CWlQblTMpIRTqXlv2ifEYjEoJSzDlecC2PleJJ3JifggUAEeBVIOr3rW2pI21Vs7qIyEoL2YGMaAkXHgajvigQUg99xS0m-6-C2h-e_iHa3gUgEgupTO_G0UKJRb7JY%3D&q=Bat%C4%B1kent+Anka+Veteriner+Klini%C4%9Fi+Yorumlar&sa=X&ved=2ahUKEwiV95v_8Y6TAxWj5AIHHYFFG3gQ0bkNegQIIxAF&biw=1470&bih=772&dpr=2";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=d0d51c5094d38dd2&sxsrf=ANbL-n4W4TOZovBU92cfCS9atKSlqK1-Pg:1772924376071&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOeRroW35CWlQblTMpIRTqXlv2ifEYjEoJSzDlecC2PleJJ3JifggUAEeBVIOr3rW2pI21Vs7qIyEoL2YGMaAkXHgajvigQUg99xS0m-6-C2h-e_iHa3gUgEgupTO_G0UKJRb7JY%3D&q=Bat%C4%B1kent+Anka+Veteriner+Klini%C4%9Fi+Yorumlar&sa=X&ved=2ahUKEwi02pj98Y6TAxWc3QIHHfR6HzwQ0bkNegQIOhAF&biw=1470&bih=772&dpr=2";

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'w-7 h-7' : size === 'md' ? 'w-5 h-5' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`${sizeClass} ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-6 h-6">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
  );
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [avgRating, setAvgRating] = useState(4.9);
  const [totalReviews, setTotalReviews] = useState(213);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/data/reviews.json')
      .then((r) => r.json())
      .then((data: ReviewData) => {
        if (data.reviews) {
          setReviews(data.reviews);
          setAvgRating(data.averageRating);
          setTotalReviews(data.totalReviews);
        }
      })
      .catch(() => {});
  }, []);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <div>
      {/* Google Rating Summary Card */}
      <AnimatedSection>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GoogleLogo />
            <span className="text-lg font-semibold text-gray-700">Google Yorumları</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-5xl font-bold text-gray-900">{avgRating}</span>
            <div>
              <StarRating rating={Math.round(avgRating)} size="lg" />
              <p className="text-sm text-gray-500 mt-1">{totalReviews} yorum</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href={WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              <GoogleLogo />
              <span>Google&apos;da Yorum Bırak</span>
            </a>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
            >
              Tüm Google Yorumlarını Gör
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Reviews Grid */}
      {reviews.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm">
                    {review.author_name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-900 text-sm truncate">{review.author_name}</p>
                      <GoogleLogo />
                    </div>
                    <p className="text-xs text-gray-500">{review.relative_time_description}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="mb-3">
                  <StarRating rating={review.rating} size="sm" />
                </div>

                {/* Text */}
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{review.text}</p>

                {/* Google attribution */}
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span className="text-xs text-gray-400">Google&apos;dan doğrulanmış yorum</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      )}

      {/* Show More / Less */}
      {reviews.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
          >
            {showAll ? 'Daha Az Göster' : `Tüm Yorumları Göster (${reviews.length})`}
            <svg className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* Bottom CTA */}
      <AnimatedSection delay={0.2}>
        <div className="mt-14 bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8 text-center border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Siz de Deneyiminizi Paylaşın!</h3>
          <p className="text-gray-600 mb-6">Anka Veteriner Kliniği hakkındaki düşüncelerinizi Google&apos;da paylaşarak diğer evcil hayvan sahiplerine yardımcı olun.</p>
          <a
            href={WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl text-lg"
          >
            <GoogleLogo />
            Google&apos;da Yorum Bırakın
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
