import React from 'react';

import Tab from './Tab';
import CommentLists from './CommentLists';

class Comments extends React.Component {
  render() {
    return (
      <div>
        <Tab />
          <div className='comments-overlay clearfix'>
            <div className='title'>{this.props.location.state.story.title}</div>
            <div className='commentlists'>
              <span className='titlecomments'>Comments</span>
              <CommentLists
                commentIdArray={this.props.location.state.story.commentIdArray}
              />
            </div>
        </div>
      </div>
    );
  }
}

export default Comments;
