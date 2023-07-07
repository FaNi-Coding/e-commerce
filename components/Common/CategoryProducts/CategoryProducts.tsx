import Article from '@/components/UI/Article/Article';
import Button from '@/components/UI/Button/Button';
import CoverImageComp from '@/components/UI/Image/CoverImageComp';
import Section from '@/components/UI/Section/Section';
import { responsive } from '@/styles/responsive';
import { FC } from 'react';

type CategoryProductProps = {
  products: {
    name: string;
    description: string;
    image: string;
    new: boolean;
  }[];
};

const CategoryProducts: FC<CategoryProductProps> = ({ products }) => {
  return (
    <>
      {products
        .map((product, idx) => (
          <Section
            key={product.name}
            dynamicStyles={`max-width-container col-reverse ${
              idx % 2 !== 0 ? 'row-laptop' : 'row-reverse-laptop'
            }`}
          >
            <Article dynamicStyles='text-center lg:text-left'>
              {product.new && (
                <p className='overline text-primary'>NEW PRODUCT</p>
              )}
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <Button primary>SEE PRODUCT</Button>
            </Article>
            <CoverImageComp
              dynamicWrapperStyles='relative w-full lg:h-[56rem] md:w-1/2'
              src={product.image}
              alt={`image of ${product.name}`}
              sizes={`${responsive.laptop} 40vw, 100vw`}
            />
          </Section>
        ))
        .reverse()}
    </>
  );
};

export default CategoryProducts;
