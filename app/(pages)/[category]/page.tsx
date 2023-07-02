'use client'
import { newSlug } from '@/utils/functions'
import { usePathname } from 'next/navigation'

const Category = () => {
  const slug = usePathname()
  console.log('router', slug)

  return <p>Category: {newSlug(slug, 1)}</p>
}

export default Category
