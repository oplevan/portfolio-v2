import { defineType } from 'sanity';
import { CiViewTimeline } from 'react-icons/ci';

export default defineType({
  name: 'experience',
  type: 'document',
  icon: CiViewTimeline,
  fields: [
    {
      name: 'jobTitle',
      type: 'string',
    },
    {
      name: 'employmentType',
      type: 'string',
      options: {
        list: [
          {
            title: 'Full time',
            value: 'full-time',
            type: 'string',
          },
          {
            title: 'Part time',
            value: 'part-time',
            type: 'string',
          },
          {
            title: 'Contract',
            value: 'contract',
            type: 'string',
          },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'location',
      type: 'string',
    },
    {
      name: 'employmentStartDate',
      type: 'date',
      options: {
        dateFormat: 'MMM, YYYY',
      },
    },
    {
      name: 'employmentEndDate',
      type: 'date',
      options: {
        dateFormat: 'MMM, YYYY',
      },
    },
    {
      name: 'companyName',
      type: 'string',
    },
    {
      name: 'companyWebsite',
      type: 'url',
    },
    {
      name: 'description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
  orderings: [
    {
      title: 'Employment End Date, Latest',
      name: 'employmentEndDateDesc',
      by: [{ field: 'employmentEndDate', direction: 'desc' }],
    },
  ],
});
