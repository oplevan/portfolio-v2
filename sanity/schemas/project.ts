import { defineType } from 'sanity';
import { FaRegFolderOpen } from 'react-icons/fa';

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: FaRegFolderOpen,
  fields: [
    {
      name: 'featured',
      title: 'Display project as Featured on Home page',
      type: 'boolean',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: { source: 'name' },
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
    },
    {
      name: 'completionDate',
      title: 'Completion date',
      type: 'date',
      options: {
        dateFormat: 'MMM, YYYY',
      },
    },
    {
      name: 'techStack',
      title: 'Tech stack',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    },
    {
      name: 'links',
      title: 'Links',
      description: '(Include links where users can live view or download your project)',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          title: 'GitHub',
          name: 'github',
          type: 'url',
        },
        {
          title: 'Web',
          name: 'web',
          type: 'url',
        },
        {
          title: 'App Store',
          name: 'appStore',
          type: 'url',
        },
        {
          title: 'Google Play',
          name: 'googlePlay',
          type: 'url',
        },
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'preview',
          title: 'Preview Image',
          type: 'image',
          validation: (Rule) => Rule.required().assetRequired(),
          options: {
            hotspot: true,
          },
        },
        {
          name: 'mockup',
          title: 'Mockup Image',
          type: 'image',
          validation: (Rule) => Rule.required().assetRequired(),
          options: {
            hotspot: true,
          },
        },
        {
          name: 'gallery',
          title: 'Additional images',
          description: '(optional)',
          type: 'array',
          of: [{ type: 'image' }],
          options: {
            layout: 'grid',
          },
        },
      ],
    },
    {
      name: 'description',
      title: 'Project description',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'intro',
          title: 'A short introduction of your project',
          type: 'string',
          validation: (Rule) => Rule.required().max(250),
        },
        {
          name: 'short',
          title: 'A more detailed description of what this project is about.',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        },
      ],
    },
    {
      name: 'developmentProcess',
      description: "Here you can describe in detail how you built your project, what steps you've taken, strategies, challenges & solutions, etc.",
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
});
