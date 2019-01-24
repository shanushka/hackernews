import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/layout.css';

import Home from './components/Home';
import AskStory from './components/AskStory';
import JobStory from './components/JobStory';
import NewStory from './components/NewStory';
import Comments from './components/Comments';
import { API_ROOT, API_ASKSTORY, API_NEWSTORY, API_JOBSTORY, API_ITEM_ID } from './constants/Common';

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
          <Route exact path={API_ROOT} component={Home} />
          <Route path={API_ASKSTORY} component={AskStory} />
          <Route path={API_NEWSTORY} component={NewStory} />
          <Route path={API_JOBSTORY} component={JobStory} />
          <Route path={API_ITEM_ID} component={Comments} />
        </div>
      </Router>
    );
  }
}

export default App;
