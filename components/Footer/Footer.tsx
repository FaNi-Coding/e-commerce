import React from 'react'
import Nav from '../Nav/Nav'
import Section from '../Section/Section'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Section
    bgColor='bg-black'
    dynamicStyles='max-width-container relative'
  >
    <footer className='w-full'>
        <Nav />
    </footer>   
  </Section>
  )
}

export default Footer