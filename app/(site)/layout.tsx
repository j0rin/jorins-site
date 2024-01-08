import Nav from '@/components/Nav'
import { PageContentContainer, PageLayoutContainer } from '@/components/containers'
import Footer from '@/components/sections/Footer'
import '@/styles/global/global.sass'
import StyledJsxRegistry from './registry'

export const metadata = {
  title: { template: 'Jorin Zanstra - %s' },
  description: 'Persoonlijke design portfolio van Jorin Zanstra.',
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledJsxRegistry>
      <PageLayoutContainer>
        <Nav />
        <PageContentContainer>{children}</PageContentContainer>
      </PageLayoutContainer>
      <Footer />
    </StyledJsxRegistry>
  )
}
