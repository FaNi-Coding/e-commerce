import { FC } from 'react';
import Section from '../Section/Section';
import Link from 'next/link';
/* import {} from './styles'; */

type Props = {};

const navLinks = [
  { href: '/', name: 'Home' },
  { href: '/headphones', name: 'Headphones' },
  { href: '/speakers', name: 'Speakers' },
  { href: '/earphones', name: 'Earphones' },
];

const Nav: FC<Props> = ({}) => {
  return (
    <Section dynamicStyles='max-width-container-no-padding'>
      <nav className='h-[9.6rem] flex justify-between items-center w-full text-white'>
        <div className=''>LOGO{/* <image src='' alt='' /> */}</div>
        <ul className='flex-column sm:flex gap-[3.4rem] '>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <li>kundvagn</li>
        </ul>
      </nav>
    </Section>
  );
};
export default Nav;
