import * as React from 'react';
import { Route, RouteProps } from 'react-router';

type Props = RouteProps & {
  layout: React.ComponentType;
};

const RouteWithLayout = ({
  component: Component,
  layout: Layout,
  ...rest
}: Props) => (
  <Route
    {...rest}
    render={props => <Layout>{Component && <Component {...props} />}</Layout>}
  />
);

export default React.memo(RouteWithLayout);
