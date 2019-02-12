import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/layout.css';

import {
  REGISTER,
  API_ROOT,
  API_ASKSTORY,
  API_NEWSTORY,
  API_JOBSTORY,
  API_ITEM_ID,
  BOOKMARKS,
  LOGIN
} from './constants/Common';
import Home from './components/Home';
import Login from './components/Login';
import Bookmarks from './components/Bookmarks';
import Register from './components/Register';
import AskStory from './components/AskStory';
import JobStory from './components/JobStory';
import NewStory from './components/NewStory';
import Comments from './components/Comments';
import NotFoundPage from './components/NotFoundPage';

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
      <Router basename = 'hackernews'>
        <div className='App'>
          <Switch>
            <Route exact path={API_ROOT} component={Home} />
            <Route path={API_ASKSTORY} component={AskStory} />
            <Route path={API_NEWSTORY} component={NewStory} />
            <Route path={API_JOBSTORY} component={JobStory} />
            <Route path={API_ITEM_ID} component={Comments} />
            <Route path={BOOKMARKS} component={Bookmarks} />
            <Route path={LOGIN} component={Login} />
            <Route path={REGISTER} component={Register} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
