import { DM_Sans, Inter, Sora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

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

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && systemDark) || (saved === 'system' && systemDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${sora.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
