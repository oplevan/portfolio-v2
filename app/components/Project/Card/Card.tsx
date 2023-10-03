import './Card.scss';
import { AiOutlineFolder } from 'react-icons/ai';
import { TbExternalLink } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/Button/Button';

type Props = {
  slug: string;
  title: string | React.ReactNode;
  links?: { web?: string; gitHub?: string };
  previewImage: string;
  shortDescription?: string | React.ReactNode;
  techList: string[];
  animationDelay?: number;
};

export default function Card({ title, slug, links, previewImage, shortDescription, techList, animationDelay = 0 }: Props) {
  return (
    <div className='project-card' data-aos='fade-up' data-aos-delay={animationDelay}>
      <div className='z-10'>
        <div className='card-top'>
          <div className='project-icon'>
            <AiOutlineFolder />
          </div>
          <div className='project-links'>
            {links?.web && <Button as='link' size='lg' variant='icon' icon={<TbExternalLink />} href={links.web} className='!p-2 !-m-2' externalLink />}
            {links?.gitHub && <Button as='link' size='lg' variant='icon' icon={<FiGithub />} href={links.gitHub} className='!p-2 !-m-2' externalLink />}
          </div>
        </div>
        <Link href={`/projects/${slug}`}>
          <div className='preview-image'>
            <Image src={previewImage} width={360} height={180} alt='Project preview image' />
          </div>
          <div className='title'>{title}</div>
          <div className='short-description'>{shortDescription}</div>
        </Link>
      </div>
      <div className='tech-list'>
        {techList.map((item, i) => (
          <div key={i}>
            <span>▹</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}
