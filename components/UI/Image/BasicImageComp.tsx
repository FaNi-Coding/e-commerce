import { FC } from "react";
import Image, { StaticImageData } from "next/image";

import * as styles from "./styles";

type Props = {
  src: StaticImageData | string;
  sizes?: string;
  alt: string;
  placeholder?: "blur" | "empty" | undefined;
  dynamicWrapperStyles?: string;
};
const ImageComp: FC<Props> = ({
  src,
  sizes,
  alt,
  placeholder,
  dynamicWrapperStyles,
}) => {
  return (
    <div className={`${styles.basicImageWrapper} ${dynamicWrapperStyles}`}>
      <Image
        src={src}
        style={styles.basicImage}
        sizes={sizes}
        alt={alt}
        placeholder={placeholder}
      />
    </div>
  );
};
export default ImageComp;
