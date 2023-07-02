import { FC } from 'react'

import { SectionProps } from './sectionTypes'

const Section: FC<SectionProps> = ({ children, bgColor = "bg-white", dynamicStyles }) => {
  return (
    <div className={`${bgColor}`}>
      <section className={dynamicStyles}>{children}</section>
    </div>
  )
}
export default Section
