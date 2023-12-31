import { FC, ReactNode } from "react";
import Section from "../../UI/Section/Section";
import Link from "next/link";
import Logo from "../../Icons/Logo";
import { navLinks } from "./navLinks";
import * as styles from "./styles";

type Props = {
  children?: ReactNode;
  icon?: ReactNode;
  navHeight?: string;
};

const Nav: FC<Props> = ({ children, icon, navHeight = "" }) => {
  const navList = navLinks.map(({ name, href }) => (
    <li key={name} className="hoverTertiary">
      <Link href={href}>{name}</Link>
    </li>
  ));

  return (
    <>
      <nav className={`${styles.Nav} ${navHeight}`}>
        <Logo />
        <ul className={styles.NavList}>{navList}</ul>
        {icon}
      </nav>
      {children}
    </>
  );
};
export default Nav;
