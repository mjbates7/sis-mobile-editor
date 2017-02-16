/*global UIkit */
import React, { Component } from 'react';

class LoginPage extends Component {

    constructor() {
        super();
        
        this.state = {

        }

        UIkit.notification({
            message: 'my-message!',
            status: 'primary',
            pos: 'top-right',
            timeout: 5000
        });
    }

    render() {
        return (
            <div>
                Login Page here..
                    <div className="uk-grid-small uk-child-width-1-2" data-uk-grid>
                        <div className="uk-card uk-card-default uk-card-body uk-padding-small">
                            <div className="uk-card-header uk-padding-small">
                                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                    <div className="uk-width-auto">
                                        <img width="40" height="40" alt="1" src="http://placehold.it/40x40?text=1" />
                                    </div>
                                    <div className="uk-width-expand">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">My Favourite Horse</h3>
                                        <p className="uk-text-meta uk-margin-remove-top">
                                            <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                            <div className="uk-card-footer">
                                <span className="uk-label">2/1</span>
                                <span className="uk-label">7/2</span>
                                <span className="uk-label">6/4</span>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}

export default LoginPage;