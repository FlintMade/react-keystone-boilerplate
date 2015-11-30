require('babel-core/polyfill');

const environment = {
  development: {
    isProduction: false,
    baseURL: 'http://localhost:3000'
  },
  production: {
    isProduction: true,
    baseURL: 'http://example-url.com'
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  port: process.env.PORT || 3000,
  app: {
    title: 'React Keystone Boilerplate',
    shortTitle: 'RKB',
    description: 'The hottest boilerplate around',
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': 'React Keystone Boilerplate',
        // 'og:image': 'https://react-redux.herokuapp.com/logo.jpg',
        'og:locale': 'en_US',
        'og:title': 'React Keystone Boilerplate',
        'og:description': 'The hottest boilerplate around',
        'twitter:card': 'summary',
        'twitter:site': '@ntdb',
        'twitter:creator': '@ntdb',
        'twitter:title': 'React Keystone Boilerplate',
        'twitter:description': 'The hottest boilerplate around'
        // 'twitter:image': 'https://react-redux.herokuapp.com/logo.jpg',
        // 'twitter:image:width': '200',
        // 'twitter:image:height': '200'
      }
    }
  }
}, environment);
