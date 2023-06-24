import Container from '@/components/Container/Container';
import Article from '@/components/Article/Article';
import ImageComp from '@/components/Image/ImageComp';
import Button from '@/components/Button/Button';
export default function Home() {
  return (
    <Container>
      <Article>
        <h3>Bringing you the best audio gear</h3>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
        <Button primary isMargin>
          SEE PRODUCT
        </Button>
      </Article>
      <ImageComp src={''} alt={''} />
    </Container>
  );
}
