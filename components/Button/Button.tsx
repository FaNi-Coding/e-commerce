import { FC } from 'react';
import Link from 'next/link';
import { ButtonProps } from './buttonTypes';

const Button: FC<ButtonProps> = ({
  primary,
  secondary,
  tertiary,
  children,
}) => {
  return (
    <Link
      href='#'
      className={
        primary
          ? 'btn-primary'
          : secondary
          ? 'btn-secondary'
          : tertiary
          ? 'btn-tertiary'
          : ''
      }
    >
      {children}
    </Link>
  );
};
export default Button;
