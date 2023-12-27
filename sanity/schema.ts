import { type SchemaTypeDefinition } from 'sanity';

import profile from './schemas/profile';
import social from './schemas/social';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, social],
};
