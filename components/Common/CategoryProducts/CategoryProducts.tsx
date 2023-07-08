import Article from "@/components/UI/Article/Article";
import Button from "@/components/UI/Button/Button";
import CoverImageComp from "@/components/UI/Image/CoverImageComp";
import Section from "@/components/UI/Section/Section";
import { responsive } from "@/styles/responsive";
import { FC, ReactNode } from "react";

export type CategoryProductProps = {
  name: string;
  description: string;
  image: string;
  new: boolean;
  url: string;
}[];

type Props = {
  children?: ReactNode;
  categoryPage: string;
  categoryProducts: CategoryProductProps;
};

const CategoryProducts: FC<Props> = ({
  categoryProducts,
  categoryPage,
  children,
}) => {
  const renderOnCategoryPage = (url: string) => {
    return (
      <>
        {categoryPage && (
          <Button primary isMargin href={url}>
            SEE PRODUCT
          </Button>
        )}
      </>
    );
  };

  return (
    <>
      {categoryProducts
        .map((product, idx) => (
          <Section
            key={product.name}
            dynamicStyles={`max-width-container col-reverse ${
              idx > 2 && idx % 2 === 0 ? "row-reverse-laptop" : "row-laptop"
            }`}
          >
            <Article dynamicStyles="text-center items-center lg:items-start lg:text-left">
              {product.new && (
                <p className="overline text-primary">NEW PRODUCT</p>
              )}
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              {renderOnCategoryPage(`${categoryPage}/${product.url}`)}
            </Article>
            <CoverImageComp
              dynamicWrapperStyles="relative w-full h-[35.2rem] md:self-center lg:self-start lg:h-[56rem] md:w-1/2"
              src={product.image}
              alt={`image of ${product.name}`}
              sizes={`${responsive.laptop} 40vw, 100vw`}
            />
          </Section>
        ))
        .reverse()}
    </>
  );
};

export default CategoryProducts;
