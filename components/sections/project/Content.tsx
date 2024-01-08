import AutoLink from '@/components/AutoLink'
import { config } from '@/sanity/config/client-config'
import styles from '@/styles/modules/project/content.module.sass'
import { ProjectProps } from '@/types/sanity'
import { PortableText } from '@portabletext/react'
import { getFile, getImageDimensions } from '@sanity/asset-utils'
import imageUrlBuilder from '@sanity/image-url'
import { SanityAssetDocument, SanityImageAssetDocument } from 'next-sanity'
import Image from 'next/image'

type ProjectContentImageProps = {
  value: SanityImageAssetDocument & {
    desc?: string
    bg: boolean
  }
}

type ProjectContentVideoProps = {
  value: SanityAssetDocument
}

export default function Content({ project }: { project: ProjectProps }) {
  if (!project.content) return <p>Geen uitgebreide project informatie beschikbaar...</p>

  function ContentImage({ value }: ProjectContentImageProps) {
    const { width, height } = getImageDimensions(value)

    return (
      <div className={styles.imageBlock}>
        <div className={styles.imageBlock__image} data-bg={value.bg}>
          <Image
            src={imageUrlBuilder(config).image(value).url()}
            alt={value.desc || ' '}
            width={width}
            height={height}
            quality={100}
            sizes="(min-width: 940px) 854px, 93.55vw"
            draggable={false}
          />
        </div>
        {value.desc && <p className={styles.imageBlock__desc}>{value.desc}</p>}
      </div>
    )
  }

  function ContentVideo({ value }: ProjectContentVideoProps) {
    const video = getFile(value, config)

    return (
      <div className={styles.videoBlock}>
        <video className={styles.videoBlock__video} autoPlay playsInline muted loop>
          <source src={video.asset.url} type={`video/${video.asset.extension}`} />
        </video>
        {value.desc && <p className={styles.videoBlock__desc}>{value.desc}</p>}
      </div>
    )
  }

  return (
    <>
      <section>
        <PortableText
          value={project.content}
          components={{
            types: {
              image: ContentImage,
              video: ContentVideo,
            },
            block: {
              normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
              h2: ({ children }) => <h2 className={styles.heading}>{children}</h2>,
              h3: ({ children }) => <h3 className={styles.subheading}>{children}</h3>,
              h4: ({ children }) => <h4 className={styles.subheading}>{children}</h4>,
              h5: ({ children }) => <h5 className={styles.subheading}>{children}</h5>,
              h6: ({ children }) => <h6 className={styles.subheading}>{children}</h6>,
            },
            list: {
              bullet: ({ children }) => <ul className={styles.list}>{children}</ul>,
              number: ({ children }) => <ol className={styles.list}>{children}</ol>,
            },
            listItem: {
              bullet: ({ children }) => <li className={styles.list__item}>{children}</li>,
              number: ({ children }) => <li className={styles.list__item}>{children}</li>,
            },
            marks: {
              link: ({ children, value }) => {
                return (
                  <AutoLink className={styles.link} href={value.href}>
                    {children}
                  </AutoLink>
                )
              },
            },
          }}
        />
      </section>
    </>
  )
}
