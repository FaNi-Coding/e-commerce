import React, {FC, ReactNode} from 'react'
import Nav from '../Nav/Nav'
import Section from '../Section/Section'
import Facebook from '../Icons/Facebook'
import Twitter from '../Icons/Twitter'
import Instagram from '../Icons/Instagram'

type Props = {

}

const SocialMediaIcons:FC<Props> = () => {
  return (
   <div className='flex gap-[1rem] items-center'>
    <Facebook />
    <Twitter />
    <Instagram />
   </div>
  )
}

export default SocialMediaIcons