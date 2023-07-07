import { FC } from "react";
import { responsive } from "@/styles/responsive";
import Section from "@/components/UI/Section/Section";
import Article from "@/components/UI/Article/Article";
import image from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import CoverImageComp from "@/components/UI/Image/CoverImageComp";

type CategoryProductProps = {
  products: {
    name: string;
    description: string;
    image: string;
  }[];
};

const CategoryProducts: FC<CategoryProductProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        console.log("product.image", product.image);
        const imageUrl = `/${product.image}`;
        return (
          <Section
            key={product.name}
            dynamicStyles="max-width-container col-reverse row-laptop"
          >
            <Article dynamicStyles="text-center lg:text-left">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </Article>
            <CoverImageComp
              dynamicWrapperStyles="relative w-full lg:h-[56rem] md:w-1/2 bg-primary"
              src={imageUrl}
              alt={`image of ${product.name}`}
              sizes={`${responsive.laptop} 40vw, 100vw`}
            />
          </Section>
        );
      })}
    </>
  );
};

export default CategoryProducts;
