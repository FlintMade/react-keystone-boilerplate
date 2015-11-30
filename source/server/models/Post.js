import Keystone, { Field } from 'keystone';

/**
 * Post Model
 * ==========
 */

const Post = new Keystone.List('Post', {
  track: true
});

Post.add({
  createdAt: { type: Date, default: Date.now },
  name: { type: Field.Types.Text, index: true, required: true, initial: true },
  author: { type: Field.Types.Text, index: true, required: true, initial: true },
  body: { type: Field.Types.Html, wysiwyg: true, required: true, initial: true }
});

/**
 * Registration
 */

Post.defaultColumns = 'name, author, createdAt';
Post.register();
