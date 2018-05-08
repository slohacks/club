import React from 'react';
import styles from './ContactForm.module.css';
import Button from './Button';

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
        <form
          action="https://slohacks.us16.list-manage.com/subscribe/post?u=515a0d803b1aaaa867cc60566&amp;id=5b44869e63"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <p>
            <input
              className={errorCheck ? null : styles.Error}
              type="email"
              value={this.state.email}
              onChange={this.emailChange}
              placeholder="Email Address"
              name="EMAIL"
            />
          </p>
          <Button
            name="Subscribe"
            disabled={!errorCheck}
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
