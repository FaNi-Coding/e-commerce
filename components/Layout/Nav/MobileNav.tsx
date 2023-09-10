'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import Hamburger from '../../Icons/Hamburger';
import { responsive } from '@/styles/responsive';
import useMediaQuery from '@/hooks/useMediaQuery';
import CategoryNavItems from './CategoryNavItems';
import * as styles from './styles';
import Logo from '../../Icons/Logo';

type Props = { children: ReactNode };

const MobileNav: FC<Props> = ({ children }) => {
  const isTabletL = useMediaQuery(responsive.tabletL);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isTabletL) {
      setIsOpen(false);
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'unset';
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
        {children}
      </nav>
      {hamburgerMenu()}
    </>
  );
};

export default MobileNav;
