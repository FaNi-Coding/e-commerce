import { Manrope } from 'next/font/google';

import './globals.css';
import Nav from '@/components/Layout/Nav/Nav';
import MobileNav from '@/components/Layout/Nav/MobileNav';
import Cart from '@/components/Icons/Cart';
import Footer from '@/components/Layout/Footer/Footer';
import Section from '@/components/UI/Section/Section';
import Article from '@/components/UI/Article/Article';
import CoverImageComp from '@/components/UI/Image/CoverImageComp';
import Button from '@/components/UI/Button/Button';
import HeroImg from '../assets/home/mobile/image-header.jpg'

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
<Section dynamicStyles="max-width-container-header gap-0 relative h-[60rem]" bgColor='bg-black'>
          <Nav icon={<Cart />} navHeight='h-[9.6rem]'>
            <MobileNav />
          </Nav>
<Article dynamicStyles='flex flex-col justify-center text-center text-white items-center md:max-w-[37.9rem] md:p-0 lg:items-start lg:text-left px-[2.4rem] py-[11rem] z-10 '>
            <h1 className='h1-mobile'>XX99 Mark II Headphones</h1>
            <p className='body'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Button primary>SEE PRODUCT</Button>
          </Article>
  <CoverImageComp src={HeroImg} alt='aaa'/> 
        
</Section>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
