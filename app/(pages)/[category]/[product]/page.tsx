'use client'
import { newSlug } from '@/utils/functions'
import { usePathname } from 'next/navigation'

const Product = () => {
  const slug = usePathname()
  console.log('router', slug)

  return <p>product: {newSlug(slug, 2)}</p>
}

export default Product
