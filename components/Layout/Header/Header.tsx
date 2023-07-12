"use client";
import Cart from "@/components/Icons/Cart";
import { usePathname } from "next/navigation";
import Section from "@/components/UI/Section/Section";
import { FC } from "react";
import { findPathname } from "@/utils/functions";
import MobileNav from "../Nav/MobileNav";
import Nav from "../Nav/Nav";
import { HeroHeader, CategoryHeader } from "./HeaderTypes";

type Props = {};
const Header: FC<Props> = () => {
  const _slug = usePathname();
  let isNotHero = !!findPathname(_slug, 1);
  let isProduct = findPathname(_slug, 2);

  const isHeroStyles = !isNotHero
    ? "h-[60rem] md:h-[72.9rem]"
    : "md:h-[33.6rem]";

  const globals = isNotHero
    ? "max-width-container-category-header"
    : "max-width-container-header";

  return (
    <>
      <header>
        <Section
          dynamicStyles={`${globals} relative ${isHeroStyles}`}
          bgColor="bg-header"
        >
          <Nav icon={<Cart />} navHeight="h-[8.9rem] md:h-[9.6rem]">
            <MobileNav />
          </Nav>
          {isNotHero && !isProduct ? (
            <CategoryHeader slug={findPathname(_slug, 1)} />
          ) : (
            !isNotHero && !isProduct && <HeroHeader />
          )}
        </Section>
      </header>
    </>
  );
};
export default Header;
