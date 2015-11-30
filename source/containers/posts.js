import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from '../components/post';

import '../styles/components/posts.scss';

class Posts extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="posts">
        {posts.map(p => <Post key={p._id} post={p} />)}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array
};

export default connect(
  (state) => {
    return {
      posts: state.posts.posts
    };
  }
)(Posts);
