import {defineType, defineField} from 'sanity'

export const cardGrid = defineType({
  name: 'cardGrid',
  title: 'Card Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'card',
          title: 'Card',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Info', value: 'infoCard'},
                  {title: 'Highlight', value: 'highlight'},
                  {title: 'List Card', value: 'listCard'},
                ],
                layout: 'radio',
              },
              initialValue: 'infoCard',
            },
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'text', title: 'Text', type: 'text'},
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            },
          ],
          preview: {
            select: {title: 'title', subtitle: 'text', media: 'image'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {cards: 'cards'},
    prepare({cards}) {
      return {
        title: `Card Grid`,
        subtitle: `${cards?.length || 0} card${cards?.length === 1 ? '' : 's'}`,
      }
    },
  },
})
