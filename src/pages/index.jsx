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
      <div>
        <h2>Our Events</h2>
        <h3>2017 - 2018</h3>
        <div className={styles.event}>
          <div>
            <h2>Local Hack Day</h2>
          </div>
          <div>
            <h2>SLO Hacks</h2>
          </div>
          <div>
            <h2>Firecode</h2>
          </div>
        </div>
        <h3>2018 - 2019</h3>
        <h3>Stay tuned!</h3>
      </div>
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
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <p>Have questions, feedback, or concerns? Shoot us an email at <a href="mailto:team@slohacks.com">team@slohacks.com!</a></p>
    </div>
  </div>
);

export default IndexPage;
