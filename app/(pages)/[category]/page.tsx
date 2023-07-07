'use client';
import CategoryProducts from '@/components/Common/CategoryProducts/CategoryProducts';
import AboutSection from '@/components/UI/AboutSection/AboutSection';
import CategoryLinksSection from '@/components/UI/CategoryLinksSection/CategoryLinksSection';
import { products } from '@/data/data';
import { slug } from '@/utils/functions';
import { usePathname } from 'next/navigation';

const Category = () => {
  const _slug = usePathname();
  const categoryPage = slug(_slug, 1);
  const _products = products
    .filter((product) => product.category === categoryPage)
    .map((product) => {
      return {
        name: product.name,
        description: product.description,
        image: product.categoryImage.desktop,
        new: product.new,
      };
    });

  return (
    <>
      <CategoryProducts products={_products} />
      <CategoryLinksSection />
      <AboutSection />
    </>
  );
};

export default Category;
