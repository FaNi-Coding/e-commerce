import { FC } from 'react';

type Props = {};
const Circles: FC<Props> = () => {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g stroke='#FFF' fill='none' fillRule='evenodd' opacity='.202'>
        <circle cx='472' cy='472' r='235.5' />
        <circle cx='472' cy='472' r='270.5' />
        <circle cx='472' cy='472' r='471.5' />
      </g>
    </svg>
  );
};
export default Circles;
