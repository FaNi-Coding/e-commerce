import Link from 'next/link';
import { FC } from 'react';

import { ButtonProps } from './buttonTypes';

const Button: FC<ButtonProps> = ({
  primary,
  secondary,
  tertiary,
  isMargin,
  children,
}) => {
  const buttonGlobals = primary
    ? 'btn-primary'
    : secondary
    ? 'btn-secondary'
    : tertiary
    ? 'btn-tertiary'
    : '';

  const buttonStyles = isMargin && 'mt-8';
  return (
    <Link href='#' className={`${buttonGlobals} + ${buttonStyles}`}>
      {children}
    </Link>
  );
};
export default Button;
