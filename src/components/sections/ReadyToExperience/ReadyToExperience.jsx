import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

import { Keyboard } from '@/components/ui/Spline/Keyboard/Keyboard.jsx';
import styles from '@/components/sections/ReadyToExperience/ReadyToExperience.module.scss';
import bitcoin from '@/assets/icons/bitcoin.svg';
import unionLeft from '@/assets/icons/union-left.svg';
import unionRight from '@/assets/icons/union-right.svg';

const ReadyToExperience = () => {
  return (
    <section id="ready-to-experience" className={styles.section}>
      <div className={styles.text}>
        <h1>Ready to Experience the Future of Blockchain?</h1>
        <p>Let’s Start Exploring</p>
      </div>
      <ReactSVG className={styles.bitcoin} src={bitcoin} />
      <ReactSVG className={styles.unionLeft} src={unionLeft} />
      <ReactSVG className={styles.unionRight} src={unionRight} />
      <Keyboard />
    </section>
  );
};

export default ReadyToExperience;
