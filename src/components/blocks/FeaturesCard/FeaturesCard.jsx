import { ReactSVG } from 'react-svg';

import bottomLeft from '@/assets/icons/bot-left.svg';
import bottomRight from '@/assets/icons/bot-right.svg';
import topLeft from '@/assets/icons/top-left.svg';
import topRight from '@/assets/icons/top-right.svg';
import styles from '@/components/blocks/FeaturesCard/FeaturesCard.module.scss';
import Button from '@/components/ui/Button/Button.jsx';

const FeaturesCard = ({ card, isActive, isButton, buttonText }) => {
  return (
    <div className={`${styles.card} ${isActive ? styles.cardActive : ''}`}>
      <ReactSVG className={styles.icon} src={card.icon} />
      <div className={styles.text}>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.description}>{card.description}</p>
      </div>
      {isActive && (
        <>
          <ReactSVG
            className={`${styles.iconBorder} ${styles.iconBorderTl}`}
            src={topLeft}
          />
          <ReactSVG
            className={`${styles.iconBorder} ${styles.iconBorderTr}`}
            src={topRight}
          />
          <ReactSVG
            className={`${styles.iconBorder} ${styles.iconBorderBr}`}
            src={bottomRight}
          />
          <ReactSVG
            className={`${styles.iconBorder} ${styles.iconBorderBl}`}
            src={bottomLeft}
          />
        </>
      )}
      {isButton && (
        <Button type="secondary" className={styles.button} name={buttonText} />
      )}
    </div>
  );
};

export default FeaturesCard;
