import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-google-invisible-recaptcha';
import styles from './ContactForm.module.css';
import Button from './Button';

class ContactForm extends React.Component {
    constructor() {
        super()
        this.state = { email: '' };
    }

    emailChange = (event) => {
        this.setState({email: event.target.value});
    }

    validateEmail = (email) => {
        const at = email.indexOf( "@" );
        const dot = email.lastIndexOf( "\." );
        return email.length > 0 &&
               at > 0 &&
               dot > at + 1 &&
               dot < email.length &&
               email[at + 1] !== "." &&
               email.indexOf( " " ) === -1 &&
               email.indexOf( ".." ) === -1;
    }

    canSubmit = (event) => {
        const {email} = this.state
        return this.validateEmail(email)
    }

    render() {
        const errorCheck = this.canSubmit()
        return (
        <div>
            <form onSubmit={this.checkFormSubmission}>
                <p>
                    <input className={errorCheck ? null : styles.Error} type="text" value={this.state.email} onChange={this.emailChange} placeholder='Email Address'/>
                </p>
                <Button name="Submit" disabled={!errorCheck} />
                <Recaptcha
                    ref={ ref => this.recaptcha = ref}
                    sitekey = "6Lc0a1cUAAAAAIR_1Npm8y81RsAAgJNStGjX-wBR"
                    size="invisible"
                    onResolved={ this.onResolved } />
            </form>
        </div>
        );
    }

    checkFormSubmission = (event) => {
        if(!this.canSubmit()){
            event.preventDefault();
            return;
        }else{
            this.recaptcha.execute();
        }
    }

    onResolved = () => {
        alert('Recaptcha resolved with response: ' + this.recaptcha.getResponse());
    }
}
export default ContactForm; 