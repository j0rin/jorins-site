import styles from '@/styles/modules/typography.module.sass'
import classNames from 'classnames'
import { ReactNode } from 'react'

type TypographyProps = {
  className?: string
  children?: ReactNode
}

export function PageTitle({ className, children, ...props }: TypographyProps) {
  return (
    <h1 className={classNames(styles.pageTitle, className)} {...props}>
      {children}
    </h1>
  )
}

export function PageSubtitle({ className, children, ...props }: TypographyProps) {
  return (
    <h2 className={classNames(styles.pageSubtitle, className)} {...props}>
      {children}
    </h2>
  )
}
