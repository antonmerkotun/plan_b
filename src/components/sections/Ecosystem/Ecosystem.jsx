import { ReactSVG } from 'react-svg';
import circle from '@/assets/icons/ecosystem-circle.svg';
import styles from '@/components/sections/Ecosystem/Ecosystem.module.scss';
import Button from '@/components/ui/Button/Button.jsx';

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
        <img src="src/assets/images/ecosystem.png" alt="imege" width="979" />
      </div>
      <div className={styles.imageMobile}>
        <img
          src="src/assets/images/ecosystem-mobile.png"
          alt="imege"
          width="358"
        />
      </div>
      <div className={styles.circle}>
        <ReactSVG src={circle} />
      </div>
    </section>
  );
};

export default Ecosystem;
