// src/components/Navbar.js
import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import styles from "../Navbar/Navbar.module.css"; // Import CSS Modules

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.hamburgerMenu}>
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={toggleMenu}
            width={30}
            height={20}
            strokeWidth={3}
            rotate={0}
            color="gray"
          />
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <li>Skin Care</li>
          <li>Body & Hand</li>
          <li>Hair</li>
          <li>Fragrance</li>
          <li>Home</li>
          <li>Kits & Travel</li>
          <li>Gifts</li>
          <li>Read</li>
          <li>Stores</li>
          <li>Facial Appointments</li>
        </ul>
        <div className={styles.searchIcon}>
          <FaSearch />
        </div>
      </div>
      <div className={styles.rightSection}>
        <ul className={styles.rightLinks}>
          <li>Log in</li>
          <li>Cabinet</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
