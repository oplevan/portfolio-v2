import { PortableTextBlock } from 'sanity';

export type Experience = {
  _id: string;
  jobTitle: string;
  employmentType: string;
  location: string;
  employmentStartDate: string;
  employmentEndDate: string;
  companyName: string;
  companyWebsite: string;
  description: PortableTextBlock[];
};
