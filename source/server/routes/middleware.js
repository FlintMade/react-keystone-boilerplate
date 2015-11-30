/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */

const _ = require('underscore');


/**
  Initialises the standard view locals
  The included layout depends on the navLinks array to generate
  the navigation in the header, you may wish to change this array
  or replace it with your own templates / logic.
*/

exports.initLocals = (req, res, next) => {
  const locals = res.locals;
  locals.navLinks = [
    { label: 'Home', key: 'home', href: '/' }
  ];
  locals.user = req.user;
  next();
};


/**
  Fetches and clears the flashMessages before a view is rendered
*/

exports.flashMessages = (req, res, next) => {
  const flashMessages = {
    info: req.flash('info'),
    success: req.flash('success'),
    warning: req.flash('warning'),
    error: req.flash('error')
  };
  res.locals.messages = _.any(flashMessages, (msgs) => { return msgs.length; }) ? flashMessages : false;
  next();
};


/**
  Prevents people from accessing protected pages when they're not signed in
 */

exports.requireUser = (req, res, next) => {
  if (!req.user) {
    req.flash('error', 'Please sign in to access this page.');
    res.redirect('/keystone/signin');
  } else {
    next();
  }
};
