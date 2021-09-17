const express = require('express');
const { testDb } = require('./database/database.js');
const userRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const pokemonRoutes = require('./routes/pokemon.routes');
const favoriteRoutes = require('./routes/favorite.routes');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/generations', pokemonRoutes);
app.use('/api/favorites', favoriteRoutes);

app.listen(4000, () => {
  console.log('running in port', 4000);
  testDb();
});
