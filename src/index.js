const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send("hello world");
});

app.listen(3001, () => console.log('Server started at http://localhost:3001'));

