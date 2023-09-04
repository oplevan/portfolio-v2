import './ProjectCard.scss';
import { LiaProjectDiagramSolid } from 'react-icons/lia';
import { TbExternalLink } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';

type Props = {
  title: string | React.ReactNode;
  links?: { web?: string; gitHub?: string };
  thumbnail: string;
  shortDescription?: string | React.ReactNode;
  techList: string[];
};

export default function ProjectCard({ title, links, thumbnail, shortDescription, techList }: Props) {
  return (
    <a href={links?.web} className='project-card' target='_blank' rel='noopener noreferrer'>
      <div>
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
    </a>
  );
}
