import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/layout.css';

import Home from './components/Home';
import AskStory from './components/AskStory'; 
import JobStory from './components/JobStory';
import NewStory from './components/NewStory';
import Comments from './components/Comments';

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
        <div className='App'>
          <Route exact path='/' component= {Home}  />
          <Route path ='/askStory' component ={AskStory} />
          <Route path='/newStory' component= {NewStory}/>
          <Route path='/jobStory' component= {JobStory}/>
          <Route path='/comments' component= {Comments}/>
        </div>
    );
  }
}

export default App;
