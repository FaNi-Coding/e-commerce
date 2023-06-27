import Section from '@/components/Section/Section';
import Article from '@/components/Article/Article';
import Bitmap from '../assets/Bitmap.png';
import ZX9 from '../assets/home/desktop/image-speaker-zx9.png';
import ImageComp from '@/components/Image/ImageComp';
import Nav from '@/components/Nav/Nav';
import Button from '@/components/Button/Button';
export default function Home() {
  return (
    <>
      <Section className='max-width-container col-reverse row-laptop'>
        <Article>
          <h2>Bringing you the best audio gear</h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </Article>
        <ImageComp src={Bitmap} alt='dic' wrapperStyles='md:w-1/2' />
      </Section>
      <Section className='max-width-container grid grid-cols-1'>
        <div className='bg-primary flex pt-[9.6rem]'>
          <ImageComp
            src={ZX9}
            alt='dic'
            wrapperStyles='md:w-1/3 ml-auto clipImg mb-[-1.3rem]'
          />
          <Article dynamicStyles='max-w-[35rem] mx-auto'>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button secondary>SEE PRODUCT</Button>
          </Article>
        </div>
        <div className='bg-tertiary flex'>
          <ImageComp src={Bitmap} alt='dic' wrapperStyles='md:w-1/2' />
          <h1>då</h1>
        </div>
        <span className='inline-grid grid-cols-2 gap-12'>
          <ImageComp src={Bitmap} alt='dic' />
          <ImageComp src={Bitmap} alt='dic' />
        </span>
      </Section>
    </>
  );
}
