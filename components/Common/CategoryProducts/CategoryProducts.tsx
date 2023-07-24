import Section from "@/components/UI/Section/Section";
import { FC, ReactNode } from "react";
import { CategoryProductProps } from "@/constants/types/categoryProductTypes";
import CategoryProduct from "./CategoryProduct";
import Product from "./Product";

type Props = {
  categoryProducts: CategoryProductProps;
  productPage?: string;
  categoryPage?: string;
  children?: ReactNode;
};

const CategoryProducts: FC<Props> = ({
  categoryProducts,
  productPage,
  categoryPage,
}) => {
  return (
    <>
      {categoryProducts
        .map((product, idx) => (
          <Section
            key={product.name}
            dynamicStyles={`max-width-container col-reverse ${
              idx % 2 === 0 ? "row-reverse-laptop" : "row-laptop"
            }`}
          >
            {categoryPage && (
              <CategoryProduct product={product} categoryPage={categoryPage} />
            )}
            {productPage && <Product product={product} />}
          </Section>
        ))
        .reverse()}
    </>
  );
};

export default CategoryProducts;
