import { FC } from 'react';
import Section from '../Section/Section';
import BasicImageComp from '../Image/BasicImageComp';
import Bitmap from 'public/assets/Bitmap.png';
import { responsive } from '@/styles/responsive';
import Article from '../Article/Article';

type Props = {};
const AboutSection: FC<Props> = () => {
  return (
    <Section dynamicStyles='max-width-container col-reverse row-laptop'>
      <Article dynamicStyles='text-center lg:text-left'>
        <h2>Bringing you the best audio gear</h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </Article>
      <BasicImageComp
        src={Bitmap}
        alt='dic'
        dynamicWrapperStyles='w-full lg:w-1/2 '
        sizes={`${responsive.laptop} 40vw, 100vw`}
      />
    </Section>
  );
};
export default AboutSection;
