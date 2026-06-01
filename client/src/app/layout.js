import { DM_Sans, Inter, Sora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    default: 'ICOM Technical Service Support Limited — Putting Quality First',
    template: '%s | ICOM TSS Limited',
  },
  description: 'ICOM Technical Service Support Limited delivers integrated engineering solutions — telecommunications, fiber optics, solar energy, power infrastructure, and IT services across Nigeria and Africa.',
  keywords: ['ICOM', 'telecommunications', 'engineering', 'Nigeria', 'solar power', 'fiber optic', 'IT solutions', 'power infrastructure'],
  authors: [{ name: 'ICOM Technical Service Support Limited' }],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://www.icomtsl.com',
    siteName: 'ICOM Technical Service Support Limited',
    title: 'ICOM Technical Service Support Limited — Putting Quality First',
    description: 'Integrated engineering solutions — telecommunications, fiber optics, solar energy, power infrastructure, and IT services across Nigeria and Africa.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${sora.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
