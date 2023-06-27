import React, { ReactNode } from 'react';
import { FC } from 'react';
import { ArticleBasicStyles } from './styled';

type Props = {
  dynamicStyles?: string;
  children: ReactNode;
};

const Article: FC<Props> = ({ children, dynamicStyles }) => {
  return (
    <article className={`${ArticleBasicStyles} ${dynamicStyles}`}>
      {children}
    </article>
  );
};
export default Article;
