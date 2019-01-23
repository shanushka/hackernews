import React from 'react';
import { Link } from 'react-router-dom';

import Tab from './Tab';
import WithFetchData from '../hoc/WithFetchData';

const NewStory = props => {
  const listItems = props.stories.map(story => (
    <li className='storylist' key={story.id}>
      <a href={story.url}>{story.title}</a>
      <div>
        <span> {story.points} points | </span>
        <span>by {story.by} | </span>
        <span>approximately {story.time} | </span>
        <Link to='/comments'>
          <span className='comments'>
            comments ({story.commentIdArray ? story.commentIdArray.length : 0})
          </span>
        </Link>
      </div>
    </li>
  ));
  
  if (props.isLoading) {
    return (
      <div>
        <Tab />
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div>
      <Tab />
      <div className='stories'>{listItems}</div>
    </div>
  );
};

export default WithFetchData('newstories')(NewStory);
