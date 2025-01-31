import Spline from '@splinetool/react-spline';

import styles from '@/components/ui/Spline/Keyboard/Keyboard.module.scss';

export const Keyboard = () => {
  return (
    <Spline
      className={styles.keyboard}
      scene="https://prod.spline.design/HUDVOxwlJcKGGiOG/scene.splinecode"
    />
  );
};
