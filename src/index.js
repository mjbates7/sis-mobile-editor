import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import App from './App';

// this imports from the external js script from externals in the config file.. (we import it where we want to use it)
// this needs to come from the built uikit source from npm really..
//import uikit from 'uikit';
//global.UIkit = window.UIkit;

// import routes (move to routes file)
import LoginPage from './containers/login';


function loggedIn() { return false };

function requireAuth(nextState, replace){ 
  
  if(!loggedIn()){
    replace({
      pathname: '/login'
    })
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={LoginPage} />
     
    </Route>
  </Router>
),  document.getElementById('root'));

// onEnter={requireAuth}>