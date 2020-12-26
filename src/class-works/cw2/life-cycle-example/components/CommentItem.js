import React, { Component } from 'react'
import { Feed } from "semantic-ui-react";

export default class CommentItem extends Component {
    render() {
        const { post, onClick } = this.props;
        return (
            <Feed>
                <Feed.Event>
                    <Feed.Content>
                        <Feed.Summary onClick={onClick}>
                            <Feed.User>{post.name}</Feed.User>
                        </Feed.Summary>
                        <Feed.Extra text>
                            {post.email}
                        </Feed.Extra>
                        <Feed.Extra text>
                            {post.body}
                        </Feed.Extra>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}
