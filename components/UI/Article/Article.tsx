import React, { ReactNode } from "react";
import { FC } from "react";
import * as styles from "./styles";

type Props = {
  dynamicStyles?: string;
  children: ReactNode;
  id?: string;
};

const Article: FC<Props> = ({ children, dynamicStyles, id }) => {
  return (
    <article id={id} className={`${styles.Basic} ${dynamicStyles}`}>
      {children}
    </article>
  );
};
export default Article;
