import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import routes from './routes';

// this imports from the external js script from externals in the config file.. (we import it where we want to use it)
// this needs to come from the built uikit source from npm really..
//import uikit from 'uikit';
//global.UIkit = window.UIkit;

// import routes (move to routes file)
// function loggedIn() { return false };

// function requireAuth(nextState, replace){ 
  
//   if(!loggedIn()){
//     replace({
//       pathname: '/login'
//     })
//   }
// }

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('root')
);

// onEnter={requireAuth}>