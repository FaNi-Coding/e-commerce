import { ReactNode } from 'react';

export type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  isMargin?: boolean;
  children?: ReactNode;
};
