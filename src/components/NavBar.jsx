import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem.jsx';
import styles from './NavBar.module.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <NavItem text="Events" url={'#events'}></NavItem>
                <NavItem text="Partners" url={'#partners'}></NavItem>
                <NavItem text="Subscribe" url={'#subscribe'}></NavItem>
                <NavItem text="Contact Us" url={'#contact-us'}></NavItem>
            </nav>
        );
    }
}

export default NavBar;