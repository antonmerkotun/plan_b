import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';
import styles from '@/components/blocks/Spline/Keyboard/Keyboard.module.scss';

export const Keyboard = () => {
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
          className={styles.keyboard}
          scene="https://prod.spline.design/mUqk5oKMvZTFKyhu/scene.splinecode"
        />
      ) : (
        <Spline
          className={styles.keyboard}
          scene="https://prod.spline.design/HUDVOxwlJcKGGiOG/scene.splinecode"
        />
      )}
    </>
  );
};
