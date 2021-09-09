import React from 'react';
import { grommet, Grommet, Heading } from 'grommet';
import { Login } from './pages/Login';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Register } from 'pages/Register';
import { Generations } from 'pages/Generations';
import { mockServer } from './mockserver';

mockServer();

function App() {
  return (
    <Grommet className="App" theme={grommet}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/generations" component={Generations} />
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;
