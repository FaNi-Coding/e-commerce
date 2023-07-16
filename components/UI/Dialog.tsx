import { FC, ReactNode } from "react";
import { Dialog } from "@headlessui/react";
import useToggleDialog from "@/hooks/useToggleDialog";
import Button from "./Button/Button";

type DialogProps = {
  open: boolean;
  close: () => void;
  children?: ReactNode;
};
const _Dialog: FC<DialogProps> = ({ children, open, close }) => {
  return (
    <>
      {open && (
        <Dialog
          className="absolute inset-0 w-full h-full grid place-items-center z-50 bg-black/80"
          as="div"
          open={open}
          onClose={close}
        >
          {children}
        </Dialog>
      )}
    </>
  );
};
export default _Dialog;
