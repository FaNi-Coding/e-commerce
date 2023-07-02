import { Manrope } from 'next/font/google';

import './globals.css';
import Nav from '@/components/Nav/Nav';
import MobileNav from '@/components/Nav/MobileNav';
import Cart from '@/components/Icons/Cart';
import Footer from '@/components/Footer/Footer';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'E-commerce 2.0',
  description:
    'E-commerce 2.0 is a demo e-commerce site built with Next.js and TypeScript.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        <header>
          <Nav icon={<Cart />} navHeight='h-[9.6rem]'>
            <MobileNav />
          </Nav>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
