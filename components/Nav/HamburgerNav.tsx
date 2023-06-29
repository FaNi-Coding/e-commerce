import { hamburgerLinks } from './navLinks'
import { StaticImageData } from 'next/image'
import { FC } from 'react'

import Button from '../Button/Button'
import Chevron from '../Icons/Chevron'
import ImageComp from '../Image/BasicImageComp'
import Link from 'next/link'

/* import * as styles from './styles.ts';
 */
type HamburgerLinkProps = {
  name: string
  img: StaticImageData
  href: string
}
type Props = {}
const HamburgerNav: FC<Props> = () => {
  const hamburgerCards = hamburgerLinks.map(
    ({ name, img, href }: HamburgerLinkProps) => (
      <article
        key={name}
        className='relative flex flex-col justify-center items-center h-full'
      >
        <div className='w-[11rem] h-[11rem] mb-[-5.5rem]'>
          <ImageComp src={img} alt='alo' />
        </div>

        <div className='h-full bg-[#33333320] rounded-md  w-full grid place-items-center '>
          <div className='grid place-items-center pt-[6rem] pb-[2.2rem]'>
            <p className='body uppercase max-h-max'>{name}</p>
            <Button tertiary href={href} dynamicStyles='max-h-max"'>
              Shop
              <Chevron />
            </Button>
          </div>
        </div>
      </article>
    )
  )
  return <>{hamburgerCards}</>
}
export default HamburgerNav
