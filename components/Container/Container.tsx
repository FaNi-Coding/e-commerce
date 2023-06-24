import { FC } from 'react';
import { maxWidthContainerStyles } from './styled';
import { ContainerProps } from './containerTypes';

const Container: FC<ContainerProps> = ({ rowReverse, children }) => {
  return (
    <div>
      <div className={maxWidthContainerStyles(rowReverse)}>{children}</div>
    </div>
  );
};
export default Container;
