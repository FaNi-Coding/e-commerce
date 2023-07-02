import React from 'react'
import Nav from '../Nav/Nav'
import Section from '../../UI/Section/Section'
import FooterBody from './FooterBody'
import SocialMediaIcons from '../../Icons/SocialMediaIcons/SocialMediaIcons'
import MobileTabletFooterNav from '../Nav/MobileTabletFooterNav'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Section
    bgColor='bg-black'
    dynamicStyles='container flex justify-between gap-[4.8rem] mx-auto py-[3.8rem] md:gap-[3.2rem] md:py-[4.6rem] lg:py-[4.8rem] lg:gap-[3.6rem] relative'
  >
   <footer className='hidden md:hidden lg:flex lg:flex-col gap-[4rem] w-full'>
        <Nav />
        <FooterBody> 
            <SocialMediaIcons />
        </FooterBody>
        <p className='body text-white'>Copyright 2021. All Rights Reserved</p>
    </footer>  
    <footer className='hidden  md:flex md:flex-col gap-[4rem] lg:hidden w-full'>
        <MobileTabletFooterNav />
        <FooterBody />
        <div className='flex justify-between md:pt-[4.8rem] lg:pt-[2rem]'>
        <p className='body text-white'>Copyright 2021. All Rights Reserved</p>
        <SocialMediaIcons />
        </div>
    </footer>   
    <footer className='flex flex-col gap-[4rem] md:hidden lg:hidden w-full '>
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