import './SideElement.scss';

type Props = {
  side: string | 'left' | 'right';
  children: string | JSX.Element | JSX.Element[];
};

export default function SideElement({ side, children }: Props) {
  return (
    <div className={`side-element ${side}-5`}>
      <div className='flex flex-col gap-5'>{children}</div>
    </div>
  );
}
