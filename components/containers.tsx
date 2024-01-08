import styles from '@/styles/modules/containers.module.sass'
import classNames from 'classnames'
import { ReactNode } from 'react'

type ContainerProps = {
  className?: string
  children?: ReactNode
}

export function PageLayoutContainer({ children }: ContainerProps) {
  return <div className={styles.pageLayout}>{children}</div>
}

export function PageContentContainer({ children }: ContainerProps) {
  return <main className={styles.pageContent}>{children}</main>
}

export function PageHeaderContainer({ className, children, ...props }: ContainerProps) {
  return (
    <header className={classNames(styles.pageHeader, className)} {...props}>
      {children}
    </header>
  )
}
