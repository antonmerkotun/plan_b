import { ReactSVG } from 'react-svg';

import arrowDown from '@/assets/icons/arrow-down.svg';
import arrowUp from '@/assets/icons/arrow-up.svg';
import styles from '@/components/ui/Navigation/Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ReactSVG
        className={styles.icon}
        style={{ marginTop: '10px' }}
        src={arrowUp}
      />

      <ReactSVG
        className={styles.icon}
        style={{ marginBottom: '10px' }}
        src={arrowDown}
      />
    </div>
  );
};

export default Navigation;
