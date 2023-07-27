import { CategoryProductProps } from "@/constants/types/categoryProductTypes";
import { Action, ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CountProductAmount: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-between items-center p-[.15rem] gap-[.8rem] w-full bg-tertiary">
      {children}
    </div>
  );
};

export default CountProductAmount;
