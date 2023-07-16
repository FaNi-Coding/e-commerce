"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Cart from "@/components/Icons/Cart";
import Section from "@/components/UI/Section/Section";
import { findPathname } from "@/utils/functions";
import MobileNav from "../Nav/MobileNav";
import Nav from "../Nav/Nav";
import { HeroHeader, CategoryHeader } from "./HeaderTypes";
import useToggleDialog from "@/hooks/useToggleDialog";
import { _useDispatch, _useSelector } from "@/app/hooks";
import _Dialog from "@/components/UI/Dialog";

type Props = {};
const Header: FC<Props> = () => {
  const _slug = usePathname();
  const isHero = !findPathname(_slug, 1);
  const isCategory = findPathname(_slug, 1);
  const isProduct = findPathname(_slug, 2);

  const { toggleDialog } = useToggleDialog();

  const headerStyles = () => {
    if (isHero && !isProduct) {
      return "max-width-container-header h-[60rem] md:h-[72.9rem] relative";
    }
    if (isCategory && !isProduct) {
      return "max-width-container-category-header md:h-[33.6rem] relative";
    }
    if (isProduct) {
      return "container mx-auto relative";
    }
    return "";
  };

  const renderHeader = () => {
    return (
      <>
        {isHero && !isProduct && <HeroHeader />}
        {isCategory && !isProduct && (
          <CategoryHeader slug={findPathname(_slug, 1)} />
        )}
      </>
    );
  };

  return (
    <>
      <header>
        <Section dynamicStyles={headerStyles()} bgColor="bg-header">
          <Nav
            icon={<Cart onClick={toggleDialog} />}
            navHeight="h-[8.9rem] md:h-[9.6rem]"
          >
            <MobileNav />
          </Nav>
          {renderHeader()}
        </Section>
      </header>
    </>
  );
};
export default Header;
