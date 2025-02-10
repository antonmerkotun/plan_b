import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

import Button from '@/components/ui/Button/Button';
import { MENU } from '@/data/header.js';
import chevronDown from '@/assets/icons/chevron-down.svg';
import logo from '@/assets/icons/logo.svg';
import burgerIcon from '@/assets/icons/burger.svg';
import closeIcon from '@/assets/icons/burger.svg';
import styles from '@/components/layouts/Header/Header.module.scss';

const Header = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef([]);

  const handleMenuClick = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleOutsideClick = (event) => {
    if (
      dropdownRefs.current.every(
        (dropdown) => dropdown && !dropdown.contains(event.target)
      )
    ) {
      setOpenMenuIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className={`${styles.header} container`}>
      <button
        className={styles.burgerButton}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <ReactSVG src={isMobileMenuOpen ? closeIcon : burgerIcon} />
      </button>

      <nav
        className={`${styles.headerNav} ${isMobileMenuOpen ? styles.open : ''}`}
      >
        <ul className={styles.headerMenu}>
          {MENU.map((item, index) => (
            <li
              key={index}
              className={`${styles.headerMenuItem} ${
                openMenuIndex === index ? styles.headerMenuItemActive : ''
              }`}
              ref={(el) => (dropdownRefs.current[index] = el)}
              onClick={(e) => {
                e.stopPropagation();
                handleMenuClick(index);
              }}
            >
              <div className={styles.itemTitle}>
                <span>{item.name}</span>
                {item.subMenu && (
                  <ReactSVG
                    src={chevronDown}
                    className={styles.headerMenuItemIcon}
                  />
                )}
              </div>
              {item.subMenu && openMenuIndex === index && (
                <ul className={styles.headerSubmenu}>
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className={styles.headerSubmenuItem}>
                      <a
                        href={subItem.link}
                        className={styles.headerSubmenuItemLink}
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {/*<ul className={styles.headerSubmenu}>*/}
              {/*  {item.subMenu.map((subItem, subIndex) => (*/}
              {/*    <li key={subIndex} className={styles.headerSubmenuItem}>*/}
              {/*      <a*/}
              {/*        href={subItem.link}*/}
              {/*        className={styles.headerSubmenuItemLink}*/}
              {/*      >*/}
              {/*        {subItem.name}*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*  ))}*/}
              {/*</ul>*/}
            </li>
          ))}
        </ul>
      </nav>

      <ReactSVG src={logo} className={styles.headerLogo} />

      <div className={styles.headerActions}>
        <Button
          className={styles.headerActionsButton}
          type="primary"
          name="Start Exploring"
        />
      </div>
    </header>
  );
};

export default Header;
