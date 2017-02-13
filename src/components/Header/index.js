import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                    <a href="#sidebar" className="uk-navbar-toggle" data-uk-navbar-toggle-icon data-uk-toggle></a>
                </div>
            </nav>
        );
    }
}

export default Header;