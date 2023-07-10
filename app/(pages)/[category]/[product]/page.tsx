"use client";
import CategoryProducts from "@/components/Common/CategoryProducts/CategoryProducts";
import { findPathname } from "@/utils/functions";
import { usePathname } from "next/navigation";
import { products } from "@/data/data";
import Section from "@/components/UI/Section/Section";
import InTheBox from "@/components/Pages/Product/InTheBox/InTheBox";
import { CategoryProductProps } from "@/constants/types/categoryProductTypes";

const Product = () => {
  const _slug = usePathname();
  const productPage = findPathname(_slug, 2);

  const productDetails: CategoryProductProps = products.filter(
    (product) => product.slug === productPage
  );

  return (
    <>
      <CategoryProducts
        categoryProducts={productDetails}
        productPage={productPage}
      />

      <InTheBox categoryProducts={productDetails} />
    </>
  );
};

export default Product;
