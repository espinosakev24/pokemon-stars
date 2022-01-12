# Pokemon stars

`In development stage`
Webapp where you can find all pokemons from all generations and save your favorite ones!
It uses the [PokéAPI](https://pokeapi.co/) to fetch the data
![Overview image 1](https://i.ibb.co/yq2R1rj/pokemonlist.png 'Pokemon list')

#### Stack

- Nodejs
- React
- ContextAPI
- GrommetUI
- Styled components
- Express
- Postgres
- JWT
- Sequelize
- Docker

#### Run locally

To take an overview of the app run it locally in development mode.
Clone the project:

```sh
git clone https://github.com/espinosakev24/pokemon-stars.git
cd pokemon-stars
```

Terminal 1: run the frontend

```sh
cd client
npm install
npm start
```

Terminal 2: run the server

```sh
docker-compose up -d # run the database in the background
npm install
npm run migrate # creates the tables in the database
npm run dev # starts the server in development mode
```

You can navigate to http://localhost:3000 in the browser and explore how the app is going!

![Overview image 2](https://i.ibb.co/djQ96ZV/overview1.png 'Generations list')

![Overview image 3](https://i.ibb.co/QcjXLrZ/overview1.png 'Pokemon list')
