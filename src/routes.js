import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import LoginPage from './containers/account/login';
import MeetingPage from './containers/meeting';
import EventPage from './containers/event';

export default (
    <Route path="/" component={App}>
        <Route path="/login" component={LoginPage} />
        
        <IndexRoute component={MeetingPage} />
        <Route path="/meeting/:meetingId:" component={EventPage} />
    </Route>
);