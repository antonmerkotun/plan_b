import { ReactSVG } from 'react-svg';

import bottomLeft from '@/assets/icons/bot-left.svg';
import bottomRight from '@/assets/icons/bot-right.svg';
import shield from '@/assets/icons/shield.svg';
import topLeft from '@/assets/icons/top-left.svg';
import topRight from '@/assets/icons/top-right.svg';
import './BenefitsCard.scss';

const BenefitsCard = ({ slide }) => {
  return (
    <div className="benefits-card">
      <ReactSVG className="benefits-card-icon" src={shield} />
      <h3 className="benefits-card-title">{slide.name}</h3>
      <div className="benefits-card-block">
        <ReactSVG className="benefits-card-block-icon-tl" src={topLeft} />
        <ReactSVG className="benefits-card-block-icon-tr" src={topRight} />
        <p className="benefits-card-text">{slide.description}</p>
        <ReactSVG className="benefits-card-block-icon-br" src={bottomRight} />
        <ReactSVG className="benefits-card-block-icon-bl" src={bottomLeft} />
      </div>
      <h5 className="benefits-card-type">Security</h5>
    </div>
  );
};

export default BenefitsCard;
