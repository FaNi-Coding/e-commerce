import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  src: StaticImageData;
  sizes?: string;
  alt: string;
  dynamicWrapperStyles?: string;
};
const ImageComp: FC<Props> = ({
  src,
  sizes,
  alt,
  dynamicWrapperStyles = '',
}) => {
  return (
    <div className={`${dynamicWrapperStyles}`}>
      <Image
        src={src}
        fill
        style={{
          objectFit: 'cover',
        }}
        sizes={sizes}
        placeholder='blur'
        alt={alt}
      />
    </div>
  );
};
export default ImageComp;
