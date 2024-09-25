import {defineField, defineType} from 'sanity'

export const petType = defineType({
  name: 'pet',
  title: 'pet',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})