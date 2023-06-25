import { FC } from 'react';
import { maxWidthContainerStyles } from './styled';
import { ContainerProps } from './containerTypes';

const Container: FC<ContainerProps> = ({ children, bgColor, className }) => {
  return (
    <div className={`bg-${bgColor}` || 'bg-white'}>
      <div className={`${maxWidthContainerStyles} ${className}`}>
        {children}
      </div>
    </div>
  );
};
export default Container;
