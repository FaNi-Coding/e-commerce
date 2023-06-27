import { FC } from 'react';
import Image from 'next/image';
import Bitmap from '../../assets/Bitmap.png';
import { ImageStyles, ImageWrapper } from './styled';

type Props = {
  src: string;
  alt: string;
};
const ImageComp: FC<Props> = ({ src, alt }) => {
  return (
    <div className={ImageWrapper}>
      <Image
        src={Bitmap}
        style={ImageStyles}
        /*  sizes={`(min-width: ${dimensions.laptop}) 40vw, 100vw`} */
        placeholder='blur'
        alt='dic'
      />
    </div>
  );
};
export default ImageComp;
