import Spline from '@splinetool/react-spline';

import styles from '@/components/blocks/Spline/Cube/Cube.module.scss';

const Cube = () => {
  return (
    <Spline
      className={styles.cube}
      scene="https://prod.spline.design/Oz8n-SjZNJdpPGNu/scene.splinecode"
    />
  );
};

export default Cube;
