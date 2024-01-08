import styles from '@/styles/modules/buttons.module.sass'
import classNames from 'classnames'
import { ReactNode } from 'react'
import AutoLink from './AutoLink'

type ButtonProps = {
  className?: string
  href: string
  children?: ReactNode
}

export function SimpleButton({ className, href, children, ...props }: ButtonProps) {
  return (
    <AutoLink className={classNames(styles.simpleButton, className)} href={href} {...props}>
      {children}
    </AutoLink>
  )
}
