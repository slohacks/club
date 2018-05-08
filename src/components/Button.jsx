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
      disabled={props.disabled}
    >
      { props.name }
    </button>
  </a>
);

const NonLinkButton = props => (
  <button
    type="submit"
    className={styles.Button}
    disabled={props.disabled}
  >
    { props.name }
  </button>
);

const Button = props => (
  props.href
    ? <LinkButton name={props.name} href={props.href} disabled={props.disabled} />
    : <NonLinkButton name={props.name} disabled={props.disabled} />
);

LinkButton.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  disabled: PropTypes.bool,
};

LinkButton.defaultProps = {
  href: null,
  disabled: false,
};

NonLinkButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

NonLinkButton.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  href: null,
  disabled: false,
};
export default Button;
