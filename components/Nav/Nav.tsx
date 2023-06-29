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

/* import * as styles from './styles.ts';
 */
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
          <div className='absolute top-[9.6rem] left-0 h-[100vh] w-full z-10 opacityBlack'>
            <div className=' flex flex-col bg-tertiary h-[75vh] w-full px-[2.4rem] py-[3.2rem] gap-[1rem] overflow-scroll'>
              <HamburgerNav />
            </div>
          </div>
        )}
      </>
    )
  }

  const navList = navLinks.map((link) => (
    <li key={link.name}>
      <Link href={link.href}>{link.name}</Link>
    </li>
  ))

  return (
    <Section dynamicStyles='max-width-container-no-padding relative'>
      <nav className='hidden lg:flex h-[9.6rem] justify-between items-center w-full text-white'>
        <Logo />
        <ul className='flex-column sm:flex gap-[3.4rem]'>{navList}</ul>
        <Cart />
      </nav>
      <nav
        className={
          'lg:hidden flex h-[9.6rem] justify-between items-center w-full text-white px-[2.4rem] md:px-[4rem]'
        }
      >
        <div className='flex gap-[4.2rem] items-center w-full '>
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
