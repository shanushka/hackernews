import React from 'react';

import SingleComment from './SingleComment';

class CommentLists extends React.Component {
  render() {
    return this.props.commentIdArray.map(id => <SingleComment id={id} />);
  }
}

export default CommentLists;
