'use strict';

const server = require('./server');

server.listen(3000, () => {
  console.log('Server up on port 3000');
})