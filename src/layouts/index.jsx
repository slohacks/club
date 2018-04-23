import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './index.css';
import styles from './index.module.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="SLO Hacks"
      meta={[
        { name: 'description', content: 'SLO Hacks' },
        { name: 'keywords', content: 'san luis obispo, cal poly, hackathon, coding, software, competition' },
        { name: 'theme-color', content: '#FFFFFF' },
      ]}
    />
    <div> 
      {children()}
    </div>
    <div className={styles.contact}>
      <h2>
        Contact Us
      </h2>
      <p>
        Have questions, feedback, or concerns? Shoot us an email at team@slohacks.com!.
      </p>
    </div>
    <footer
      className={styles.footer}
    >
      <p>Made with <span>♥</span> by the SLO Hacks Team</p>
      <p>© SLO Hacks 2018</p>
    </footer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func, // eslint-disable-line react/require-default-props
};

export default TemplateWrapper;
