import Spline from '@splinetool/react-spline';

import styles from '@/components/ui/Spline/EnergyLiquid/EnergyLiquid.module.scss';

const EnergyLiquid = () => {
  return (
    <div className={styles.wrapper}>
      <Spline
        className={styles.energyLiquid}
        scene="https://prod.spline.design/Oz8n-SjZNJdpPGNu/scene.splinecode"
      />
    </div>
  );
};

export default EnergyLiquid;
