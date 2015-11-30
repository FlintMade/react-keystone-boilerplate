import React, { Component, PropTypes } from 'react';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <h1>{post.name}</h1>
        <h3>{post.author}</h3>
        <div dangerouslySetInnerHTML={{__html: post.body}} />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
