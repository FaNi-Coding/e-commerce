import { FC } from 'react'
import Section from '../Section/Section'
import CategoryNavItems from '@/components/Layout/Nav/CategoryNavItems'

type Props = {}
const CategoryLinksSection: FC<Props> = () => {
  return (
    <Section dynamicStyles='max-width-container flex- col row-laptop'>
        <div className= 'flex flex-col lg:flex-row bg-white w-full px-[2.4rem] py-[3.2rem] gap-[1rem] h-full'>
        <CategoryNavItems />
        </div>
    
    
    </Section>
  )
}
export default CategoryLinksSection
