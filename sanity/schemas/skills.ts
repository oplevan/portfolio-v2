import { defineField, defineType } from 'sanity';
import { BsPersonGear } from 'react-icons/bs';

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  icon: BsPersonGear,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
});
