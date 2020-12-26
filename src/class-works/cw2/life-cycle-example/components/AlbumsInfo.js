import React, { Component } from 'react';
import LoadingOverlay from "./LoadingOverlay";
import CommentItem from './CommentItem';

export default class AlbumsInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: null,
            loading: false,
            error: '',
            posts: [],
        }
    }

    componentDidMount() {
        const { authorId } = this.props;
        if (authorId) {
            this.fetchAuthor(authorId)
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.authorId !== this.props.authorId && this.props.authorId) {
            this.fetchAuthor(this.props.authorId)
        }
    }

    fetchAuthor(authorId) {
        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/users/${authorId}/albums`)
            .then(response => response.json())
            .then(posts => {
                this.setState({
                    loading: false,
                    posts
                })
            })
            .catch(e => {
                this.setState({
                    loading: false
                });
                alert(e.message)
            })
    }
    render() {
        const { error, author, loading, posts } = this.state;
        return (
            <div className='author-fixed'>
                <div className='error'>{error}</div>
                <LoadingOverlay active={loading} />
                <div className='album-list-wrapper'>
                    <LoadingOverlay active={loading} />
                    <span className = 'number-albums'>
                    {posts.map(post => <CommentItem post={post} key={post.id} />).length}
                    </span>
                </div>
            </div>
        )
    }
}
