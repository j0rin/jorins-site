'use client'

import config from '@/sanity.config'
import { NextStudio } from 'next-sanity/studio'
import './styles.sass'

export default function AdminPage() {
  return <NextStudio config={config} />
}
