'use strict';

const app = require( './api' )

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, function() {
  console.log('Contacts server listening on port %s.', PORT)
});

module.exports = server;