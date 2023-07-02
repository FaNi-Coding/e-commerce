import { FC } from 'react'

import { SectionProps } from './sectionTypes'

const Section: FC<SectionProps> = ({ children, bgColor, dynamicStyles }) => {
  return (
    <div className={`${bgColor || "white"}`}>
      <section className={dynamicStyles}>{children}</section>
    </div>
  )
}
export default Section
