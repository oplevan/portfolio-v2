import './Card.scss';
import { AiOutlineFolder } from 'react-icons/ai';
import { TbExternalLink } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';

type Props = {
  name: string;
  slug: string;
  techStack: [...any, { name: string }];
  links?: { web?: string; gitHub?: string; appStore?: string; googlePlay?: string };
  previewImage?: string;
  introDescription?: string | React.ReactNode;
  animationDelay?: number;
};

export default function Card({ name, slug, links, previewImage, introDescription, techStack, animationDelay = 0 }: Props) {
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
            <Image src={previewImage ? previewImage : '/assets/images/placeholder.svg'} width={360} height={180} alt='Project preview image' />
          </div>
          <div className='name'>{name}</div>
          <div className='intro-description'>{introDescription}</div>
        </Link>
      </div>
      <div className='tech-stack'>
        {techStack.map((item, i) => (
          <div key={i}>
            <span>▹</span> {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
