'use client';
import { FC, ReactNode } from 'react';
import Cart from '@/components/Icons/Cart';
import Section from '@/components/UI/Section/Section';

import MobileNav from '../Nav/MobileNav';
import Nav from '../Nav/Nav';
import { HeroHeader, CategoryHeader } from './HeaderTypes';
import useToggleDialog from '@/hooks/useToggleDialog';
import { _useDispatch, _useSelector } from '@/app/hooks';
import _Dialog from '@/components/UI/Dialog';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
type Props = {};

export const CartItemsCounter = () => {
  const { cart } = useSelector((state: RootState) => state.CartReducer);
  const { toggleDialog } = useToggleDialog();
  return (
    <button
      type='button'
      className='relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
    >
      <Cart onClick={toggleDialog} />
      <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900 p-3'>
        {cart.length}
      </div>
    </button>
  );
};

const Header: FC<Props> = () => {
  return (
    <>
      <header>
        <Section
          dynamicStyles='max-width-container-header h-[60rem] md:h-[72.9rem] relative'
          bgColor='bg-header'
        >
          <Nav icon={<CartItemsCounter />} navHeight='h-[8.9rem] md:h-[9.6rem]'>
            <MobileNav>
              <CartItemsCounter />
            </MobileNav>
          </Nav>
          <HeroHeader />
        </Section>
      </header>
    </>
  );
};
export default Header;
