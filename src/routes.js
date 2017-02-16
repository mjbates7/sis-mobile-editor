import React from 'react';
import { IndexRoute, Route } from 'react-router'

import App from './App';
import LoginPage from './containers/account/login';
import MeetingPage from './containers/meeting';
import EventPage from './containers/event';

export default (
    <Route path="/" component={App}>
        <Route path="/login" component={LoginPage} />
        
        <IndexRoute component={MeetingPage} />
        <Route path="/meeting/:meetingId" component={EventPage} />
    </Route>
);