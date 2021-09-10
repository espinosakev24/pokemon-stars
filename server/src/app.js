const express = require('express');
const { testDb } = require('./database/database.js');
const userRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(4000, () => {
  console.log('running in port', 4000);
  testDb();
});
