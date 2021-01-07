import React, { Component } from 'react';
import PostList from "./components/PostList";
import AuthorInfo from "./components/AuthorInfo";
import { Button, Grid } from "semantic-ui-react";



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
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Blog;
