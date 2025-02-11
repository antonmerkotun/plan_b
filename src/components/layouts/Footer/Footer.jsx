import { ReactSVG } from 'react-svg';

import Button from '@/components/ui/Button/Button';
import SocialMedia from '@/components/ui/SocialMedia/SocialMedia';
import { MENU } from '@/data/header.js';
import envelope from '@/assets/icons/envelope.svg';
import logo from '@/assets/icons/logo.svg';
import styles from '@/components/layouts/Footer/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <ReactSVG className={styles.logo} src={logo} />
        <SocialMedia
          styles={{
            position: 'relative',
            flexDirection: 'row',
            right: 0,
            top: 0,
            justifyContent: 'start',
          }}
        />
      </div>
      <div className={styles.navigation}>
        {MENU.map((menuItem, index) => (
          <div key={index}>
            <h3 className={styles.name}>{menuItem.name}</h3>
            <ul className={styles.list}>
              {menuItem.subMenu
                ? menuItem.subMenu.map((subItem, subIndex) => (
                    <li className={styles.item} key={subIndex}>
                      <a className={styles.link} href={subItem.link}>
                        {subItem.name}
                      </a>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.info}>
        <div className={styles.content}>
          <h3 className={styles.title}>Subscribe to our newsletters!</h3>
          <div className={styles.field}>
            <input
              className={styles.input}
              type="email"
              placeholder="Your email"
            />
            <Button
              icon={envelope}
              type={'primary'}
              className={styles.button}
            />
          </div>
        </div>
        <div className={styles.terms}>
          <div className={styles.links}>
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </div>
          <h4 className={styles.copyright}>©Plan B 2025</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
