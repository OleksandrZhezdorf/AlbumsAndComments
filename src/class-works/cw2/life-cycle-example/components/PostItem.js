import React, { Component } from 'react';
import { Feed } from "semantic-ui-react";
import CommentInfo from './CommentInfo';

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
    }
  }

  render() {
    const { post, onClick } = this.props;
    const { showComments } = this.state
    return (
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary onClick={onClick}>
              <Feed.User
                onClick={() => this.setState({ showComments: !showComments })}>
                {post.title}
              </Feed.User>
            </Feed.Summary>
            <Feed.Extra text>
              {post.body}
            </Feed.Extra>
            <Feed.Extra>
              {showComments && <CommentInfo postId={post.id} /> }
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default PostItem;
