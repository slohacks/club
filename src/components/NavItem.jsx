import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavItem.module.css';

class NavItem extends React.Component {
    render() {
        return (
            <a className="navitem" href={this.props.url}>{this.props.text}</a>
        );
    }
}

export default NavItem;