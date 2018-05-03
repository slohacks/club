import React from 'react';
import styles from './index.module.css';
import logo from '../assets/logo.png';
import animatedTeam from '../assets/team.gif'

/* eslint-disable react/prop-types, max-len */
const IndexPage = () => (
  <div>
    <header className={styles.hero}>
      <a className={styles.logoLink}
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
      <div className={styles.heroText}>
        <h2>
          Hello, we're SLO Hacks!
        </h2>
        <p>
          SLO Hacks is a club at Cal Poly SLO that hosts quarterly hackathons.
          Hackathons are coding events that range anywhere from 12-36 hours,
          and give students time to build anything they can think of.
          Our evenets have reached 300 students in its first year, and we aim
          to reach much, much more.
        </p>
      </div>
      <img
         src={animatedTeam}
         alt="SLO Hacks Team"
         className={styles.animatedTeam}
     />
    </header>
  </div>
);

export default IndexPage;
