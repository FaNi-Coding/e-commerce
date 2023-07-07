"use client";
import CategoryProducts from "@/components/Common/CategoryProducts/CategoryProducts";
import { products } from "@/data/data";
import { slug } from "@/utils/functions";
import { usePathname } from "next/navigation";

const Category = () => {
  const _slug = usePathname();
  const productPage = slug(_slug, 1);
  const _products = products.filter(
    (product) => product.category === productPage
  );

  const __products = _products.map((product) => {
    return {
      name: product.name,
      description: product.description,
      image: product.categoryImage.desktop,
    };
  });
  console.log("_products", _products);

  return (
    <>
      <CategoryProducts products={__products} />
    </>
  );
};

export default Category;
