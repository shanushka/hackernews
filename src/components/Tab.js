import React from 'react';
import { Link } from 'react-router-dom';

class Tab extends React.Component {
  constructor() {
    super();

    this.state = {
      active: 'Home'
    };
  }

  render() {
    return (
      <div className='tabs clearfix'>
        <div className='logo'>
          <div className='wrapper'>
            <Link to='/'>
              <h1>HackerNews</h1>
            </Link>
          </div>
        </div>
        <div className='wrapper'>
          <ul>
            <li>
              <Link to='/newStory'>New Stories</Link>
            </li>
            <li>
              <Link to='/comments'>Comments</Link>
            </li>
            <li>
              <Link to='/jobStory'>Job</Link>
            </li>
            <li>
              <Link to='/askStory'>Ask</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tab;
