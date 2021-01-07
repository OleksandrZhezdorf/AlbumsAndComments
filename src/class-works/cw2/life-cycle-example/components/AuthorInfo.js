import React, { Component } from 'react';
import { Card, Icon, Image } from "semantic-ui-react";
import CommentItem from './CommentItem';
import LoadingOverlay from "./LoadingOverlay";

class AuthorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      loading: false,
      error: '',
      albums: []
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  componentDidMount() {
    const { authorId } = this.props;
    if (authorId) {
      this.fetchAuthor(authorId)
    }
    if (authorId) {
      this.fetchAlbum(authorId)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.authorId !== this.props.authorId && this.props.authorId) {
      this.fetchAuthor(this.props.authorId)
    }
    if (prevProps.authorId !== this.props.authorId && this.props.authorId) {
      this.fetchAlbum(this.props.authorId)
    }
  }

  fetchAuthor(authorId) {
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then(response => response.json())
      .then(data => this.setState({ author: data, loading: false }))
      .catch(e => this.setState({ error: e.message, loading: false, author: null }))
  }

  fetchAlbum(authorId) {
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}/albums`)
      .then(response => response.json())
      .then(albums => {
        this.setState({
          loading: false,
          albums
        })
      })
      .catch(e => {
        this.setState({
          loading: false
        });
      })
  }

  render() {
    const { error, author, loading, albums } = this.state;
    return (
      <div className='author-fixed'>
        <div className='error'>{error}</div>
        <LoadingOverlay active={loading} />
        {author &&
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>{author.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{author.email}</span>
              </Card.Meta>
              <Card.Description>
                {author.address.city}, {author.address.street} {author.address.zipcode}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='camera' />
                <span>
                  {albums.map(post => <CommentItem post={post} key={post.id} />).length}
                </span>
              </a>
            </Card.Content>
          </Card>
        }
      </div>
    );
  }
}

export default AuthorInfo;