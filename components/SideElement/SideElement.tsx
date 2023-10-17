import './SideElement.scss';

type Props = {
  side: string | 'left' | 'right';
  children: string | JSX.Element | JSX.Element[];
};

export default function SideElement({ side, children }: Props) {
  return (
    <div
      className={`side-element ${side === 'left' ? 'left-10' : 'right-10'}`}
      data-aos={`fade-${side === 'left' ? 'right' : 'left'}`}
      data-aos-delay='1600'
      data-aos-duration='1200'
    >
      <div className='flex flex-col gap-5'>{children}</div>
    </div>
  );
}
