'use client';
import { Dialog } from '@headlessui/react';
import { FC } from 'react';
import useToggleDialog from '@/hooks/useToggleDialog';
import _Dialog from '@/components/UI/Dialog';
import { _useDispatch, _useSelector } from '@/app/hooks';
import CoverImageComp from '@/components/UI/Image/CoverImageComp';
import { reset } from '@/redux/features/counter/counterSlice';
import Button from '@/components/UI/Button/Button';
import {
  incrementAmount,
  decrementAmount,
  CartType,
} from '@/redux/features/cart/cartSlice';

const Cart: FC = () => {
  const dispatch = _useDispatch();
  const cart: CartType = _useSelector((state) => state.CartReducer.cart);
  const { isOpen, toggleDialog } = useToggleDialog();

  const getTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.amount;
    });
    return total;
  };

  return (
    <_Dialog open={isOpen} close={toggleDialog}>
      <Dialog.Panel className='p-[3.2rem] bg-white bg-red flex flex-col items-center gap-[3.2rem] z-50 w-[37.7rem] rounded-[.8rem]'>
        <Dialog.Title className='flex justify-between items-center w-full'>
          <h6>CART ({cart.length})</h6>
          <Button
            type='button'
            onClick={() => dispatch(reset())}
            dynamicStyles='text-[1.5rem] leading-[2.5rem] font-medium underline'
          >
            Remove all
          </Button>
        </Dialog.Title>
        <ul className='w-full'>
          <li className='grid grid-cols-3 gap-[1.6rem]'>
            {cart?.map((item) => (
              <>
                <CoverImageComp
                  key={item.id}
                  dynamicWrapperStyles='relative'
                  src={item.img}
                  alt={item.name}
                />
                <div className='flex flex-col justify-between'>
                  <p className='text-[1.5rem] leading-[2.5rem] font-medium'>
                    {item.name}
                  </p>
                  <p className='text-[1.4rem] leading-[2.5rem] font-medium text-grey'>
                    {item.price}
                  </p>
                </div>
                <div className='flex justify-between items-center p-[.15rem] gap-[.8rem] w-full bg-tertiary'>
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
                    value='+'
                  />
                </div>
              </>
            ))}
          </li>
        </ul>
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
