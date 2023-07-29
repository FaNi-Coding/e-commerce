import Link from 'next/link';
import { FC } from 'react';

import { ButtonProps } from './buttonTypes';

const Button: FC<ButtonProps> = ({
  primary,
  secondary,
  tertiary,
  fourthly,
  isMargin,
  href,
  children,
  dynamicStyles,
  type = 'link',
  value,
  onClick,
}) => {
  const buttonGlobals = primary
    ? 'btn-primary'
    : secondary
    ? 'btn-secondary'
    : tertiary
    ? 'btn-tertiary'
    : fourthly
    ? 'btn-fourthly'
    : '';

  const buttonTopMargin = isMargin ? 'mt-8' : '';
  return (
    <>
      {type === 'link' && (
        <Link
          href={href || ''}
          className={`${buttonGlobals} ${buttonTopMargin} ${dynamicStyles}`}
        >
          {children}
        </Link>
      )}
      {type === 'button' && (
        <button
          onClick={onClick}
          className={`${buttonGlobals} ${buttonTopMargin} ${dynamicStyles}`}
        >
          {children}
        </button>
      )}
      {type === 'submit' && (
        <input
          type='submit'
          value={value}
          className={`${buttonGlobals} ${buttonTopMargin} ${dynamicStyles}`}
        />
      )}
    </>
  );
};
export default Button;
