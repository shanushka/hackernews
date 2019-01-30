import React from 'react';
import { Link } from 'react-router-dom';

import {
  API_ASKSTORY,
  API_JOBSTORY,
  API_ROOT,
  API_NEWSTORY,
  LOGIN
} from '../constants/Common';

class Tab extends React.Component {
  constructor() {
    super();

    this.state = {
      active: 'Home',
      userName:''
    };
  }
  
  componentDidMount(){
    const currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
    this.setState({
        userName:currentUser.username
    })
  }
  
  render() {
    const login = this.state.userName ? (
      <p>{this.state.userName}</p>
    ) : (
      <Link to={LOGIN}>Login</Link>
    );

    return (
      <div className='tabs clearfix'>
        <div className='logo'>
          <div className='wrapper'>
            <Link to={API_ROOT}>
              <h1>HACKER NEWS</h1>
            </Link>
          </div>
        </div>
        <div className='wrapper clearfix'>
          <ul>
            <li>
              <Link to={API_NEWSTORY}>New Stories</Link>
            </li>
            <li>
              <Link to={API_JOBSTORY}>Job</Link>
            </li>
            <li>
              <Link to={API_ASKSTORY}>Ask</Link>
            </li>
            <div className='login'>{login}</div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tab;
