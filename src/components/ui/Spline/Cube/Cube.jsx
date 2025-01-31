import Spline from '@splinetool/react-spline';

import styles from '@/components/ui/Spline/Cube/Cube.module.scss';

const Cube = () => {
  return (
    <div className={styles.wrapper}>
      <Spline
        className={styles.cube}
        scene="https://prod.spline.design/Oz8n-SjZNJdpPGNu/scene.splinecode"
      />
    </div>
  );
};

export default Cube;
