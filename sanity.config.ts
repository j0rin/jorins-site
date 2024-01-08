import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { config } from './sanity/config/client-config'
import schemas from './sanity/schemas'

export default defineConfig({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  title: 'jorin.design',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
})
