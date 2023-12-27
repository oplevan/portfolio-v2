import { defineField, defineType } from 'sanity';
import { FaRegUser } from 'react-icons/fa6';

export default defineType({
  name: 'profile',
  title: 'Profile Information',
  type: 'document',
  icon: FaRegUser,
  fields: [
    {
      name: 'introLine',
      title: 'Intro Line',
      type: 'string',
      description: 'A short introduction that is goes above your name like "Hi," or "Hi, my name is"',
      validation: (Rule) => Rule.max(60).warning('Maximum 60 characters allowed'),
    },
    defineField({
      name: 'fullName',
      title: 'Full name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).error('Please enter your full name'),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'A strong punch line for your Intro section.',
      validation: (Rule) => Rule.min(30).max(60).warning('Shorter headlines are usually better'),
    }),
    {
      name: 'profilePicture',
      title: 'Profile picture',
      type: 'image',
      description: 'Upload a profile picture.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      description: 'In a few sentences, what do you do?',
      rows: 4,
      validation: (Rule) => Rule.max(320).error('Maximum 320 characters'),
    },
    {
      name: 'fullBio',
      title: 'Full Bio',
      type: 'array',
      description: 'This will be displayed in the "About me" section on Home page.',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'socials',
      title: 'Social links',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      title: 'Your CV',
      name: 'cv',
      type: 'file',
    },
  ],
});
