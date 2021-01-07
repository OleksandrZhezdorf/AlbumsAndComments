import React, { Component } from 'react';
import CommentItem from './CommentItem';
import LoadingOverlay from "./LoadingOverlay";

export default class CommentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: '',
            comments: [],
        }
    }

    componentDidMount() {
        const { postId } = this.props;
        if (postId) {
            this.fetchComment(postId)
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.postId !== this.props.postId && this.props.postId) {
            this.fetchComment(this.props.postId)
        }
    }

    fetchComment(postId) {
        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                this.setState({
                    loading: false,
                    comments
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
        const { error, loading, comments } = this.state;
        return (
            <div className='comment-fixed'>
                <div className='error'>{error}</div>
                <LoadingOverlay active={loading} />
                <div className='post-list-wrapper'>
                    <LoadingOverlay active={loading} />
                    {comments.map(post => <CommentItem  post={post} key={post.id} />)}
                </div>
            </div>
        )
    }
}

