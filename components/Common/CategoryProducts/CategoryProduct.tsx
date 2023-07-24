import Article from "@/components/UI/Article/Article";
import Button from "@/components/UI/Button/Button";
import CoverImageComp from "@/components/UI/Image/CoverImageComp";
import Section from "@/components/UI/Section/Section";
import { CategoryProductType } from "@/constants/types/categoryProductTypes";
import { responsive } from "@/styles/responsive";
import React, { FC } from "react";

type Props = {
  product: CategoryProductType;
  categoryPage: string;
};

const CategoryProduct: FC<Props> = ({
  product: {
    name,
    description,
    slug,
    newest,
    image: { desktop },
  },
  categoryPage,
}) => {
  const url = categoryPage + "/" + slug;

  return (
    <>
      <Article dynamicStyles="text-center items-center lg:items-start lg:text-left">
        {newest && <p className="overline text-primary">new product</p>}
        <h2>{name}</h2>
        <p>{description}</p>
        <Button primary isMargin href={url}>
          see product
        </Button>
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

export default CategoryProduct;
