import { PortableTextBlock } from 'sanity';

export type Profile = {
  _id: string;
  introLine: string;
  fullName: string;
  headline: string;
  profilePicture: {
    alt: string;
    image: string;
  };
  shortBio: string;
  fullBio: PortableTextBlock[];
  socials: [];
  email: string;
  CV: string;
  // skills: string[];
};
