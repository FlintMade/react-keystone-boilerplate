/* global __SERVER__ */

import superagent from 'superagent';
import config from '../config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (__SERVER__) {
    // Prepend host and port of the API server to the path.
    return 'http://localhost:' + config.port + adjustedPath;
  }
  return adjustedPath;
}

class ApiClient_ {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params, data, headers } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));

        if (params) request.query(params);

        if (__SERVER__ && req.get('cookie')) {
          request.set('cookie', req.get('cookie'));
        }

        if (headers) {
          headers.forEach(header => request.set(header.key, header.val));
        }

        if (data) request.send(data);

        request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
      }));
  }
}

const ApiClient = ApiClient_;

export default ApiClient;
