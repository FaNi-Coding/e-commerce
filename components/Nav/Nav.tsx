'use client'
import { FC, useEffect, useState } from 'react'
import Section from '../Section/Section'
import Link from 'next/link'
import Logo from '../Icons/Logo'
import Cart from '../Icons/Cart'
import Hamburger from '../Icons/Hamburger'
import { navLinks } from './navLinks'
import HamburgerNav from './HamburgerNav'
import { responsive } from '@/styles/responsive'
import useMediaQuery from '@/hooks/useMediaQuery'

import * as styles from './styles'

type Props = {}

const Nav: FC<Props> = ({}) => {
  const isTabletL = useMediaQuery(responsive.tabletL)
  const [isOpen, setIsOpen] = useState(false)

  const toggleHamburger = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isTabletL) {
      setIsOpen(false)
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = 'unset'
  }, [isOpen, isTabletL])

  const hamburgerMenu = () => {
    return (
      <>
        {isOpen && (
          <div className={styles.HamburgerOverlay}>
            <div className={styles.MobileNavBackground}>
              <HamburgerNav />
            </div>
          </div>
        )}
      </>
    )
  }

  const navList = navLinks.map(({ name, href }) => (
    <li key={name}>
      <Link href={href}>{name}</Link>
    </li>
  ))

  return (
    <Section
      bgColor='black'
      dynamicStyles='max-width-container-no-padding relative'
    >
      <nav className={styles.Nav}>
        <Logo />
        <ul className={styles.NavList}>{navList}</ul>
        <Cart />
      </nav>
      <nav className={styles.MobileNav}>
        <div className={styles.NavWrapper}>
          <Hamburger onClick={toggleHamburger} />
          <Logo />
        </div>
        <Cart />
      </nav>
      {hamburgerMenu()}
    </Section>
  )
}
export default Nav
