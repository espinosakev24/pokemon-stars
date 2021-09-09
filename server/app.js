const express = require('express');
const { testDb } = require('./src/database/database.js');

const app = express();

app.get('/', (req, res) => {
  res.send('app is running!');
});

app.listen(5000, () => {
  console.log('running in port', 5000);
  testDb();
});
