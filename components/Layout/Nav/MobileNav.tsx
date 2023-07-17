"use client";

import { FC, useEffect, useState } from "react";
import Hamburger from "../../Icons/Hamburger";
import { responsive } from "@/styles/responsive";
import useMediaQuery from "@/hooks/useMediaQuery";
import CategoryNavItems from "./CategoryNavItems";
import * as styles from "./styles";
import Cart from "../../Icons/Cart";
import Logo from "../../Icons/Logo";
import useToggleDialog from "@/hooks/useToggleDialog";

type Props = {};

const MobileNav: FC = () => {
  const isTabletL = useMediaQuery(responsive.tablet);
  const [isOpen, setIsOpen] = useState(false);
  const { toggleDialog } = useToggleDialog();

  useEffect(() => {
    if (isTabletL) {
      setIsOpen(false);
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }, [isOpen, isTabletL]);

  const hamburgerMenu = () => {
    return (
      <>
        {isOpen && (
          <div className={styles.HamburgerOverlay}>
            <div className={styles.MobileNavBackground}>
              <CategoryNavItems />
            </div>
          </div>
        )}
      </>
    );
  };

  const toggleHamburger = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav className={styles.MobileNav}>
        <div className={styles.NavWrapper}>
          <Hamburger onClick={toggleHamburger} />
          <Logo />
        </div>
        <Cart onClick={toggleDialog} />
      </nav>
      {hamburgerMenu()}
    </>
  );
};

export default MobileNav;
