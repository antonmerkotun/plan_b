import Spline from '@splinetool/react-spline';

import styles from '@/components/blocks/Spline/Cube/Cube.module.scss';
import { useEffect, useState } from 'react';

const Cube = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <Spline
          className={styles.cube}
          scene="https://prod.spline.design/Aq1i7EbpAcUKnSBX/scene.splinecode"
        />
      ) : (
        <Spline
          className={styles.cube}
          scene="https://prod.spline.design/Oz8n-SjZNJdpPGNu/scene.splinecode"
        />
      )}
    </>
  );
};

export default Cube;
