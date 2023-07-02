import React, { ReactNode } from 'react';
import { FC } from 'react';
import * as styles from './styles';

type Props = {
  dynamicStyles?: string;
  children: ReactNode;
};

const Article: FC<Props> = ({ children, dynamicStyles }) => {
  return (
    <article className={`${styles.Basic} ${dynamicStyles}`}>{children}</article>
  );
};
export default Article;
