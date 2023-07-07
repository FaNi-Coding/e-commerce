import { FC } from "react";
import Article from "@/components/UI/Article/Article";
import Button from "@/components/UI/Button/Button";
import CoverImageComp from "@/components/UI/Image/CoverImageComp";
import HeroImgMobile from "@/assets/home/mobile/image-header.jpg";
import HeroImgTablet from "@/assets/home/tablet/image-header.jpg";
import HeroImgLaptop from "@/assets/home/desktop/image-hero.jpg";
import useMediaQuery from "@/hooks/useMediaQuery";
import { responsive } from "@/styles/responsive";

type Props = {
  slug?: string;
};
export const HeroHeader: FC<Props> = ({}) => {
  const isLaptop = useMediaQuery(responsive.tabletL);
  const isTablet = useMediaQuery(responsive.tablet);

  const renderImgByScreenSize = isLaptop
    ? HeroImgLaptop
    : isTablet
    ? HeroImgTablet
    : HeroImgMobile;
  return (
    <>
      <Article dynamicStyles="flex flex-col justify-center text-center text-white items-center  lg:max-w-[37.9rem] md:p-0 lg:items-start lg:text-left px-[2.4rem] py-[11rem] z-10 ">
        <h1 className="h1-mobile">XX99 Mark II Headphones</h1>
        <p className="body">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button primary>SEE PRODUCT</Button>
      </Article>
      {/* {renderImg()} */}
      <CoverImageComp src={renderImgByScreenSize} alt="aaa" />
    </>
  );
};

export const CategoryHeader: FC<Props> = ({ slug }) => {
  return (
    <>
      <Article dynamicStyles="flex justify-center text-white items-center z-10 lg:w-full">
        <h2>{slug}</h2>
      </Article>
    </>
  );
};