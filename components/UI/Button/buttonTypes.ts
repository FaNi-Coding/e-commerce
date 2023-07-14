import { ReactNode } from 'react'

export type ButtonProps = {
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  fourthly?: boolean
  isMargin?: boolean
  href?: string
  children?: ReactNode
  dynamicStyles?: string
}
