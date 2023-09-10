"use client";
import { _useSelector } from "@/app/hooks";
import CategoryProducts from "@/components/Common/CategoryProducts/CategoryProducts";
import AboutSection from "@/components/UI/AboutSection/AboutSection";
import CategoryLinksSection from "@/components/UI/CategoryLinksSection/CategoryLinksSection";
import { CategoryProductProps } from "@/constants/types/categoryProductTypes";
import { products } from "@/data/data";
import { findPathname } from "@/utils/functions";
import { usePathname } from "next/navigation";

const Category = () => {
  const _slug = usePathname();
  const categoryPage = findPathname(_slug, 1);
  const cart = _useSelector((state) => state.CartReducer.cart);
  const categoryProducts: CategoryProductProps = products.filter((product) => {
    if (product.category !== categoryPage) {
      return {
        notFound: true,
      };
    }
    return product.category === categoryPage;
  });

  return (
    <>
      <CategoryProducts
        categoryProducts={categoryProducts}
        categoryPage={categoryPage}
      />
      <CategoryLinksSection />
      <AboutSection />
    </>
  );
};

export default Category;
