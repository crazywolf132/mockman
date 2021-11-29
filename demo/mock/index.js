const foo = require('./foo.json');
const bar = require('./bar');

module.exports = {
  // Support both GET and POST
  '/api/users/1': foo,
  '/api/foo/bar': bar(),

  // Support standard HTTP
  'GET /api/users': { users: [1, 2] },
  'DELETE /api/users': { users: [1, 2] },

  // Support custom functions, API reference express4
  'POST /api/users/create': (req, res) => {
    res.end('OK');
  },

  // Support parameters
  'POST /api/users/:id': (req, res) => {
    const { id } = req.params;
    res.send({ id });
  },
};
