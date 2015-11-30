// Some magic added to the basic example at
// https://github.com/d-pac/restful-keystone

const keystone = require('keystone');

const restful = require('restful-keystone')(keystone, {
  root: process.env.API_BASE || '/api/'
});

// Standard config for retrievals
const defaultConfig = {
  sort: { sortOrder: 1 },
  methods: 'list'
};

module.exports = () => {
  return restful.expose({
    Post: defaultConfig
  })
  .start();
}();
