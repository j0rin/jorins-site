import { PortableTextBlock } from 'sanity'

export type ProjectProps = {
  _id: string
  title: string
  subtitle: string
  slug: string
  thumbnail: string
  color: string
  tags: string[]
  tools: ToolStackProps[]
  date: {
    start: string
    end: string
  }
  client: string
  desc: string
  context: string
  url: {
    link: string
    text: string
  }
  content: PortableTextBlock[]
}

export type ToolStackProps = {
  _id: string
  title: string
  icon: string
}
