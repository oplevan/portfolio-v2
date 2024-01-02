import { defineType } from 'sanity';
import { CiImageOn } from 'react-icons/ci';

export default defineType({
  name: 'siteLogo',
  title: 'Site Logo',
  type: 'document',
  icon: CiImageOn,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'This is your main site logo that appears in the header',
      options: {
        hotspot: true,
      },
    },
  ],
});
