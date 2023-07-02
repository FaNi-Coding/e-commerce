import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Button from '../Button/Button'
import Chevron from '../Icons/Chevron'
import ImageComp from '../Image/BasicImageComp'
import { hamburgerLinks } from './navLinks'
import * as styles from './styles'

type HamburgerLinkProps = {
  name: string
  img: StaticImageData
  href: string
}
type Props = {}
const HamburgerNavItems: FC<Props> = () => {
  const hamburgerCards = hamburgerLinks.map(
    ({ name, img, href }: HamburgerLinkProps) => (
      <section key={name} className={styles.Section}>
        <div className={styles.ImageWrapper}>
          <ImageComp src={img} alt={name} />
        </div>

        <article className={styles.Article}>
          <div className={styles.ArticleContainer}>
            <p className={styles.Body}>{name}</p>
            <Button tertiary href={href} dynamicStyles='max-h-max'>
              Shop
              <Chevron />
            </Button>
          </div>
        </article>
      </section>
    )
  )
  return <>{hamburgerCards}</>
}
export default HamburgerNavItems
