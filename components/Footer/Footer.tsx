import React from 'react'
import Nav from '../Nav/Nav'
import Section from '../Section/Section'
import FooterBody from './FooterBody'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'
import FooterTabletNav from '../Nav/FooterTabletNav'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Section
    bgColor='bg-black'
    dynamicStyles='max-width-container relative'
  >
{    <footer className='hidden md:hidden w-full lg:flex lg:flex-col gap-[4rem]'>
        <Nav />
        <FooterBody> 
            <SocialMediaIcons />
        </FooterBody>
        <p className='body text-white'>Copyright 2021. All Rights Reserved</p>
    </footer>  } 
    <footer className='hidden w-full md:flex md:flex-col gap-[4rem] lg:hidden'>
        <FooterTabletNav />
        <FooterBody />
        <div className='flex justify-between'>
        <p className='body text-white'>Copyright 2021. All Rights Reserved</p>
        <SocialMediaIcons />
        </div>
    </footer>   
  </Section>
  )
}

export default Footer