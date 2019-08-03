import React, { lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './layouts/RouteWithLayout';
import Minimal from './layouts/Minimal/Minimal';
import Main from './layouts/Main/Main';

const NotFound = lazy(() => import('./views/NotFound'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <RouteWithLayout
          component={NotFound}
          exact
          layout={Main}
          path="/users"
        />
        <RouteWithLayout
          component={NotFound}
          exact
          layout={Minimal}
          path="/not-found"
        />
        <Redirect to="/not-found" />
      </Switch>
    </Suspense>
  );
};

export default React.memo(Routes);
