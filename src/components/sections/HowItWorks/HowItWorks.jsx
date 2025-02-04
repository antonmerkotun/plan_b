import styles from '@/components/sections/HowItWorks/HowItWorks.module.scss';
import { Slider } from '@/components/blocks/Spline/Slider/Slider.jsx';

const HowItWorks = () => {
  return (
    <section id="how-it-works-section" className={styles.section}>
      <div className={styles.left}></div>
      <div className={styles.center}>
        <div className={styles.slider}>{/*<Slider />*/}</div>
      </div>
      <div className={styles.right}></div>
    </section>
  );
};

export default HowItWorks;
