import { PortableTextBlock } from 'sanity';

interface SanityBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Profile extends SanityBody {
  _type: 'profile';
  fullName: string;
  headline: string;
  profilePicture: Image;
  shortBio: string;
  fullBio: PortableTextBlock[];
}

export interface Socials extends SanityBody {
  _type: 'social';
  name: string;
  url: string;
}
