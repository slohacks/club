import React from 'react';
import styles from './index.module.css';
import logo from '../assets/logo.png';

/* eslint-disable react/prop-types, max-len */
const IndexPage = () => (
  <div>
    <header className={styles.hero}>
      <a
        href="https://slohacks.com/"
      >
        <img
          src={logo}
          alt="Logo"
          className={styles.logo}
        />
      </a>
      <h1 className={styles.h1}>
        SLO Hacks
      </h1>
    </header>
    <div className={styles.partners}>
      <h2 className={styles.h2}>
        Our Partners
      </h2>
      <p className={styles.p}>
        We're honored to be partnered with some awesome organizations and 
        companies.
      </p>
    </div>
  </div>
);

export default IndexPage;
