'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import './button.scss';

interface CommonProps {
  variant?: 'primary' | 'secondary' | 'neon' | 'back-to-list' | 'icon' | 'icon-round';
  className?: string;
  reflect?: Boolean;
  size?: string;
  icon?: JSX.Element | React.ReactElement;
  iconPosition?: 'left' | 'right';
  aosAnimation?: string;
  AosAnimationDelay?: number | string;
  children?: React.ReactNode;
}

interface AsButtonProps extends CommonProps {
  as: 'button';
  clickHandler: any;
}

interface AsLinkProps extends CommonProps {
  as: 'link';
  href: string;
  externalLink?: boolean;
}

type ButtonProps = AsButtonProps | AsLinkProps;

export default function Button({ size = 'md', variant = 'primary', iconPosition = 'right', aosAnimation, AosAnimationDelay, ...props }: ButtonProps) {
  const classNames = ['button', variant, size, props.reflect ? 'reflect' : '', props.className].filter((n) => n).join(' ');

  function classes(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  const buttonInnerMarkup = () => {
    const inner = (
      <div className={classes(iconPosition === 'left' ? 'flex-row-reverse' : '', 'flex gap-1 items-center justify-center')}>
        {props.children && props.children}
        {props.icon && props.icon}
      </div>
    );
    if (variant === 'primary') {
      return inner;
    } else if (variant === 'back-to-list') {
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
          <span>Back to projects</span>
        </>
      );
    } else if (variant === 'neon') {
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
      <button onClick={clickHandler} className={classNames}>
        {variant === 'icon' || variant === 'icon-round' ? props.icon : buttonInnerMarkup()}
      </button>
    );
  }

  if (props.as === 'link') {
    const { href } = props;
    return (
      <Link
        href={href}
        className={classNames}
        {...(props.externalLink && { target: '_blank' })}
        {...(aosAnimation && { 'data-aos': aosAnimation })}
        {...(AosAnimationDelay && { 'data-aos': AosAnimationDelay })}
      >
        {variant === 'icon' || variant === 'icon-round' ? props.icon : buttonInnerMarkup()}
      </Link>
    );
  }
}
