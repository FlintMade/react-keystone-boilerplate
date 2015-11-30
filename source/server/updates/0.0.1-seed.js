// Seed the database!

exports.create = {
  User: [
    {
      'name.first': 'Admin',
      'name.last': 'User',
      email: 'admin@keystone.com',
      password: 'password',
      isAdmin: true
    }
  ],
  Post: [
    {
      name: 'This is a post',
      author: 'Some guy',
      body: 'Lorem ipsum Pariatur sit adipisicing aliquip quis in ullamco nisi cillum fugiat est proident laboris Ut est Excepteur in est in veniam mollit labore sunt in commodo laborum ex culpa.'
    },
    {
      name: 'This is another post',
      author: 'Some other guy',
      body: 'Lorem ipsum Ad aliqua ullamco esse eiusmod commodo Duis tempor ut ullamco nisi velit exercitation ea veniam commodo in non deserunt cillum laborum laborum cillum consequat ullamco ullamco minim.'
    }
  ]
};
