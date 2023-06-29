import { FC } from 'react';
import ImageComp from '../Image/BasicImageComp';
import Button from '../Button/Button';
import Chevron from '../Icons/Chevron';
/* import * as styles from './styles.ts';
 */

type Props = {};
const HamburgerNav: FC<Props> = ({}) => {
  return (
    <div className='bg-tertiary'>
      <article className='flex flex-col'>
        <ImageComp src={} alt={''} />
        <p className='body'>{}</p>
        <Button tertiary>
          Shop
          <Chevron />
        </Button>
      </article>
    </div>
  );
};
export default HamburgerNav;
