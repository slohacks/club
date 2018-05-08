import React from 'react';
import NavItem from './NavItem';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav className={styles.navbar}>
    <NavItem text="Events" url="#events" />
    <NavItem text="Partners" url="#partners" />
    <NavItem text="Subscribe" url="#subscribe" />
    <NavItem text="Contact Us" url="#contact-us" />
  </nav>
);

export default NavBar;
