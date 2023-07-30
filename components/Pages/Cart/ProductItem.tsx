import CoverImageComp from '@/components/UI/Image/CoverImageComp';
import React, { FC, Fragment, ReactNode } from 'react';

export type ProductItemType = {
  name: string;
  img: string;
  price: number;
};

type Props = {
  item: ProductItemType;
  children: ReactNode;
};

const ProductItem: FC<Props> = ({ item: { name, img, price }, children }) => {
  return (
    <>
      <CoverImageComp dynamicWrapperStyles='relative' src={img} alt={name} />
      <div className='flex flex-col justify-between'>
        <p className='text-[1.5rem] leading-[2.5rem] font-medium line-clamp-1'>
          {name}
        </p>
        <p className='text-[1.4rem] leading-[2.5rem] font-medium text-grey'>
          $ {price.toLocaleString('en-US')}
        </p>
      </div>

      {children}
    </>
  );
};

export default ProductItem;
