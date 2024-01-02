import { defineField, defineType } from 'sanity';
import { IoShareSocial } from 'react-icons/io5';

export default defineType({
  name: 'social',
  title: 'Social links',
  type: 'document',
  icon: IoShareSocial,
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
