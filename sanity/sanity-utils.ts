import { ProjectProps, ToolStackProps } from '@/types/sanity'
import { createClient, groq } from 'next-sanity'
import { config } from './config/client-config'

export const client = createClient(config)

export async function getProject(slug: string): Promise<ProjectProps> {
  return client.fetch(
    groq`*[_type == 'regularProject' && slug.current == $slug][0] {
      _id,
      title,
      subtitle,
      'slug': slug.current,
      'thumbnail': thumbnail.asset->url,
      color,
      tags,
      'tools': tools[]->{_id, title, 'icon': icon.asset->url},
      date,
      client,
      desc,
      context,
      'url': url{link, text},
      content,
    }`,
    { slug }
  )
}

export async function getProjects(): Promise<ProjectProps[]> {
  return client.fetch(
    groq`*[_type in ['regularProject', 'simpleProject']] | order(date.end desc) {
      _type == 'regularProject' => {
        _id,
        title,
        'slug': slug.current,
        'date': date{start, end},
        'thumbnail': thumbnail.asset->url,
        color,
        desc,
      },
      _type == 'simpleProject' => {
        _id,
        title,
        'date': date{start, end},
        'thumbnail': thumbnail.asset->url,
        'url': url{link, text},
        color,
        desc,
      }
    }`
  )
}

export async function getFeaturedProjects(): Promise<ProjectProps[]> {
  return client.fetch(
    groq`*[_type in ['regularProject', 'simpleProject'] && featured == true] | order(date.end desc) {
      _type == 'regularProject' => {
        _id,
        title,
        'slug': slug.current,
        'date': date{start, end},
        'thumbnail': thumbnail.asset->url,
        color,
        desc,
      },
      _type == 'simpleProject' => {
        _id,
        title,
        'date': date{start, end},
        'thumbnail': thumbnail.asset->url,
        color,
        'url': url{link, text},
        desc,
      }
    }`
  )
}

export async function getToolStack(): Promise<ToolStackProps[]> {
  return client.fetch(
    groq`*[_type == 'toolStack'] | order(title asc) {
      _id,
      title,
      'icon': icon.asset->url,
    }`
  )
}
