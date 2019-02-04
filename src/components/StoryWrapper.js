import React from 'react';
import { Link } from 'react-router-dom';

import Tab from './Tab';

const StoryWrapper = (props) => {
  const listItems = props.stories.map(story =>
    props.isLoading ? (
      <p>Loading</p>
    ) : (
      <li className='storylist' key={story.id}>
      {props.isLogin ? (<div class="bookmark" onClick ={ ()=> props.onBookMarkClick(story) }></div>
      ):('') }
        <a href={story.url}>{story.title}</a>
        <div>
          <span> {story.points} points | </span>
          <span>by {story.by} | </span>
          <span>approximately {story.time} | </span>
          <Link to={{ pathname: `item/${story.id}`, state: { story: story } }}>
            <span className='comments'>
              comments ({story.commentIdArray ? story.commentIdArray.length : 0}
              )
            </span>
          </Link>
        </div>
      </li>
    )
  );

  return (
    <div>
      <Tab />
      <div className='button_container clearfix'>
        <div className='button_right'>
          <button
            onClick={props.onPreviousClick}
            disabled={props.currentPage === 1}
          >
            &laquo; Prev
          </button>
          <span>{props.currentPage}</span>
          <button
            onClick={props.onNextClick}
            disabled={props.currentPage === props.noOfMaxPage}
          >
            Next &raquo;
          </button>
        </div>
      </div>
      <div className='stories'>{listItems}</div>
    </div>
  );
}

export default StoryWrapper;