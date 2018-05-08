import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavItem.module.css';

const NavItem = props => (
  <a
    className={styles.navitem}
    href={props.url}
  >
    {props.text}
  </a>
);

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
