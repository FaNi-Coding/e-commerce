import React, { ReactNode } from 'react';
import { FC } from 'react';
import { ArticleStyles } from './styled';

type Props = {
  children: ReactNode;
};

const Article: FC<Props> = ({ children }) => {
  return <article className={ArticleStyles}>{children}</article>;
};
export default Article;
