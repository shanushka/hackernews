import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/layout.css';

import Home from './components/Home';
import Comments from './components/Comments';
import Story from './components/NewStory';

/**
 *  Main Component class.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   *
   *
   * @returns {object}
   * @memberof App
   */
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component= {Home} />
          <Route path='/newStory' component= {Story}/>
          <Route path='/comments' component= {Comments}/>
        </div>
      </Router>
    );
  }
}

export default App;
