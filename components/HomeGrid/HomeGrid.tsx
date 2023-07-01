import { FC } from 'react'
import Section from '../Section/Section'
import BasicImageComp from '../Image/BasicImageComp'
import { responsive } from '@/styles/responsive'
import Article from '../Article/Article'
import Button from '../Button/Button'
import CoverImageComp from '../Image/CoverImageComp'
import ZX7 from '../../assets/home/desktop/image-speaker-zx7.jpg'
import ZX9 from '../../assets/home/desktop/image-speaker-zx9.png'
import YX1 from '../../assets/home/desktop/image-earphones-yx1.jpg'
import * as styles from './styles'
import Circles from '../Icons/Circles'

type Props = {}
const HomeGrid: FC<Props> = () => {
  return (
    <>
      <Section dynamicStyles='max-width-container grid grid-cols-1  md:gap-[4.8rem]'>
        <div className={styles.FirstGridWrapper}>
          <Circles />
          <BasicImageComp
            src={ZX9}
            alt='dic'
            dynamicWrapperStyles='w-1/3 pt-[5.5rem] md:pt-[5.2rem] lg:pt-0 lg:ml-auto  lg:mb-[-1.7rem] clipZX9Img'
            sizes={`${responsive.laptop} 20vw, 100vw`}
          />
          <Article dynamicStyles='max-w-[35rem] mx-auto text-center items-center lg:items-start lg:text-left lg:py-[7rem]'>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button secondary>SEE PRODUCT</Button>
          </Article>
        </div>
        <div className={styles.SecondGridWrapper}>
          <Article dynamicStyles=' mr-auto pl-[9.5rem] py-[10.1rem] z-10'>
            <h4>ZX7 SPEAKER</h4>
            <Button secondary>SEE PRODUCT</Button>
          </Article>
          <CoverImageComp
            src={ZX7}
            alt='dic'
            sizes={`${responsive.laptop} 60vw, 100vw`}
          />
        </div>
        <span className={styles.InlineGridWrapper}>
          <BasicImageComp src={YX1} alt='dic' dynamicWrapperStyles='w-full' />
          <Article dynamicStyles='mr-auto pl-[2.4rem] md:pl-[4.15rem] lg:pl-[9.5rem] py-[10.1rem] w-full md:w-full bg-tertiary'>
            <h4>YX1 EARPHONES</h4>
            <Button secondary>SEE PRODUCT</Button>
          </Article>
        </span>
      </Section>
    </>
  )
}
export default HomeGrid
