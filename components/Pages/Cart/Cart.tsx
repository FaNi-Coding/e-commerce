'use client';
import { Dialog } from '@headlessui/react';
import { FC } from 'react';
import useToggleDialog from '@/hooks/useToggleDialog';
import _Dialog from '@/components/UI/Dialog';
import { _useDispatch, _useSelector } from '@/app/hooks';
import Button from '@/components/UI/Button/Button';
import {
  incrementAmount,
  decrementAmount,
  CartType,
  reset,
} from '@/redux/features/cart/cartSlice';
import { products } from '@/data/data';

import ProductItem from './ProductItem';

const Cart: FC = () => {
  const dispatch = _useDispatch();
  const cart: CartType = _useSelector((state) => state.CartReducer.cart);
  const { isOpen, toggleDialog } = useToggleDialog();

  const getTotalAmount = () => {
    let total = 0;
    cart.forEach(({ amount, price }) => {
      total += amount * price;
    });
    return total;
  };
  const maxQuantity = (id: string, amount: number) => {
    const product = products.find((product) => product.id === id);
    return product?.amount === amount;
  };

  return (
    <_Dialog open={isOpen} close={toggleDialog}>
      <Dialog.Panel className='p-[3.2rem] bg-white bg-red flex flex-col items-center gap-[3.2rem] z-50 w-[37.7rem] rounded-[.8rem]'>
        <div className='flex justify-between items-center w-full'>
          <h6>CART ({cart.length})</h6>
          <Button
            type='button'
            onClick={() => dispatch(reset())}
            dynamicStyles='text-[1.5rem] leading-[2.5rem] font-medium underline'
          >
            Remove all
          </Button>
        </div>
        <ul className='w-full flex flex-col gap-[1.6rem]'>
          {cart?.map((item) => (
            <li
              className='grid grid-cols-[6.4rem_1fr_9.6rem] gap-[1.6rem]'
              key={item.id}
            >
              <ProductItem item={item}>
                <div className='flex justify-between p-[.15rem] gap-[.8rem] w-full h-[3.2rem] bg-tertiary self-center'>
                  <input
                    type='button'
                    className='w-full h-full border-none hoverTertiary disabled:cursor-not-allowed'
                    onClick={() => dispatch(decrementAmount(item.id))}
                    disabled={item.amount <= 1}
                    value='-'
                  />
                  <p className='body'>{item.amount}</p>
                  <input
                    type='button'
                    className='w-full h-full border-none hoverTertiary'
                    onClick={() => dispatch(incrementAmount(item.id))}
                    disabled={maxQuantity(item.id, item.amount)}
                    value='+'
                  />
                </div>
              </ProductItem>
            </li>
          ))}
        </ul>
        <div className='flex w-full justify-between'>
          <p className='body text-grey'>TOTAL</p>
          <h6 className=''>
            $ {getTotalAmount().toLocaleString('en-US') || 0}
          </h6>
        </div>
        <div className='flex justify-between items-center w-full'>
          <Button primary type='button' onClick={toggleDialog}>
            CHECKOUT
          </Button>
          <Button secondary type='button' onClick={toggleDialog}>
            Close
          </Button>
        </div>
      </Dialog.Panel>
    </_Dialog>
  );
};
export default Cart;
