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
    <div>
      <h2>
        Our Events
      </h2>
      <h3>
        2017 - 2018
      </h3>
      <div className={styles.event}>
        <div>
          <h2>
            Local Hack Day
          </h2>
        </div>
        <div>
          <h2>
            SLO Hacks
          </h2>
        </div>
        <div>
          <h2>
            Firecode
          </h2>
        </div>
      </div>
      <h3>
        2018 - 2019
      </h3>
      <h3>
        Stay tuned!
      </h3>
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
