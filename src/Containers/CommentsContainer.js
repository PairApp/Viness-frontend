import React, { Component } from 'react'
import CommentsDisplay from '../Components/CommentsDisplay'
import CommentsForm from '../Components/CommentsForm'

const commentsAPI = 'http://localhost:3000/comments'

class CommentsContainer extends Component {
    state = {
        comments: this.props.wine.comments
    }

    handlePost = (comment) => {
        this.setState((prev) => ({comments: [...prev.comments, comment]}))
    }

    deleteComment = (commentId) => {
        return fetch(`${commentsAPI}/${commentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(this.setState((prev) => ({ comments: prev.comments.filter(comment => comment.id !== commentId) })))
    }

    render() {
        return (
            <div className='comments-container'>
                <CommentsDisplay wine={this.props.wine} comments={this.state.comments} deleteComment={this.deleteComment} />
                <CommentsForm postComment={this.props.postComment} handlePost={this.handlePost} wine={this.props.wine} />
            </div>
        )
    }
}


export default CommentsContainer