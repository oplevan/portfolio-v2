import { type SchemaTypeDefinition } from 'sanity';

import profile from './schemas/profile';
import social from './schemas/social';
import siteLogo from './schemas/site-logo';
import skills from './schemas/skill';
import project from './schemas/project';
import experience from './schemas/experience';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteLogo, profile, skills, social, project, experience],
};
