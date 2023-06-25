import { FC } from 'react';
import { maxWidthContainerStyles } from './styled';
import { ContainerProps } from './containerTypes';

const Container: FC<ContainerProps> = ({
  rowReverse,
  colReverse,
  children,
}) => {
  return (
    <div>
      <div className={maxWidthContainerStyles(rowReverse, colReverse)}>
        {children}
      </div>
    </div>
  );
};
export default Container;
