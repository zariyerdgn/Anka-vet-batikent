'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Hizmet {
  name: string;
  desc: string;
  detailedDesc?: string;
  subItems: string[];
  images?: string[];
}

interface HizmetlerAccordionProps {
  hizmetler: Hizmet[];
}

export default function HizmetlerAccordion({ hizmetler }: HizmetlerAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {hizmetler.map((hizmet, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={hizmet.name}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left group"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary-600 transition-colors">
                    {hizmet.name}
                  </h3>
                </div>
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed mb-4">{hizmet.desc}</p>

                      {hizmet.detailedDesc && (
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{hizmet.detailedDesc}</p>
                      )}

                      {hizmet.subItems.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-primary-700 mb-2">Alt Hizmetler:</p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {hizmet.subItems.map((sub) => (
                              <li key={sub} className="flex items-center gap-2 text-gray-700">
                                <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm">{sub}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {hizmet.images && hizmet.images.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                          {hizmet.images.map((img, i) => (
                            <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                              <Image
                                src={img}
                                alt={`${hizmet.name} - ${i + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 45vw, 200px"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
