import React, { Component } from 'react';
import { Feed } from "semantic-ui-react";

class PostItem extends Component {
  render() {
    const { post, onClick } = this.props;
    return (
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary onClick={onClick}>
              <Feed.User>{post.title}</Feed.User>
            </Feed.Summary>
            <Feed.Extra text>
              {post.body}
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default PostItem;
