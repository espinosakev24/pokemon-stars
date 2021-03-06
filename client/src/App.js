import React from 'react';
import { grommet, Grommet } from 'grommet';
import { Login } from './pages/Login';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Register } from 'pages/Register';
import { Generations } from 'pages/Generations';
import { mockServer } from './mockserver';
import { Navbar } from 'components/Navbar';
import { AuthRoute } from 'components/AuthRoute';
import { AuthContextProvider } from 'context';
import { Protected } from 'components/Protected';
import { Profile } from 'pages/Profile';
import { PokemonDetail } from 'components/PokemonDetail';

// mockServer();

function App() {
  return (
    <AuthContextProvider>
      <Grommet className="" theme={grommet}>
        <Router>
          <Protected>
            <Navbar />
          </Protected>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <AuthRoute path="/generations" component={Generations} />
            <AuthRoute path="/profile" component={Profile} />
            <AuthRoute path="/:pokemonName/detail" component={PokemonDetail} />
          </Switch>
        </Router>
      </Grommet>
    </AuthContextProvider>
  );
}

export default App;
