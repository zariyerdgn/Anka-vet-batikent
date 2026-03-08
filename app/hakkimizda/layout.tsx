import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Anka Veteriner Kliniği Batıkent hakkında bilgi edinin. Uzman kadromuz, modern tesislerimiz ve misyonumuz.',
};

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
