import Button from "@/components/UI/Button/Button";
import CoverImageComp from "@/components/UI/Image/CoverImageComp";
import Section from "@/components/UI/Section/Section";
import { CategoryProductProps } from "@/constants/types/categoryProductTypes";
import useMediaQuery from "@/hooks/useMediaQuery";
import { responsive } from "@/styles/responsive";
import React, { FC } from "react";

type Props = {
  categoryProducts: CategoryProductProps;
};

const OtherProductLinks: FC<Props> = ({ categoryProducts }) => {
  const isLaptop = useMediaQuery(responsive.tabletL);
  const isTablet = useMediaQuery(responsive.tablet);

  const productLinks = categoryProducts.map((product) =>
    product.others
      .map(({ name, image, slug }) => (
        <article
          key={name}
          className="w-full grid place-items-center gap-[4rem]"
        >
          <CoverImageComp
            dynamicWrapperStyles="relative w-[32.7rem] h-[12rem] md:w-[22.3rem] md:h-[31.8rem] xl:w-[35rem]"
            src={
              isLaptop ? image.desktop : isTablet ? image.tablet : image.mobile
            }
            alt="product-link-image"
            sizes={`${responsive.laptop} 60vw, 100vw`}
          />
          <h5>{name}</h5>
          <Button primary href={slug}>
            SEE PRODUCT
          </Button>
        </article>
      ))
      .flat()
  );
  return (
    <Section dynamicStyles="max-width-container grid grid-cols-1 gap-[6.4rem]">
      <h3 className="text-center">YOU MAY ALSO LIKE</h3>
      <div className="inline-grid grid-cols-1 gap-[5.6rem] md:grid-cols-3 md:gap-[1.1rem] lg:gap-[3rem]">
        {productLinks}
      </div>
    </Section>
  );
};

export default OtherProductLinks;
