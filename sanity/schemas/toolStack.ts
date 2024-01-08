import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Tool stack',
  name: 'toolStack',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
