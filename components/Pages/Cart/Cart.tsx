"use client";
import { Dialog } from "@headlessui/react";
import { FC } from "react";
import useToggleDialog from "@/hooks/useToggleDialog";
import _Dialog from "@/components/UI/Dialog";
import { _useDispatch, _useSelector } from "@/app/hooks";
import CoverImageComp from "@/components/UI/Image/CoverImageComp";
import CountProductAmount from "@/components/Common/CategoryProducts/CountProductamount";
import { reset } from "@/redux/features/counter/counterSlice";
import Button from "@/components/UI/Button/Button";

const Cart: FC = () => {
  const dispatch = _useDispatch();
  const { isOpen, toggleDialog } = useToggleDialog();

  return (
    <_Dialog open={isOpen} close={toggleDialog}>
      <Dialog.Panel className="p-[3.2rem] bg-white bg-red flex flex-col items-center gap-[3.2rem] z-50 w-[37.7rem] rounded-[.8rem]">
        <Dialog.Title className="flex justify-between items-center w-full">
          <h6>CART</h6>
          <Button
            type="button"
            onClick={() => dispatch(reset())}
            dynamicStyles="text-[1.5rem] leading-[2.5rem] font-medium underline"
          >
            Remove all
          </Button>
        </Dialog.Title>
        <ul className="w-full">
          <li className="h-[6.4rem] grid grid-cols-3 gap-[1.6rem]">
            <CoverImageComp dynamicWrapperStyles="relative" src={""} alt={""} />
            <div className="flex flex-col justify-between">
              <p className="text-[1.5rem] leading-[2.5rem] font-medium">
                XX99 MK II
              </p>
              <p className="text-[1.4rem] leading-[2.5rem] font-medium text-grey">
                $ 2,999
              </p>
            </div>
            <CountProductAmount />
          </li>
        </ul>
        <div className="flex justify-between items-center w-full">
          <Button primary type="button" onClick={toggleDialog}>
            CHECKOUT
          </Button>
          <Button secondary type="button" onClick={toggleDialog}>
            Close
          </Button>
        </div>
      </Dialog.Panel>
    </_Dialog>
  );
};
export default Cart;
