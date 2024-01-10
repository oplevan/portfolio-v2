import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  featured: boolean;
  name: string;
  slug: string;
  projectType?: string;
  completionDate?: string;
  techStack: [...any, { name: string; icon: string }];
  links?: {
    github?: string;
    web?: string;
    appStore?: string;
    googlePlay?: string;
  };
  images: {
    preview: string;
    mockup?: string;
    gallery?: null | string[];
  };
  description: {
    intro: string;
    short?: PortableTextBlock[];
  };
  developmentProcess?: PortableTextBlock[];
};

export type FeaturedProject = {
  _id: string;
  name: string;
  slug: string;
  techStack: [...any, { name: string }];
  links?: {
    web?: string;
    github?: string;
    appStore?: string;
    googlePlay?: string;
  };
  previewImage: string;
  introDescription: string;
};
