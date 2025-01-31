import { ReactSVG } from 'react-svg';

import topLeft from '@/assets/icons/top-left.svg';
import topRight from '@/assets/icons/top-right.svg';
import bottomRight from '@/assets/icons/bot-right.svg';
import bottomLeft from '@/assets/icons/bot-left.svg';
import styles from '@/components/blocks/InsightsUpdatesCard/InsightsUpdatesCard.module.scss';

const InsightsUpdatesCard = ({ card }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={card.image} alt="image" />
      <div>
        <p className={styles.title}>{card.title}</p>
        <p className={styles.description}>{card.description}</p>
      </div>
      <ReactSVG
        className={`${styles.iconBorder} ${styles.iconTl}`}
        src={topLeft}
      />
      <ReactSVG
        className={`${styles.iconBorder} ${styles.iconTr}`}
        src={topRight}
      />
      <ReactSVG
        className={`${styles.iconBorder} ${styles.iconBr}`}
        src={bottomRight}
      />
      <ReactSVG
        className={`${styles.iconBorder} ${styles.iconBl}`}
        src={bottomLeft}
      />
    </div>
  );
};

export default InsightsUpdatesCard;
