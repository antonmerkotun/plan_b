import { ReactSVG } from 'react-svg';

import CubeSpline from '@/components/ui/Spline/Cube/Cube.jsx';
import bitcoin from '@/assets/icons/bitcoin.svg';
import tabBg from '@/assets/icons/tab-bg.svg';
import styles from '@/components/sections/CubeSection/CubeSection.module.scss';

const CubeSection = () => {
  return (
    <section className={`${styles.section} container`}>
      <div className={styles.content}>
        <div className={styles.contentBlock}>
          <h3 className={styles.title}>Build. Transact. Scale.</h3>
          <div className={styles.splineBlock}>
            {/*<CubeSpline className={styles.cube} />*/}
            <ReactSVG className={styles.bitcoin} src={bitcoin} />
          </div>
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <p className={styles.description}>
                Fastest, most secure Layer 1 blockchain for real-world use
              </p>
            </div>
            <div>
              <div className={styles.list}>
                <div className={styles.item}>
                  <p className="titleS">Potential TVL</p>
                  <p className={styles.description}>10K BTC</p>
                </div>
                <div className={styles.item}>
                  <p className="titleS">Average transaction cost</p>
                  <p className={styles.description}>$ 0.10</p>
                </div>
                <div className={styles.item}>
                  <p className="titleS">Transactions Per Second</p>
                  <p className={styles.description}>7 TPS</p>
                </div>
                <div className={styles.item}>
                  <p className="titleS">Total Value Locked</p>
                  <p className={styles.description}>Soon TVL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tab}>
          <span className={styles.tabText}>Discover more</span>
          <ReactSVG className={styles.tabBackground} src={tabBg} />
        </div>
      </div>
    </section>
  );
};

export default CubeSection;
