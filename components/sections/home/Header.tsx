import { SimpleButton } from '@/components/buttons'
import { PageHeaderContainer } from '@/components/containers'
import { PageTitle } from '@/components/typography'
import styles from '@/styles/modules/home/header.module.sass'
import { socialLinks } from '@/utils/siteLinks.js'
import Image from 'next/image'

export default function Header() {
  return (
    <PageHeaderContainer>
      <div className={styles.titleContainer}>
        <Image
          className={styles.titleContainer__avatar}
          src="/avatar.jpg"
          alt=" "
          width={256}
          height={256}
          quality={100}
          priority={true}
          draggable={false}
          aria-hidden="true"
        />
        <PageTitle className={styles.titleContainer__title}>jorin.design</PageTitle>
      </div>
      <h2 className={styles.intro}>
        Jorin is een designer die zich richt op het creëren van gebruiksvriendelijke en visueel aantrekkelijke
        interfaces.
      </h2>
      <ul className={styles.linkList}>
        {socialLinks.map((link, i) => (
          <li key={i}>
            <SimpleButton className={styles.linkList__item} href={link.link}>
              {link.title}
            </SimpleButton>
          </li>
        ))}
      </ul>
    </PageHeaderContainer>
  )
}
