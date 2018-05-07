import React from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';
import styles from './ContactForm.module.css';
import Button from './Button';

/* eslint-disable react/prop-types, max-len */
class ContactForm extends React.Component {
  static validateEmail(email) {
    const at = email.indexOf('@');
    const dot = email.lastIndexOf('.');
    return email.length > 0 &&
             at > 0 &&
             dot > at + 1 &&
             dot < email.length &&
             email[at + 1] !== '.' &&
             email.indexOf(' ') === -1 &&
             email.indexOf('..') === -1;
  }
  constructor() {
    super();
    this.state = { email: '' };
    this.emailChange = this.emailChange.bind(this);
    this.checkFormSubmission = this.checkFormSubmission.bind(this);
  }

  onResolved() {
    console.log(this.recaptcha.getResponse());
  }

  checkFormSubmission(event) {
    if (!this.canSubmit()) {
      event.preventDefault();
    } else {
      this.recaptcha.execute();
    }
  }

  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  canSubmit() {
    const { email } = this.state;
    return ContactForm.validateEmail(email);
  }
  render() {
    const errorCheck = this.canSubmit();
    return (
      <div>
        <form onSubmit={this.checkFormSubmission}>
          <p>
            <input className={errorCheck ? null : styles.Error} type="text" value={this.state.email} onChange={this.emailChange} placeholder="Email Address" />
          </p>
          <Button name="Submit" disabled={!errorCheck} />
          <Recaptcha ref={(arg) => { this.recaptcha = arg; }} sitekey="6Lc0a1cUAAAAAIR_1Npm8y81RsAAgJNStGjX-wBR" size="invisible" onResolved={this.onResolved} />
        </form>
      </div>
    );
  }
}
export default ContactForm;
