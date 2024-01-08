import ProjectBlock from '@/components/ProjectBlock'
import { PageHeaderContainer } from '@/components/containers'
import { PageSubtitle, PageTitle } from '@/components/typography'
import { getProjects } from '@/sanity/sanity-utils'

export const metadata = { title: 'Werk' }

export default async function Projects() {
  const projects = await getProjects()

  return (
    <>
      <PageHeaderContainer>
        <PageTitle>Werk</PageTitle>
        <PageSubtitle>Een reeks projecten waaraan ik heb gewerkt.</PageSubtitle>
      </PageHeaderContainer>
      <section>
        {projects.length === 0 ? (
          <p>Geen werk beschikbaar...</p>
        ) : (
          projects.map((project) => <ProjectBlock key={project._id} project={project} />)
        )}
      </section>
    </>
  )
}
