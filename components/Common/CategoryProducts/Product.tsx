'use client';
import Article from '@/components/UI/Article/Article';
import Button from '@/components/UI/Button/Button';
import CoverImageComp from '@/components/UI/Image/CoverImageComp';
import { responsive } from '@/styles/responsive';
import React, { FC, FormEvent, useState } from 'react';
import { ProductType } from '@/constants/types/categoryProductTypes';
import { _useDispatch, _useSelector } from '@/app/hooks';
import { addToCart } from '@/redux/features/cart/cartSlice';

import { increment, decrement } from '@/redux/features/counter/counterSlice';

type Props = {
  product: ProductType;
};

const Product: FC<Props> = ({
  product: {
    id,
    amount,
    name,
    description,
    price,
    newest,
    image: { desktop, mobile },
  },
}) => {
  const dispatch = _useDispatch();
  const [count, setCount] = useState(1);

  const handleAddToCart = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addToCart({
        id,
        name,
        img: mobile,
        price,
        amount: count,
      })
    );
  };

  return (
    <>
      <Article
        dynamicStyles='text-center items-center lg:items-start lg:text-left'
        id={id}
      >
        {newest && <p className='overline text-primary'>new product</p>}
        <h2>{name}</h2>
        <p>{description}</p>
        <p className='body'>$ {price}</p>
        <form
          className='grid grid-cols-2 gap-[1rem] mt-8'
          onSubmit={handleAddToCart}
        >
          <div className='flex justify-between items-center p-[.15rem] gap-[.8rem] w-full bg-tertiary'>
            <input
              type='button'
              className='w-full h-full border-none hoverTertiary disabled:cursor-not-allowed'
              onClick={() => setCount((prev) => prev - 1)}
              disabled={count <= 1}
              value='-'
            />
            <p className='body'>{count}</p>
            <input
              type='button'
              className='w-full h-full border-none hoverTertiary'
              onClick={() => setCount((prev) => prev + 1)}
              disabled={count === amount}
              value='+'
            />
          </div>
          <Button type='submit' value='add to cart' primary />
        </form>
      </Article>
      <CoverImageComp
        dynamicWrapperStyles='relative w-full h-[35.2rem] md:self-center lg:self-start lg:h-[56rem] md:w-1/2'
        src={desktop}
        alt={`image of ${name}`}
        sizes={`${responsive.laptop} 40vw, 100vw`}
      />
    </>
  );
};

export default Product;
