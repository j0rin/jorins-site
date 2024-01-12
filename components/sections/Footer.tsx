'use client'

import AutoLink from '@/components/AutoLink'
import styles from '@/styles/modules/footer.module.sass'
import { checkActivePath } from '@/utils/checkActivePath'
import { navLinks, socialLinks } from '@/utils/siteLinks.js'
import { usePathname } from 'next/navigation'
import { SimpleButton } from '../buttons'

export default function Footer() {
  const categories = [
    { title: 'Navigatie', links: navLinks },
    { title: 'Social', links: socialLinks },
  ]

  const currentPath = usePathname()

  return (
    <footer className={styles.container}>
      <div className={styles.container__inner}>
        <div>
          <h3 className={styles.heading}>Neem contact met mij op</h3>
          <SimpleButton href="mailto:j.zanstra@gmail.com">j.zanstra@gmail.com</SimpleButton>
        </div>
        {categories.map((category, listIndex) => (
          <div key={listIndex}>
            <h3 className={styles.heading}>{category.title}</h3>
            <ul className={styles.linkList}>
              {category.links.map((link, linkIndex) => {
                const isActive = checkActivePath(currentPath, link.link)

                return (
                  <li key={listIndex + linkIndex}>
                    <AutoLink className={styles.linkList__item} href={link.link} data-active={isActive}>
                      {isActive ? '/ ' + link.title : link.title}
                    </AutoLink>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
