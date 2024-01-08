import Link from 'next/link'
import { ReactNode, forwardRef } from 'react'

type AutoLinkProps = {
  className?: string
  href: string
  children?: ReactNode
}

const AutoLink = forwardRef<HTMLAnchorElement, AutoLinkProps>(({ href, children, ...props }, ref) => {
  const isInternalLink = href.startsWith('/')
  const isExternalLink = href.startsWith('http')

  return (
    <>
      {isInternalLink ? (
        <Link ref={ref} href={href} {...props}>
          {children}
        </Link>
      ) : isExternalLink ? (
        <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      ) : (
        <a ref={ref} href={href} {...props}>
          {children}
        </a>
      )}
    </>
  )
})

AutoLink.displayName = 'AutoLink'

export default AutoLink
