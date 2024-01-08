import { SimpleButton } from '@/components/buttons'
import { PageHeaderContainer } from '@/components/containers'
import { PageSubtitle, PageTitle } from '@/components/typography'
import styles from '@/styles/modules/project/header.module.sass'
import { ProjectProps } from '@/types/sanity'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { format, parseISO } from 'date-fns'
import { nl } from 'date-fns/locale'
import Image from 'next/image'

export default function Header({ project }: { project: ProjectProps }) {
  const startDate = format(parseISO(project.date.start), 'MMM yyyy', { locale: nl })
  const endDate = project.date.end ? format(parseISO(project.date.end), 'MMM yyyy', { locale: nl }) : 'heden'

  return (
    <PageHeaderContainer className={styles.container}>
      <PageTitle>{project.title}</PageTitle>
      {project.subtitle && <PageSubtitle>{project.subtitle}</PageSubtitle>}
      {(project.tags || project.tools || startDate || endDate || project.desc || project.context || project.url) && (
        <div className={styles.infoContainer}>
          {project.tags && (
            <ul className={styles.tagList}>
              {project.tags.map((tag, index) => (
                <li key={index} className={styles.tagList__item}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <div className={styles.infoCols}>
            {(project.tools || startDate || endDate || project.client) && (
              <div className={styles.infoCols__col}>
                {project.tools && (
                  <div>
                    <h3 className={styles.heading}>Tools</h3>
                    <ul className={styles.toolList}>
                      {project.tools.map((tool) => (
                        <li key={tool._id} className={styles.toolList__item}>
                          <Image
                            src={tool.icon}
                            alt=" "
                            width={24}
                            height={24}
                            quality={100}
                            priority={true}
                            draggable={false}
                            aria-hidden="true"
                          />
                          {tool.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {(startDate || endDate) && (
                  <div>
                    <h3 className={styles.heading}>Datum</h3>
                    <p className={styles.paragraph}>
                      {startDate} - {endDate}
                    </p>
                  </div>
                )}
                {project.client && (
                  <div>
                    <h3 className={styles.heading}>Klant</h3>
                    <p className={styles.paragraph}>{project.client}</p>
                  </div>
                )}
              </div>
            )}
            {(project.context || project.url) && (
              <div className={styles.infoCols__col}>
                <div>
                  <h3 className={styles.heading}>Beschrijving</h3>
                  <p className={styles.paragraph}>{project.desc}</p>
                </div>
                {project.context && (
                  <div>
                    <h3 className={styles.heading}>Context</h3>
                    <p className={styles.paragraph}>{project.context}</p>
                  </div>
                )}
                {project.url && (
                  <SimpleButton className={styles.urlButton} href={project.url.link}>
                    {project.url.text}
                    <ArrowUpRightIcon />
                  </SimpleButton>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </PageHeaderContainer>
  )
}
