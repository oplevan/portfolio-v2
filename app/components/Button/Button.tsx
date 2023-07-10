import Link from 'next/link';
import './button.scss';

interface CommonProps {
  variation?: 'default' | 'neon' | 'back-to-list' | 'icon';
  className?: string;
  reflect?: Boolean;
  size?: string;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

interface AsButtonProps extends CommonProps {
  as: 'button';
  clickHandler?: Function;
}

interface AsLinkProps extends CommonProps {
  as: 'link';
  href: string;
  externalLink?: boolean;
}

type ButtonProps = AsButtonProps | AsLinkProps;

export default function Button({ size = 'md', variation = 'default', iconPosition = 'right', ...props }: ButtonProps) {
  const classNames = ['button', variation, size, props.reflect ? 'reflect' : '', props.className].filter((n) => n).join(' ');

  function classes(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  const childrenMarkup = (
    <>
      {variation === 'back-to-list' ? (
        <>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <span>Back</span>
        </>
      ) : (
        <>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className={classes(iconPosition === 'left' ? 'flex-row-reverse' : '', 'flex gap-1 items-center justify-center')}>
            {props.children && <div>{props.children}</div>}
            {props.icon && <div className='icon'>{props.icon}</div>}
          </div>
        </>
      )}
    </>
  );

  if (props.as === 'button') {
    const { clickHandler } = props;
    return (
      <button {...(clickHandler && { onClick: () => clickHandler })} className={classNames}>
        {variation === 'icon' ? <>{props.icon}</> : childrenMarkup}
      </button>
    );
  }

  if (props.as === 'link') {
    const { href } = props;
    return (
      <Link href={href} className={classNames} {...(props.externalLink && { target: '_blank' })}>
        {variation === 'icon' ? <>{props.icon}</> : childrenMarkup}
      </Link>
    );
  }
}
