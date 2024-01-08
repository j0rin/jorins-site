import ProjectBlock from '@/components/ProjectBlock'
import { getFeaturedProjects } from '@/sanity/sanity-utils'

export default async function FeaturedWork() {
  const projects = await getFeaturedProjects()

  if (projects.length === 0) return null

  return (
    <section>
      {projects.map((project) => (
        <ProjectBlock key={project._id} project={project} />
      ))}
    </section>
  )
}
