import { DM_Sans, Inter, Sora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const dmSans = DM_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export const metadata = {
  title: {
    default: 'ICOM Engineering Solutions Limited — better services is our motto',
    template: '%s | ICOM Engineering Solutions Limited',
  },
  description: 'ICOM Engineering Solutions Limited delivers integrated engineering solutions — telecommunications, fiber optics, solar energy, power infrastructure, and IT services across Nigeria and Africa.',
  keywords: ['ICOM', 'ICOM Engineering Solutions', 'IES', 'telecommunications', 'engineering', 'Nigeria', 'solar power', 'fiber optic', 'IT solutions', 'power infrastructure'],
  authors: [{ name: 'ICOM Engineering Solutions Limited' }],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://www.icomtsl.com',
    siteName: 'ICOM Engineering Solutions Limited',
    title: 'ICOM Engineering Solutions Limited — better services is our motto',
    description: 'Integrated engineering solutions — telecommunications, fiber optics, solar energy, power infrastructure, and IT services across Nigeria and Africa.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${sora.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
