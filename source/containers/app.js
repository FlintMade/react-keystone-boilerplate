import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import config from '../config';
import * as PostActions from '../data/posts';

import '../styles/main.scss';

class App extends Component {
  static fetchData(getState, dispatch) {
    const promises = [];
    if (!PostActions.isLoaded(getState())) {
      promises.push(dispatch(PostActions.loadPosts()));
    }
    return Promise.all(promises);
  }
  render() {
    const { children } = this.props;

    return (
      <div>
        <DocumentMeta {...config.app}/>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
