import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { PokemonDetail } from './PokemonDetail';
import { PokemonList } from './PokemonList';

export const Pokemons = () => {
  const { url, path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={PokemonList} />
      <Route exact path={path} component={PokemonDetail} />
    </Switch>
  );
};
