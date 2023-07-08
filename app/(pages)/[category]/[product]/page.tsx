"use client";
import CategoryProducts from "@/components/Common/CategoryProducts/CategoryProducts";
import Button from "@/components/UI/Button/Button";
import { slug } from "@/utils/functions";
import { usePathname } from "next/navigation";
import { products } from "@/data/data";

const Product = () => {
  const _slug = usePathname();
  const productPage = slug(_slug, 2);

  /*   console.log("product", productPage);
  const _products = products
  .filter((product) => product.category === productPage)
  .map((product) => {
    return {
      name: product.name,
      description: product.description,
      image: product.categoryImage.desktop,
      new: product.new,
    };
  }); */

  return (
    <>
      {/*  <CategoryProducts>
        <Button primary isMargin>
          add to cart
        </Button>
      </CategoryProducts> */}
    </>
  );
};

export default Product;
