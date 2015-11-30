import Keystone, { Field } from 'keystone';

/**
 * User Model
 * ==========
 */

const User = new Keystone.List('User');

User.add({
  name: { type: Field.Types.Name, required: true, index: true },
  email: { type: Field.Types.Email, initial: true, required: true, index: true },
  password: { type: Field.Types.Password, initial: true, required: true }
}, 'Permissions', {
  isAdmin: { type: Field.Types.Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function checkAdmin() {
  return this.isAdmin;
});


/**
 * Registration
 */

User.defaultColumns = 'name, email, isAdmin';
User.register();
