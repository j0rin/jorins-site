import Content from '@/components/sections/project/Content'
import Header from '@/components/sections/project/Header'
import { getProject } from '@/sanity/sanity-utils'
import { notFound } from 'next/navigation'

type ProjectPageProps = { params: { project: string } }

export default async function Project({ params }: ProjectPageProps) {
  const slug = params.project
  const project = await getProject(slug)

  if (!project) return notFound()

  return (
    <>
      <Header project={project} />
      <Content project={project} />
    </>
  )
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const slug = params.project
  const project = await getProject(slug)

  if (!project) return null

  return {
    title: project.title,
    description: project.desc ? project.desc : 'Een project uitgevoerd door Jorin Zanstra.',
  }
}
