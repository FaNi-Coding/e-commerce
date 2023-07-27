"use client";
import Article from "@/components/UI/Article/Article";
import Button from "@/components/UI/Button/Button";
import CoverImageComp from "@/components/UI/Image/CoverImageComp";
import { responsive } from "@/styles/responsive";
import React, { FC } from "react";
import CountProductAmount from "./CountProductamount";
import { ProductType } from "@/constants/types/categoryProductTypes";
import { _useDispatch, _useSelector } from "@/app/hooks";
import {
  incrementAmount,
  decrementAmount,
  addToCart,
} from "@/redux/features/cart/cartSlice";

type Props = {
  product: ProductType;
};

const Product: FC<Props> = ({
  product: {
    id,
    amount = 0,
    name,
    description,
    price,
    newest,
    image: { desktop },
  },
}) => {
  const dispatch = _useDispatch();
  const cart = _useSelector((state) => state.CartReducer.cart);
  console.log("cart", cart);

  const getTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.amount;
    });
    return total;
  };
  console.log("id", id);
  console.log("cart", cart);

  const increment = () => {
    if (amount === 0) {
      dispatch(addToCart(id));
    } else dispatch(incrementAmount(id));
  };

  return (
    <>
      <Article
        dynamicStyles="text-center items-center lg:items-start lg:text-left"
        id={id}
      >
        {newest && <p className="overline text-primary">new product</p>}
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="body">$ {price}</p>
        <div className="grid grid-cols-2 gap-[1rem] mt-8">
          <CountProductAmount>
            <button
              className="w-full h-full border-none hoverTertiary disabled:cursor-not-allowed"
              onClick={() => dispatch(decrementAmount(id))}
              disabled={getTotalAmount() <= 0}
            >
              -
            </button>
            <p className="body">{getTotalAmount() || 0}</p>
            <button
              className="w-full h-full border-none hoverTertiary"
              onClick={increment}
            >
              +
            </button>
          </CountProductAmount>
          <Button primary>add to cart</Button>
        </div>
      </Article>
      <CoverImageComp
        dynamicWrapperStyles="relative w-full h-[35.2rem] md:self-center lg:self-start lg:h-[56rem] md:w-1/2"
        src={desktop}
        alt={`image of ${name}`}
        sizes={`${responsive.laptop} 40vw, 100vw`}
      />
    </>
  );
};

export default Product;
