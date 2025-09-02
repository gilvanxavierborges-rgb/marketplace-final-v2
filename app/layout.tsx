import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketplace Híbrido',
  description: 'Seu marketplace de serviços.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
