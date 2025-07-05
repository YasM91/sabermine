import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../style/globals.css';
import { Header, Footer } from '@components';

const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sabermine Dashboard',
  description: 'Regex dashboard',
  keywords: ['dashboard', 'sabermine'],
  icons: {
    icon: ['/sabermine-icon.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header title="Dashboard" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
