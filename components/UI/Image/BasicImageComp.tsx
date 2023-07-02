import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import * as styles from './styles';

type Props = {
  src: StaticImageData;
  sizes?: string;
  alt: string;
  dynamicWrapperStyles?: string;
};
const ImageComp: FC<Props> = ({ src, sizes, alt, dynamicWrapperStyles }) => {
  return (
    <div className={`${styles.basicImageWrapper} ${dynamicWrapperStyles}`}>
      <Image
        src={src}
        style={styles.basicImage}
        sizes={sizes}
        placeholder='blur'
        alt={alt}
      />
    </div>
  );
};
export default ImageComp;
