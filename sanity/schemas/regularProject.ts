import { DocumentVideoIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  title: 'Regular project',
  name: 'regularProject',
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
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
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
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      title: 'Tools',
      name: 'tools',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'toolStack' }],
        },
      ],
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
      title: 'Client',
      name: 'client',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'desc',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Context',
      name: 'context',
      type: 'text',
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
            }).required(),
        },
        {
          title: 'Text',
          name: 'text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Section heading', value: 'h2' },
            { title: 'Subheading 1', value: 'h3' },
            { title: 'Subheading 2', value: 'h4' },
            { title: 'Subheading 3', value: 'h5' },
            { title: 'Subheading 4', value: 'h6' },
            { title: 'Quote', value: 'blockquote' },
          ],
        }),
        defineArrayMember({
          title: 'Image',
          icon: ImageIcon,
          name: 'image',
          type: 'image',
          fields: [
            defineField({
              title: 'Description',
              name: 'desc',
              type: 'string',
            }),
            defineField({
              title: 'Background',
              name: 'bg',
              type: 'boolean',
              initialValue: true,
            }),
          ],
        }),
        defineArrayMember({
          title: 'Video',
          icon: DocumentVideoIcon,
          name: 'video',
          type: 'file',
          fields: [
            defineField({
              title: 'Description',
              name: 'desc',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
