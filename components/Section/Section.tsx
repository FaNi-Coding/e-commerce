import { FC } from 'react';
import { maxWidthContainerStyles } from './styled';
import { SectionProps } from './sectionTypes';

const Section: FC<SectionProps> = ({ children, bgColor, className }) => {
  return (
    <div className={`bg-${bgColor}` || 'bg-white'}>
      <section className={className}>{children}</section>
    </div>
  );
};
export default Section;
