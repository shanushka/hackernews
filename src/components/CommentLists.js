import React from 'react';

import SingleComment from './SingleComment';

class CommentLists extends React.Component {
  render() {
    return( <ul>{this.props.commentIdArray
      .map(id => <li key={id}><SingleComment id={id} /></li>)
  }</ul>);
  }
}

export default CommentLists;
