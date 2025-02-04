import { useRef, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

import CubeSpline from '@/components/blocks/Spline/Cube/Cube.jsx';
import bitcoin from '@/assets/icons/bitcoin.svg';
import buttonScroll from '@/assets/icons/button-scroll.svg';
import styles from '@/components/sections/Cube/Cube.module.scss';

const items = [
  { title: 'Potential TVL', description: '10K BTC' },
  { title: 'Average transaction cost', description: '$ 0.10' },
  { title: 'Transactions Per Second', description: '7 TPS' },
  { title: 'Total Value Locked', description: 'Soon TVL' },
];

const Cube = () => {
  const sectionRef = useRef(null);

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits-section');
    if (!benefitsSection) return;
    benefitsSection.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        // scrollToBenefits();
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (section) {
        section.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
    <section id="cube-section" ref={sectionRef} className={styles.section}>
      <div className={styles.info}>
        <p className={styles.description}>
          Fastest, most secure Layer 1 blockchain for real-world use
        </p>
      </div>
      <div className={styles.center}>
        <h3 className={styles.title}>Build. Transact. Scale.</h3>
        <div className={styles.cube}>
          <CubeSpline />
        </div>
        <ReactSVG className={styles.bitcoin} src={bitcoin} />
        <ReactSVG
          className={styles.button}
          src={buttonScroll}
          onClick={scrollToBenefits}
        />
      </div>
      <div className={styles.list}>
        {items.map((item) => (
          <div key={item.title} className={styles.item}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
      <ReactSVG
        className={styles.buttonMobile}
        src={buttonScroll}
        onClick={scrollToBenefits}
      />
    </section>
  );
};

export default Cube;
