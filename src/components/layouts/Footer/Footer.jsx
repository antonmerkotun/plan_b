import React from 'react';
import { ReactSVG } from 'react-svg';

import envelope from '@/assets/icons/envelope.svg';
import logo from '@/assets/icons/logo.svg';
import Button from '@/components/ui/Button/Button';
import SocialMedia from '@/components/ui/SocialMedia/SocialMedia';
import { MENU } from '@/data/header.js';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <ReactSVG className="footer__social-logo" src={logo} />
        <SocialMedia styles={{ position: 'relative', flexDirection: 'row' }} />
      </div>

      <div className="footer__navigation">
        {MENU.map((menuItem, index) => (
          <div key={index}>
            <h3 className="footer__navigation-name">{menuItem.name}</h3>
            <ul className="footer__navigation-list">
              {menuItem.subMenu
                ? menuItem.subMenu.map((subItem, subIndex) => (
                    <li className="footer__navigation-item" key={subIndex}>
                      <a
                        className="footer__navigation-link"
                        href={subItem.link}
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__subscribe">
        <div className="footer__subscribe-content">
          <h3 className="footer__subscribe-content-title">
            Subsribe to our newsletters!
          </h3>
          <div className="footer__subscribe-content-field">
            <input
              className="footer__subscribe-content-field-input"
              type="email"
              placeholder="Your email"
            />
            <Button
              width={'56px'}
              height={'44px'}
              title={<ReactSVG src={envelope} />}
              type={'primary'}
              styles={{ borderRadius: '0 16px 4px 0' }}
            />
          </div>
        </div>
        <div className="footer__subscribe-terms">
          <div className="footer__subscribe-terms-links">
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </div>
          <h4 className="footer__subscribe-terms-copyright">©Plan B 2025</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
