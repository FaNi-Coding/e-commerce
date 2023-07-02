import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Chevron from '../../Icons/Chevron'
import ImageComp from '../../UI/Image/BasicImageComp'
import { categoryLinks } from './navLinks'
import * as styles from './styles'
import Button from '@/components/UI/Button/Button'

type CategoryLinkProps = {
  name: string
  img: StaticImageData
  href: string
}
type Props = {}
const CategoryNavItems: FC<Props> = () => {
  const CategoryCards = categoryLinks.map(
    ({ name, img, href }: CategoryLinkProps) => (
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
  return <>{CategoryCards}</>
}
export default CategoryNavItems
