import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { GenerationDetail } from './GenerationDetail';
import { GenerationList } from './GenerationList';
import { Pokemons } from './Pokemons/Pokemons';

export const Generations = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={GenerationList} />
      <Route
        exact
        path={`${path}/:generationId`}
        component={GenerationDetail}
      />
      <Route path={`${path}/:generationId/pokemons`} component={Pokemons} />
    </Switch>
  );
};
