import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { GenerationList } from './GenerationList';
import { Pokemons } from './Pokemons/Pokemons';

export const Generations = () => {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={GenerationList} />
      <Route exact path={`${path}/:generationId`} component={GenerationList} />
      <Route path={`${path}/:generationId/pokemons`} component={Pokemons} />
    </Switch>
  );
};
