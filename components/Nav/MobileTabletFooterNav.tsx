import React from 'react'
import Logo from '../Icons/Logo'
import Link from 'next/link'
import { navLinks } from './navLinks'
import * as styles from './styles'

type Props = {}

const MobileTabletFooterNav = (props: Props) => {

    const navList = navLinks.map(({ name, href }) => (
        <li key={name}>
          <Link href={href}>{name}</Link>
        </li>
      ))

  return (
  <nav className="flex items-center md:items-start flex-col gap-[4rem]">
 <Logo />
 <ul className="flex flex-col items-center md:flex-row md:items-start gap-[3rem] w-full text-white uppercase">{navList}</ul>
  </nav>
  )
}

export default MobileTabletFooterNav