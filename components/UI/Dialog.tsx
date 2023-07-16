import { FC, ReactNode, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { type } from 'os';
import useToggleDialog from '@/hooks/useToggleDialog';

type DialogProps = {
  children?: ReactNode;
  isOpenProp?: boolean;
};
const MyDialog: FC<DialogProps> = ({ children, isOpenProp }) => {
  const { showDialog, setShowDialog } = useToggleDialog();
  console.log('dialog open', showDialog);

  return (
    <Dialog as='div' open={showDialog} onClose={() => setShowDialog(false)}>
      <Dialog.Panel>
        <Dialog.Title>CART</Dialog.Title>

        <button onClick={() => setShowDialog(false)}>CHECKOUT</button>
      </Dialog.Panel>
    </Dialog>
  );
};
export default MyDialog;
