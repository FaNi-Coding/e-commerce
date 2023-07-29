import { ReactNode, MouseEvent } from 'react'

export type ButtonProps = {
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  fourthly?: boolean
  isMargin?: boolean
  href?: string
  value?:string
  children?: ReactNode
  dynamicStyles?: string
  type?: 'button' | 'link' | 'submit'
  onClick?: (e: MouseEvent) => void
}
