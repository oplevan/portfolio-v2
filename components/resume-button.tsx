import { Button } from '@/components/ui/button';
import { BiLinkExternal } from 'react-icons/bi';

import { getProfileInfo } from '@/sanity/queries/getProfile';
import Link from 'next/link';

export default async function ResumeButton() {
  const { resume } = await getProfileInfo(['resume']);
  return (
    <Button asChild className='mt-14 lg:mt-0 space-x-2'>
      <Link href={resume}>
        <BiLinkExternal />
        <span>Resume</span>
      </Link>
    </Button>
  );
}
