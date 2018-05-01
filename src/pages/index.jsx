import React from 'react';
import styles from './index.module.css';
import logo from '../assets/logo.png';
import animatedTeam from '../assets/team.gif';
import NavBar from '../components/NavBar.jsx'

/* eslint-disable react/prop-types, max-len */
const IndexPage = () => (
  <div>
    <header className={styles.hero}>
      <a
        className={styles.logoLink}
        href="/"
      >
        <img
          src={logo}
          alt="SLO Hacks"
        />
      </a>
      <h1 className={styles.h1}>SLO Hacks</h1>
      <div className={styles.heroText}>
        <h2>
          Hello, we&apos;re SLO Hacks!
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
<<<<<<< HEAD
    <div className={styles.window} />
    <div className={styles.gutter}>
      <section className={styles.events}>
        <h2>Our Events</h2>
        <h3>2017 - 2018</h3>
        <div className={styles.event}>
          <div>
            <h4>Local Hack Day</h4>
          </div>
          <div>
            <h4>SLO Hacks</h4>
          </div>
          <div>
            <h4>Firecode</h4>
          </div>
        </div>
        <h3>2018 - 2019</h3>
        <p>Stay tuned!</p>
      </section>
      <section className={styles.partners}>
        <h2 className={styles.h2}>
          Our Partners
        </h2>
        <p className={styles.p}>
          We&apos;re honored to be partnered with some awesome organizations and companies.
        </p>
      </section>
      <section className={styles.contact}>
        <h2>Contact Us</h2>
        <p>Have questions, feedback, or concerns? Shoot us an email at <a href="mailto:team@slohacks.com">team@slohacks.com!</a></p>
      </section>
    </div>
=======
    <NavBar></NavBar>
>>>>>>> feat(NavBar.jsx NavItem.jsx): add NavBar component
  </div>
);

export default IndexPage;
