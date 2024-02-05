import './AnimatedScrollDownArrow.scss';
import { HiArrowNarrowDown } from 'react-icons/hi';

type Props = {};

export default function AnimatedScrollDownArrow({}: Props) {
  return (
    <div className='ico animated'>
      <HiArrowNarrowDown />
    </div>
  );
}
