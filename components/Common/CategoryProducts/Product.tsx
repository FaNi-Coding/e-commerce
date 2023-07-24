import Article from "@/components/UI/Article/Article";
import Button from "@/components/UI/Button/Button";
import CoverImageComp from "@/components/UI/Image/CoverImageComp";
import Section from "@/components/UI/Section/Section";
import { responsive } from "@/styles/responsive";
import React, { FC } from "react";
import CountProductAmount from "./CountProductamount";
import { ProductType } from "@/constants/types/categoryProductTypes";

type Props = {
  product: ProductType;
};

const Product: FC<Props> = ({
  product: {
    name,
    description,
    price,
    newest,
    image: { desktop },
  },
}) => {
  return (
    <>
      <Article dynamicStyles="text-center items-center lg:items-start lg:text-left">
        {newest && <p className="overline text-primary">new product</p>}
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="body">$ {price}</p>
        <div className="grid grid-cols-2 gap-[1rem] mt-8">
          <CountProductAmount />
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
