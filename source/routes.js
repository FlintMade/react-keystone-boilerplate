import React from 'react';
import { Route } from 'react-router';

import App from './containers/app';
import Posts from './containers/posts';
import NotFound from './containers/notfound';

export default (_store) => {
  return (
    <Route component={App}>
      <Route path="/" component={Posts} />
      <Route path="*" component={NotFound}/>
    </Route>
  );
};
