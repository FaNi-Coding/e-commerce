import { FC } from "react";
import Section from "../../../UI/Section/Section";
import { responsive } from "@/styles/responsive";
import CoverImageComp from "../../../UI/Image/CoverImageComp";
import { CategoryProductProps } from "@/constants/types/categoryProductTypes";

type Props = {
  categoryProducts: CategoryProductProps;
};

const ProductGrid: FC<Props> = ({ categoryProducts }) => {
  console.log("categoryProducts", categoryProducts);

  const gridArray = categoryProducts
    .map(({ gallery }) => [
      gallery.first.desktop,
      gallery.second.desktop,
      gallery.third.desktop,
    ])
    .flat();

  return (
    <>
      <Section dynamicStyles="max-width-container gap-[2rem] md:gap-[1.8rem] lg:gap-[3rem] grid grid-cols-1 md:grid-cols-2 ">
        <span className="inline-grid grid-cols-1 gap-[2rem] md:gap-[1.8rem] lg:gap-[3rem] h-[36.8rem] lg:h-[59rem]">
          <CoverImageComp
            dynamicWrapperStyles="relative w-full h-full"
            src={gridArray[0]}
            alt="first-product-gallery-image"
            sizes={`${responsive.laptop} 60vw, 100vw`}
          />
          <CoverImageComp
            dynamicWrapperStyles="relative w-full h-full"
            src={gridArray[1]}
            alt="second-product-gallery-image"
            sizes={`${responsive.laptop} 60vw, 100vw`}
          />
        </span>

        <CoverImageComp
          dynamicWrapperStyles="relative h-[36.8rem] lg:h-[59.2rem]"
          src={gridArray[2]}
          alt="third-product-gallery-image"
          sizes={`${responsive.laptop} 60vw, 100vw`}
        />
      </Section>
    </>
  );
};
export default ProductGrid;
