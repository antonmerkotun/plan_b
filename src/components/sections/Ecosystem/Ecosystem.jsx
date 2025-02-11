import { ReactSVG } from 'react-svg';
import Button from '@/components/ui/Button/Button.jsx';
import circle from '@/assets/icons/ecosystem-circle.svg';
import ecosystem from '@/assets/images/ecosystem.png';
import ecosystemMobile from '@/assets/images/ecosystem-mobile.png';
import styles from '@/components/sections/Ecosystem/Ecosystem.module.scss';

const Ecosystem = () => {
  return (
    <section id="ecosystem-section" className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ecosystem</h1>
        <p className={styles.description}>
          Explore the full ecosystem with integrated solutions and a thriving
          network of services
        </p>
        <Button name="See all" className={styles.button} />
      </div>

      <div className={styles.image}>
        <img src={ecosystem} alt="image" width="979" />
      </div>
      <div className={styles.imageMobile}>
        <img src={ecosystemMobile} alt="image" width="358" />
      </div>
      <div className={styles.circle}>
        <ReactSVG src={circle} />
      </div>
    </section>
  );
};

export default Ecosystem;
