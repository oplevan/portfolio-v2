'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import './button.scss';
import { Ripple, initTE } from 'tw-elements';

interface CommonProps {
  variation?: 'primary' | 'secondary' | 'neon' | 'back-to-list' | 'icon-button';
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

export default function Button({ size = 'md', variation = 'primary', iconPosition = 'right', ...props }: ButtonProps) {
  const classNames = ['button', variation, size, props.reflect ? 'reflect' : '', props.className].filter((n) => n).join(' ');

  function classes(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  useEffect(() => {
    initTE({ Ripple });
  }, []);

  const buttonInnerMarkup = () => {
    const inner = (
      <div className={classes(iconPosition === 'left' ? 'flex-row-reverse' : '', 'flex gap-1 items-center justify-center')}>
        {props.children && <div>{props.children}</div>}
        {props.icon && <div className='icon-button'>{props.icon}</div>}
      </div>
    );
    if (variation === 'primary') {
      return inner;
    } else if (variation === 'back-to-list') {
      return (
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
      );
    } else if (variation === 'neon') {
      return (
        <>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {inner}
        </>
      );
    }
  };

  if (props.as === 'button') {
    const { clickHandler } = props;
    return (
      <button {...(clickHandler && { onClick: () => clickHandler })} className={classNames} data-te-ripple-init data-te-ripple-color='#64ffda'>
        {variation === 'icon-button' ? <>{props.icon}</> : buttonInnerMarkup()}
      </button>
    );
  }

  if (props.as === 'link') {
    const { href } = props;
    return (
      <Link href={href} className={classNames} {...(props.externalLink && { target: '_blank' })}>
        {variation === 'icon-button' ? <>{props.icon}</> : buttonInnerMarkup()}
      </Link>
    );
  }
}
