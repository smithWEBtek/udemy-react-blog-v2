import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {

  state = {
    loadedPost: null
  }

  componentDidUpdate() {
    if (this.props.id)
      if (!this.state.loadedPost || this.state.loadedPost.id !== this.props.id) {
        axios.get('/posts/' + this.props.id)
          .then(response => {
            this.setState({ loadedPost: response.data })
          }
          )
      };

  }

  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.id)
      .then(response => {
        console.log('delete response: ', response)
      })
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h3>{this.state.loadedPost.title}</h3>
          <h4>{this.state.loadedPost.body}: Title</h4>
          <p>Content</p>
          <div className="Edit">
            <button
              className="Delete"
              onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;