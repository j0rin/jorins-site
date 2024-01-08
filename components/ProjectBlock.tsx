'use client'

import styles from '@/styles/modules/projectBlock.module.sass'
import { ProjectProps } from '@/types/sanity'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { getImageDimensions } from '@sanity/asset-utils'
import { easeOut, motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { CSSProperties, useRef } from 'react'
import AutoLink from './AutoLink'

export default function ProjectBlock({ project }: { project: ProjectProps }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  if (!project) return null

  const { width: imageWidth, height: imageHeight } = getImageDimensions(project.thumbnail)

  const getMotionVariants = (duration: number, delay: number, y: number | string) => ({
    hidden: { y: y, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: duration, ease: easeOut, delay: delay },
    },
  })

  return (
    <AutoLink
      key={project._id}
      ref={ref}
      className={styles.container}
      href={project.slug ? `/werk/${project.slug}` : project.url.link}
    >
      <motion.div initial="hidden" animate={isInView && 'visible'} variants={getMotionVariants(0.5, 0.2, 0)}>
        <div
          className={styles.spotlight}
          style={
            project.color
              ? ({
                  '--color': `${project.color}`,
                } as CSSProperties)
              : {}
          }
        />
      </motion.div>
      <div className={styles.infoContainer}>
        <motion.p
          className={styles.infoContainer__title}
          initial="hidden"
          animate={isInView && 'visible'}
          variants={getMotionVariants(0.3, 0, '20%')}
        >
          {project.title}
          {!project.date.end && (
            <span className={styles.infoContainer__wipTag} aria-hidden="true">
              WIP
            </span>
          )}
        </motion.p>
        <motion.p
          className={styles.infoContainer__desc}
          initial="hidden"
          animate={isInView && 'visible'}
          variants={getMotionVariants(0.3, 0.1, '20%')}
        >
          {project.desc}
        </motion.p>
      </div>
      <motion.div initial="hidden" animate={isInView && 'visible'} variants={getMotionVariants(0.5, 0.2, '10%')}>
        <div className={styles.thumbnail}>
          <Image
            src={project.thumbnail}
            alt=" "
            width={imageWidth}
            height={imageHeight}
            quality={100}
            draggable={false}
            sizes="(min-width: 940px) 636px, (min-width: 500px) calc(72.38vw - 30px), calc(100vw - 82px)"
            aria-hidden="true"
          />
        </div>
      </motion.div>
      <div className={styles.openIcon}>
        <ArrowUpRightIcon />
      </div>
    </AutoLink>
  )
}
