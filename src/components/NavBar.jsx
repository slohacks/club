import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem.jsx';
import styles from './NavBar.module.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav class="navbar">
                <NavItem text="Events" url={window.location.href + 'events/'}></NavItem>
                <NavItem text="Partners" url={window.location.href + 'partners/'}></NavItem>
                <NavItem text="Subscribe" url={window.location.href + 'subscribe/'}></NavItem>
                <NavItem text="Contact Us" url={window.location.href + 'contact-us/'}></NavItem>
            </nav>
        );
    }
}

export default NavBar;