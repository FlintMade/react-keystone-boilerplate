/**
 * This file defines the email tests for your project.
 *
 * Each email test should provide the locals used to render the
 * email template for preview.
 *
 * Values can either be an object (for simple tests), or a
 * function that calls a callback(err, locals).
 *
 * Sample generated emails, based on the keys and methods below,
 * can be previewed at /keystone/test-email/{key}
 */

import Keystone from 'keystone';

module.exports = {
  'post': (req, res, callback) => {
    const Post = Keystone.list('Post');

    const post = new Post.model({
      name: 'A blog post',
      author: 'Jon Doe',
      body: 'Lorem ipsum Occaecat exercitation adipisicing commodo aliqua adipisicing in nisi exercitation do sit in do Ut amet enim officia dolor in Excepteur in culpa pariatur consectetur ex tempor elit officia ut commodo mollit amet in aliquip.',
      createdAt: Date.now()
    });

    callback(null, {
      object: post
    });
  }
};
