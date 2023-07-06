'use client';
import Cart from '@/components/Icons/Cart';
import { usePathname } from 'next/navigation';
import Section from '@/components/UI/Section/Section';
import { FC, ReactNode } from 'react';
import { newSlug } from '@/utils/functions';
import MobileNav from '../Nav/MobileNav';
import Nav from '../Nav/Nav';
import { HeroHeader, CategoryHeader } from './HeaderTypes';

type Props = {};
const Header: FC<Props> = () => {
  const slug = usePathname();
  let isNotHero = Boolean(newSlug(slug, 1));
  console.log('isNotHero', isNotHero);
  const isHeroStyles = !isNotHero
    ? 'h-[60rem] md:h-[72.9rem]'
    : 'items-center md:h-[33.6rem]';
  //max-width-container-header
  const test = isNotHero
    ? 'max-width-container-category-header'
    : 'max-width-container-header';
  return (
    <>
      <header>
        <Section
          dynamicStyles={`${test} relative ${isHeroStyles}`}
          bgColor='bg-header'
        >
          <Nav icon={<Cart />} navHeight='h-[8.9rem] md:h-[9.6rem]'>
            <MobileNav />
          </Nav>
          {isNotHero ? <CategoryHeader /> : <HeroHeader />}
        </Section>
      </header>
    </>
  );
};
export default Header;
