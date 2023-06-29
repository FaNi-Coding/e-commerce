import Headphones from '../../assets//shared/desktop/image-category-thumbnail-headPhones.png';
import Earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import Speakers from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

export const navLinks = [
  { href: '/', name: 'Home' },
  { href: '/headphones', name: 'Headphones' },
  { href: '/speakers', name: 'Speakers' },
  { href: '/earphones', name: 'Earphones' },
] as const;

export const hamburgerLinks = [
  { href: '/headphones', name: 'Headphones', img: Headphones },
  { href: '/speakers', name: 'Speakers', img: Earphones },
  { href: '/earphones', name: 'Earphones', img: Speakers },
] as const;
