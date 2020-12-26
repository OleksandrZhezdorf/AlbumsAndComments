import React, { Component } from 'react';
import PostList from "./components/PostList";
import AuthorInfo from "./components/AuthorInfo";
import { Button, Grid, GridColumn } from "semantic-ui-react";
import CommentInfo from './components/CommentInfo';
import AlbumsInfo from './components/AlbumsInfo';

class Blog extends Component {
  state = {
    selectedAuthorId: null
  };

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  onSelectPost = post => {
    console.log(post);
    this.setState({ selectedAuthorId: post.userId })
  };

  render() {
    const { selectedAuthorId, hasError } = this.state;
    if (hasError) return (
      <Button>Update</Button>
    );
    return (
      <Grid>
        <Grid.Column width={6}>
          <PostList onPostClick={this.onSelectPost} />
        </Grid.Column>
        <Grid.Column width={4}>
          <AuthorInfo authorId={selectedAuthorId} />
          <AlbumsInfo authorId={selectedAuthorId} />
        </Grid.Column>
        <Grid.Column width={2}>
          <CommentInfo authorId={selectedAuthorId} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Blog;
