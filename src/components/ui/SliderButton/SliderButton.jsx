import { ReactSVG } from 'react-svg';

import arrow from '@/assets/icons/arrow-white.svg';
import styles from '@/components/ui/SliderButton/SliderButton.module.scss';

const SliderButton = ({ onClick, isReverse, isDisabled }) => {
  return (
    <button
      className={`${styles.button} ${isDisabled ? styles.buttonDisabled : ''}`}
      onClick={onClick}
      style={{ transform: isReverse ? 'rotate(180deg)' : 'none' }}
    >
      <ReactSVG className={styles.icon} src={arrow} />
    </button>
  );
};

export default SliderButton;
