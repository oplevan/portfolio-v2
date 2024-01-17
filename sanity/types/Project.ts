import { PortableTextBlock } from 'sanity';

interface commonProps {
  _id: string;
  name: string;
  slug: string;
  links?: {
    web?: string;
    github?: string;
    appStore?: string;
    googlePlay?: string;
  };
}

export type ProjectBrief = commonProps & {
  techStack: [...any, { name: string }];
  previewImage: string;
  introDescription: string;
};

export type ProjectDetailed = commonProps & {
  featured: boolean;
  projectType?: string;
  completionDate?: string;
  techStack: [...any, { name: string; icon: string }];
  images: {
    preview: string;
    mockup?: string;
    gallery?: string[];
  };
  description: {
    intro: string;
    short?: PortableTextBlock[];
  };
  developmentProcess?: PortableTextBlock[];
};
