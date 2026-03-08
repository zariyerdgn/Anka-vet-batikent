'use client';

import { useState, useEffect } from 'react';

export default function OfflineIndicator() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  if (online) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-50 bg-yellow-500 text-yellow-900 text-center py-2 text-sm font-medium shadow-lg">
      ⚠️ İnternet bağlantınız kesildi. Bazı özellikler çalışmayabilir.
    </div>
  );
}
