import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const LinkButton = props => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      type="button"
      className={styles.Button}
    >
      { props.name }
    </button>
  </a>
);

const NonLinkButton = props => (
  <button
    type="submit"
    className={styles.Button}
  >
    { props.name }
  </button>
);

const Button = props => (
  props.href
    ? <LinkButton name={props.name} href={props.href} />
    : <NonLinkButton name={props.name} />
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default Button;
