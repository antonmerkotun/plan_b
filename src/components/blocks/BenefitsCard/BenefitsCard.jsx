import { ReactSVG } from 'react-svg';

import bottomLeft from '@/assets/icons/bot-left.svg';
import bottomRight from '@/assets/icons/bot-right.svg';
import shield from '@/assets/icons/shield.svg';
import shieldActive from '@/assets/icons/shield-active.svg';
import topLeft from '@/assets/icons/top-left.svg';
import topRight from '@/assets/icons/top-right.svg';
import styles from '@/components/blocks/BenefitsCard/BenefitsCard.module.scss';

const BenefitsCard = ({ card, isActive }) => {
  return (
    <div
      className={`${styles.benefitsCard} ${isActive ? styles.benefitsCardActive : ''}`}
    >
      <ReactSVG
        className={styles.benefitsCardIcon}
        src={isActive ? shieldActive : shield}
      />
      <h3 className={styles.benefitsCardTitle}>{card.name}</h3>
      <div className={styles.benefitsCardBlock}>
        <ReactSVG className={styles.benefitsCardBlockIconTl} src={topLeft} />
        <ReactSVG className={styles.benefitsCardBlockIconTr} src={topRight} />
        <p className={styles.benefitsCardText}>{card.description}</p>
        <ReactSVG
          className={styles.benefitsCardBlockIconBr}
          src={bottomRight}
        />
        <ReactSVG className={styles.benefitsCardBlockIconBl} src={bottomLeft} />
      </div>
      <h5 className={styles.benefitsCardType}>Security</h5>
    </div>
  );
};

export default BenefitsCard;
