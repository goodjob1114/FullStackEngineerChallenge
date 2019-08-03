import React, { lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './layouts/RouteWithLayout';
import Minimal from './layouts/Minimal/Minimal';
import Main from './layouts/Main/Main';
const NotFound = lazy(() => import('./views/NotFound'));
const UserList = lazy(() => import('./views/UserList/UserList'));
const ReviewList = lazy(() => import('./views/ReviewList/ReviewList'));

const Routes = () => {
  return (
    <Suspense
      fallback={
        <Main>
          <div>Loading...</div>
        </Main>
      }
    >
      <Switch>
        <Redirect exact from="/" to="/reviews" />
        <RouteWithLayout
          component={ReviewList}
          exact
          layout={Main}
          path="/reviews"
        />
        <RouteWithLayout
          component={UserList}
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
