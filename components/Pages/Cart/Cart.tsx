import MyDialog from '@/components/UI/Dialog';
import { Dialog } from '@headlessui/react';
import { FC, ReactNode, useState } from 'react';
import useToggleDialog from '@/hooks/useToggleDialog';
type Props = {
  children: ReactNode;
};
const Cart: FC<Props> = ({}) => {
  /*   const { showDialog, toggleDialog } = useToggleDialog(); */

  return (
    <>
      {/*  <MyDialog isOpenProp={showDialog} /> */}
      {/*     <Dialog.Panel>
          <Dialog.Title>CART</Dialog.Title>

          <button onClick={toggleDialog}>CHECKOUT</button>
        </Dialog.Panel>
      </MyDialog> */}
    </>
  );
};
export default Cart;
