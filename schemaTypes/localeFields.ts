import {defineType, defineField} from 'sanity'

export const localeString = defineType({
  name: 'localeString',
  title: 'Localized String',
  type: 'object',
  fields: [
    defineField({name: 'de', title: 'German', type: 'string'}),
    defineField({name: 'en', title: 'English', type: 'string'}),
  ],
})

export const localeBlockContent = defineType({
  name: 'localeBlockContent',
  title: 'Localized Content',
  type: 'object',
  fields: [
    defineField({
      name: 'de',
      title: 'German Content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}},
        {
          type: 'object',
          name: 'card',
          title: 'Card Section',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Card Type',
              options: {
                list: [
                  {title: 'Info Card', value: 'infoCard'},
                  {title: 'Highlight Card', value: 'highlightCard'},
                  {title: 'List Card', value: 'listCard'},
                ],
                layout: 'radio',
              },
              initialValue: 'infoCard',
            },
            {
              name: 'backgroundColor',
              title: 'Background Color',
              type: 'string',
              options: {
                list: [
                  { title: 'White', value: 'white' },
                  { title: 'Black', value: 'black' },
                  { title: 'Primary', value: 'red-50' },
                  { title: 'Rose White', value: 'primary/5' },
                ],
                layout: 'radio',
              },
              initialValue: 'primary',
            },
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'text', type: 'text', title: 'Text'},
          ],
        },
        { type: 'cardGrid' },
      ],
    }),
    defineField({
      name: 'en',
      title: 'English Content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}},
        {
          type: 'object',
          name: 'card',
          title: 'Card Section',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Card Type',
              options: {
                list: [
                  {title: 'Info Card', value: 'infoCard'},
                  {title: 'Highlight Card', value: 'highlightCard'},
                  {title: 'List Card', value: 'listCard'},
                ],
                layout: 'radio',
              },
              initialValue: 'infoCard',
            },
            {
              name: 'backgroundColor',
              title: 'Background Color',
              type: 'string',
              options: {
                list: [
                  { title: 'White', value: 'white' },
                  { title: 'Black', value: 'black' },
                  { title: 'Primary', value: 'red-50' },
                  { title: 'Rose White', value: 'primary/5' },
                ],
                layout: 'radio',
              },
              initialValue: 'primary',
            },
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'text', type: 'text', title: 'Text'},
          ],
        },
        { type: 'cardGrid' },
      ],
    }),
  ],
})

export const localeConclusion = defineType({
  name: 'localeConclusion',
  title: 'Conclusion',
  type: 'object',
  fields: [
    // 1️⃣ Type selector (unrelated to content)
    defineField({
      name: 'type',
      title: 'Conclusion Type',
      type: 'string',
      options: {
        list: [
          { title: 'Highlighted', value: 'highlighted' },
          { title: 'Card', value: 'card' },
        ],
        layout: 'radio',
      },
      initialValue: 'highlighted',
    }),

    // 2️⃣ Localized content fields
    defineField({
      name: 'en',
      title: 'English Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'de',
      title: 'German Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})