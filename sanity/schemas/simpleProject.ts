import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Simple project',
  name: 'simpleProject',
  type: 'document',
  fields: [
    defineField({
      title: 'Feature project on homepage',
      name: 'featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Date',
      name: 'date',
      type: 'object',
      fields: [
        {
          title: 'Start date',
          name: 'start',
          type: 'date',
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'End date',
          name: 'end',
          type: 'date',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Color',
      name: 'color',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (value === undefined) {
            return true
          }

          const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

          if (!hexColorRegex.test(value)) {
            return 'Please enter a valid hex color code.'
          }

          return true
        }),
    }),
    defineField({
      title: 'Description',
      name: 'desc',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'object',
      fields: [
        {
          title: 'Link',
          name: 'link',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
              allowRelative: false,
            }),
        },
        {
          title: 'Text',
          name: 'text',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
