import React, {FC, ReactNode} from 'react'
import Nav from '../Nav/Nav'
import Section from '../../UI/Section/Section'

type Props = {
    children?: ReactNode
}

const FooterBody:FC<Props> = ({children}) => {
  return (
   <article className='flex justify-between items-end'>
   <p className='body text-center md:text-start text-white lg:max-w-[54rem]'>
   Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
   </p>
   {children}
   </article>
  )
}

export default FooterBody