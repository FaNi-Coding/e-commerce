"use client";
import CategoryProducts from "@/components/Common/CategoryProducts/CategoryProducts";
import Button from "@/components/UI/Button/Button";
import { findPathname } from "@/utils/functions";
import { usePathname } from "next/navigation";
import { products } from "@/data/data";

const Product = () => {
  const _slug = usePathname();
  const productPage = findPathname(_slug, 2);

  const productDetails = products
    .filter((product) => product.slug === productPage)
    .map((product) => {
      return {
        name: product.name,
        description: product.description,
        image: product.categoryImage.desktop,
        new: product.new,
        slug: product.slug,
      };
    });

  return (
    <>
      <CategoryProducts
        categoryProducts={productDetails}
        productPage={productPage}
      />
    </>
  );
};

export default Product;
