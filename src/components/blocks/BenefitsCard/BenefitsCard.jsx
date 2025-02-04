import { ReactSVG } from 'react-svg';

import shieldActive from '@/assets/icons/shield-active.svg';
import bottomRight from '@/assets/icons/bot-right.svg';
import bottomLeft from '@/assets/icons/bot-left.svg';
import topRight from '@/assets/icons/top-right.svg';
import topLeft from '@/assets/icons/top-left.svg';
import shield from '@/assets/icons/shield.svg';
import styles from '@/components/blocks/BenefitsCard/BenefitsCard.module.scss';

const BenefitsCard = ({ card, isActive, className }) => {
  return (
    <div
      className={`${className} ${styles.card} ${isActive ? styles.cardActive : ''}`}
    >
      <ReactSVG
        className={styles.icon}
        src={isActive ? shieldActive : shield}
      />
      <h3 className={styles.title}>{card.name}</h3>
      <div className={styles.block}>
        <p className={styles.description}>{card.description}</p>
        <ReactSVG className={styles.iconTl} src={topLeft} />
        <ReactSVG className={styles.iconTr} src={topRight} />
        <ReactSVG className={styles.iconBr} src={bottomRight} />
        <ReactSVG className={styles.iconBl} src={bottomLeft} />
      </div>
      <h5 className={styles.type}>Security</h5>
    </div>
  );
};

export default BenefitsCard;
