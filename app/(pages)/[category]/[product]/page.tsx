"use client";
import CategoryProducts from "@/components/Common/CategoryProducts/CategoryProducts";
import { findPathname } from "@/utils/functions";
import { usePathname } from "next/navigation";
import { products } from "@/data/data";
import InTheBox from "@/components/Pages/Product/InTheBox/InTheBox";
import { CategoryProductProps } from "@/constants/types/categoryProductTypes";
import ProductGrid from "@/components/Pages/Product/ProductGrid/ProductGrid";
import OtherProductLinks from "@/components/Pages/Product/OtherProductLinks/OtherProductLinks";
import CategoryLinksSection from "@/components/UI/CategoryLinksSection/CategoryLinksSection";
import AboutSection from "@/components/UI/AboutSection/AboutSection";
import { _useSelector } from "@/app/hooks";

const Product = () => {
  const _slug = usePathname();
  const productPage = findPathname(_slug, 2);

  const cart = _useSelector((state) => state.CartReducer.cart);
  console.log("cart", cart);

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
      <ProductGrid categoryProducts={productDetails} />
      <OtherProductLinks categoryProducts={productDetails} />
      <CategoryLinksSection />
      <AboutSection />
    </>
  );
};

export default Product;
