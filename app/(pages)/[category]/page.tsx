'use client';
import { newSlug } from '@/utils/functions';
import { usePathname } from 'next/navigation';

const Category = () => {
  const slug = usePathname();
  console.log('router', slug);
  return (
    <section className='max-width-container'>
      <h5>Category: {newSlug(slug, 1)}</h5>
    </section>
  );
};

export default Category;
