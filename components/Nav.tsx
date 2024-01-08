'use client'

import styles from '@/styles/modules/nav.module.sass'
import { checkActivePath } from '@/utils/checkActivePath'
import { navLinks } from '@/utils/siteLinks.js'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import AutoLink from './AutoLink'

export default function Nav() {
  const filteredNavLinks = navLinks.filter((link) => ['home', 'work', 'about'].includes(link.value))
  const currentPath = usePathname()

  return (
    <nav className={styles.container}>
      <div className={styles.container__inner}>
        <div className={styles.nameContainer}>
          <div className={styles.nameContainer__avatar}>
            <Image
              src="/avatar.jpg"
              alt="Jorin Zanstra"
              width={128}
              height={128}
              quality={100}
              priority={true}
              draggable={false}
              aria-hidden="true"
            />
            <div className={styles.nameContainer__availability} aria-hidden="true" />
          </div>
          <div>
            <h1 className={styles.nameContainer__name}>Jorin Zanstra</h1>
            <h2 className={styles.nameContainer__role}>Interaction Designer</h2>
          </div>
        </div>
        <ul className={styles.navList}>
          {filteredNavLinks.map((link, index) => (
            <li key={index}>
              <AutoLink
                className={styles.navList__item}
                href={link.link}
                data-active={checkActivePath(currentPath, link.link)}
              >
                {link.title}
              </AutoLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
