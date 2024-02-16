import Button from './Button/Button';
import { BiLinkExternal } from 'react-icons/bi';

import { getProfileInfo } from '@/sanity/queries/getProfile';

export default async function ResumeButton() {
  const { resume } = await getProfileInfo(['resume']);
  return (
    <Button as='link' variant='primary' href={resume} icon={<BiLinkExternal />} externalLink className='mt-14 lg:mt-0'>
      Resume
    </Button>
  );
}
