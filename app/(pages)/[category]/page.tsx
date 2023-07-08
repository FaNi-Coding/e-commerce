"use client";
import CategoryProducts, {
  CategoryProductProps,
} from "@/components/Common/CategoryProducts/CategoryProducts";
import AboutSection from "@/components/UI/AboutSection/AboutSection";
import Button from "@/components/UI/Button/Button";
import CategoryLinksSection from "@/components/UI/CategoryLinksSection/CategoryLinksSection";
import { products } from "@/data/data";
import { findPathname } from "@/utils/functions";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Category = () => {
  const _slug = usePathname();
  const categoryPage = findPathname(_slug, 1);
  const categoryProducts: CategoryProductProps = products
    .filter((product) => product.category === categoryPage)
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
        categoryProducts={categoryProducts}
        categoryPage={categoryPage}
      />
      <CategoryLinksSection />
      <AboutSection />
    </>
  );
};

export default Category;
