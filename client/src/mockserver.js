import { createServer } from 'miragejs';
import { games, loginData, pokemons } from './mockdata';

const baseUrl = 'http://localhost:4000';

export const mockServer = () =>
  createServer({
    routes() {
      this.get(`${baseUrl}/api/games`, () => games);
      this.get(`${baseUrl}/api/games/:id/pokemons`, () => pokemons);
      this.post(`${baseUrl}/api/login`, () => loginData);
      this.post(`${baseUrl}/api/register`, () => loginData);
    },
  });
