import { AuthRoute } from 'components/AuthRoute';
import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import { GenerationDetail } from './GenerationDetail';
import { GenerationList } from './GenerationList';
import { Pokemons } from './Pokemons/Pokemons';

export const Generations = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <AuthRoute exact path={path} component={GenerationList} />
      <AuthRoute
        exact
        path={`${path}/:generationId`}
        component={GenerationDetail}
      />
      <AuthRoute path={`${path}/:generationId/pokemons`} component={Pokemons} />
    </Switch>
  );
};
