"use client";
import Cart from "@/components/Icons/Cart";
import Article from "@/components/UI/Article/Article";
import Button from "@/components/UI/Button/Button";
import CoverImageComp from "@/components/UI/Image/CoverImageComp";
import Section from "@/components/UI/Section/Section";
import useMediaQuery from "@/hooks/useMediaQuery";
import { responsive } from "@/styles/responsive";
import { FC } from "react";
import HeroImgLaptop from "../../../assets/home/desktop/image-hero.jpg";
import HeroImgMobile from "../../../assets/home/mobile/image-header.jpg";
import HeroImgTablet from "../../../assets/home/tablet/image-header.jpg";
import MobileNav from "../Nav/MobileNav";
import Nav from "../Nav/Nav";

type Props = {};
const Header: FC<Props> = ({}) => {
  const isLaptop = useMediaQuery(responsive.tabletL);
  const isTablet = useMediaQuery(responsive.tablet);

  const renderImgByScreenSize = isLaptop
    ? HeroImgLaptop
    : isTablet
    ? HeroImgTablet
    : HeroImgMobile;

  return (
    <>
      <header>
        <Section
          dynamicStyles="max-width-container-header gap-0 relative h-[60rem] mn:h-[72.9rem]"
          bgColor="bg-header"
        >
          <Nav icon={<Cart />} navHeight="h-[9.6rem]">
            <MobileNav />
          </Nav>
          <Article dynamicStyles="flex flex-col justify-center text-center text-white items-center  lg:max-w-[37.9rem] md:p-0 lg:items-start lg:text-left px-[2.4rem] py-[11rem] z-10 ">
            <h1 className="h1-mobile">XX99 Mark II Headphones</h1>
            <p className="body">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button primary>SEE PRODUCT</Button>
          </Article>
          {/* {renderImg()} */}
          <CoverImageComp src={renderImgByScreenSize} alt="aaa" />
        </Section>
      </header>
    </>
  );
};
export default Header;
