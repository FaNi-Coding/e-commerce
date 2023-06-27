import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import { ImageStyles, ImageWrapper } from './styled';

type Props = {
  src: StaticImageData;
  alt: string;
  wrapperStyles?: string;
};
const ImageComp: FC<Props> = ({ src, alt, wrapperStyles }) => {
  return (
    <div className={`${ImageWrapper} ${wrapperStyles}`}>
      <Image
        src={src}
        style={ImageStyles}
        /*  sizes={`(min-width: ${dimensions.laptop}) 40vw, 100vw`} */
        placeholder='blur'
        alt={alt}
      />
    </div>
  );
};
export default ImageComp;
