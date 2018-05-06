import React from 'react';
import NavBar from '../components/NavBar';
import styles from './index.module.css';
import logo from '../assets/logo.png';
import firecode from '../assets/firecode.jpg';
import lhd from '../assets/lhd.jpg';
import sloHacks from '../assets/slo_hacks.jpg';
import animatedTeam from '../assets/team.gif';
import oldSlo from '../assets/partners__oldslo.png';
import brandmakers from '../assets/partners__brandmakers.png';
import ContactForm from '../components/ContactForm';

/* eslint-disable react/prop-types, max-len */
const IndexPage = () => (
  <div>
    <header className={styles.hero}>
      <NavBar />
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
    <div className={styles.window} />
    <div className={styles.gutter}>
      <section className={styles.events}>
        <h2 id="events">Our Events</h2>
        <h3>2017 - 2018</h3>
        <div className={styles.event}>
          <a href="https://www.slohacks.com/localhackday/">
            <div className={styles.image_container}>
              <img className={styles.images} src={lhd} alt="lhd" />
              <h4 className={styles.event_name}>Local Hack Day</h4>
            </div>
          </a>
          <a href="https://www.slohacks.com/">
            <div className={styles.image_container}>
              <img className={styles.images} src={sloHacks} alt="slo_hacks" />
              <h4 className={styles.event_name}>SLO Hacks</h4>
            </div>
          </a>
          <a href="https://firecode.slohacks.com">
            <div className={styles.image_container}>
              <img className={styles.images} src={firecode} alt="firecode" />
              <h4 className={styles.event_name}>Firecode</h4>
            </div>
          </a>
        </div>
        <h3>2018 - 2019</h3>
        <p>Stay tuned!</p>
      </section>
      <section className={styles.partners}>
        <h2 id="partners" className={styles.h2}>
          Our Partners
        </h2>
        <p className={styles.p}>
          We&apos;re honored to be partnered with some awesome organizations and companies.
        </p>
        <div className={styles.partnerImages}>
          <a
            className={styles.oldLink}
            href="http://oldsanluisbbq.com/"
          >
            <img
              src={oldSlo}
              alt="Old Slo Barbeque"
              className={styles.oldSlo}
            />
          </a>
          <a
            className={styles.brandLink}
            href="http://www.brandmakers.com/"
          >
            <img
              src={brandmakers}
              alt="Brandmakers"
              className={styles.brandmakers}
            />
          </a>
        </div>
      </section>
      <section className={styles.contact}>
        <h2 id="contact-us">Contact Us</h2>
        <p>Have questions, feedback, or concerns? Shoot us an email at <a href="mailto:team@slohacks.com">team@slohacks.com!</a></p>
      </section>
      <section className={styles.subscribe}>
        <h2>Subscribe</h2>
        <p>Interested in attending a future SLO Hacks event? Subscribe to our mailing list!</p>
        <ContactForm />
      </section>
    </div>
  </div>
);

export default IndexPage;
