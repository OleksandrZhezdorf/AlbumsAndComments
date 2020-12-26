import React, { Component } from 'react';
import CommentItem from './CommentItem';
import LoadingOverlay from "./LoadingOverlay";

export default class CommentInfo extends Component {
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
        fetch(`https://jsonplaceholder.typicode.com/posts/${authorId}/comments`)
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
        const { error, loading, posts } = this.state;
        return (
            <div className='author-fixed'>
                <div className='error'>{error}</div>
                <LoadingOverlay active={loading} />
                <div className='post-list-wrapper'>
                    <LoadingOverlay active={loading} />
                    {posts.map(post => <CommentItem  post={post} key={post.id} />)}
                </div>
            </div>
        )
    }
}

