import { type SchemaTypeDefinition } from 'sanity';

import profile from './schemas/profile';
import social from './schemas/social';
import siteLogo from './schemas/site-logo';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, social, siteLogo],
};
