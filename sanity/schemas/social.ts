import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
  ],
});
