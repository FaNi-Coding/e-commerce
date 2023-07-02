import React from 'react'
import Nav from '../Nav/Nav'
import Section from '../Section/Section'
import FooterBody from './FooterBody'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'
import MobileTabletFooterNav from '../Nav/MobileTabletFooterNav'

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
        <MobileTabletFooterNav />
        <FooterBody />
        <div className='flex justify-between'>
        <p className='body text-white'>Copyright 2021. All Rights Reserved</p>
        <SocialMediaIcons />
        </div>
    </footer>   
    <footer className='w-full flex flex-col gap-[4rem] md:hidden lg:hidden'>
        <MobileTabletFooterNav />
        <FooterBody />
        <div className='flex flex-col justify-center items-center gap-[4rem]'>
        <p className='body text-white'>Copyright 2021. All Rights Reserved</p>
        <SocialMediaIcons />
        </div>
    </footer> 
  </Section>
  )
}

export default Footer