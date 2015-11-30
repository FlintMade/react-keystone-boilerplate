const keystone = require('keystone');
const config = require('../../config');

function sendNotification(recipients, callback, template, object, subject) {
  const options = {
    from: {
      name: object.name,
      email: object.email
    },
    subject: `[${config.app.shortTitle}] ${subject}`,
    object: object
  };

  const admins = recipients.filter(r => r.canAccessKeystone);
  if (admins.length > 0) {
    new keystone.Email(template).send({ ...options,
      to: admins,
      admin: true
    }, callback);
  }

  const nonAdmins = recipients.filter(r => !r.canAccessKeystone);
  if (nonAdmins.length > 0) {
    new keystone.Email(template).send({ ...options,
      to: nonAdmins,
      admin: false
    }, callback);
  }
}

export default function notify(template, object, callback, options = {}) {
  const findOptions = {
    'notifications': true
  };
  if (options.locationID) {
    findOptions.notificationLocations = options.locationID;
  }

  keystone.list('User').model.find(findOptions).exec((error, recipients) => {
    if (error) return callback(error);
    const subject = options.subject || 'New ' + template + ' from ' + object.name;
    sendNotification(recipients, callback, template, object, subject);
  });
}
