import Footer from '@/components/Layout/Footer/Footer';
import { ReduxProvider } from '@/redux/provider';
import { Manrope } from 'next/font/google';

import '@/app/globals.css';

import Cart from '@/components/Pages/Cart/Cart';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'E-commerce',
  description:
    'E-commerce is a ongoing development project site built with Next.js and TypeScript.',
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
