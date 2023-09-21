import './Card.scss';
import { LiaProjectDiagramSolid } from 'react-icons/lia';
import { TbExternalLink } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  slug: string;
  title: string | React.ReactNode;
  links?: { web?: string; gitHub?: string };
  thumbnail: string;
  shortDescription?: string | React.ReactNode;
  techList: string[];
  animationDelay?: number;
};

export default function Card({ title, slug, links, thumbnail, shortDescription, techList, animationDelay = 0 }: Props) {
  return (
    <Link href={`/projects/${slug}`} className='project-card' data-aos='fade-up' data-aos-delay={animationDelay}>
      <div className='z-10'>
        <div className='card-top'>
          <div className='project-icon'>
            <LiaProjectDiagramSolid />
          </div>
          <div className='project-links'>
            {links?.web && (
              <a href={links.web} target='_blank' rel='noopener noreferrer'>
                <TbExternalLink />
              </a>
            )}
            {links?.gitHub && (
              <a href={links.web} target='_blank' rel='noopener noreferrer'>
                <FiGithub />
              </a>
            )}
          </div>
        </div>
        <div className='thumbnail'>
          <Image src={thumbnail} width={360} height={180} alt='Project preview image' />
        </div>
        <div className='title'>{title}</div>
        <div className='short-description'>{shortDescription}</div>
      </div>
      <div className='tech-list'>
        {techList.map((item, i) => (
          <div key={i}>
            <span>▹</span> {item}
          </div>
        ))}
      </div>
    </Link>
  );
}
