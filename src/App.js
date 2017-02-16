/*global UIkit */
import React, { Component } from 'react';
//import { Link } from 'react-router';

// get our custom components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <div className="uk-container">       
          {this.props.children}
        </div>

        

        <Sidebar />

      </div>
    );
  }
}

export default App;
