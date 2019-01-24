import React from 'react';

import CommentLists from './CommentLists';
import { getTimeDifference } from '../utils/getTimeDifference';
import { getCommentsByApi } from '../services/getCommentsByApi';

class SingleComment extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      id: props.id,
      parent: '',
      by: '',
      type: '',
      text: '',
      commentIdArray: '',
      time: ''
    };
  }

  componentDidMount() {
    this.getComment();
  }

  getComment() {
    getCommentsByApi(this.props.id).then(data => {
      this.setState({
        id: data.id,
        parent: data.parent,
        by: data.by,
        type: data.type,
        text: data.text,
        commentIdArray: data.kids,
        time: getTimeDifference(data.time)
      });
    })
    .catch(err => {return err})
  }

  render() {
    return (
       <div className='singlecomment'>
          <div className='user'>
            <span className='userName'>{this.state.by} | </span>
            <span className='timecomment'>{this.state.time}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: this.state.text }} />
          <div className='replies'>Replies</div>
          {this.state.commentIdArray ? (
            <CommentLists commentIdArray={this.state.commentIdArray} />
          ) : (
            ''
          )}
        </div>
    );
  }
}

export default SingleComment;
