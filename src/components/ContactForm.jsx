import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import Recaptcha from 'react-google-invisible-recaptcha';


class ContactForm extends React.Component {
    constructor() {
        super()
        this.state = {
            email: ''
        };
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

    checkFormSubmission = (event) => {
        if(!this.canSubmit()){
            event.preventDefault();
            return;
        }
    }
    
    render() {
        const buttonEnabled = this.canSubmit()
        return (
        <div>
            <form onSubmit={this.checkFormSubmission}>
                <p>
                    <input type="text" value={this.state.email} onChange={this.emailChange} placeholder='Email Address'/>
                </p>
                    <button type="submit" disabled={!buttonEnabled}>Submit</button>
            </form>
        </div>
        );
    }
}
export default ContactForm;