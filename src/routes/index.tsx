import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Navbar } from 'components';
import PublicRouter from './PublicRouter';
import ProtectedRouter from './ProtectedRouter';

import publicRoutes from './public.routes';
import protectedRoutes from './protected.routes';

export interface RoutesInterface {
  id: string;
  path: string;
  title: string;
  description?: string;
  children: any;
}

const Routes = (_props: any) => (
  <>
    <div className="scopicui-mb-4">
      <Navbar />
    </div>
    <Router>
      <Switch>
        {/* Public Routes */}
        {publicRoutes.map((route) => (
          <Route key={route.id} path={route.path} exact>
            <PublicRouter title={route.title} description={route.description}>
              {route.children}
            </PublicRouter>
          </Route>
        ))}

        {/* Protected Routes */}
        {protectedRoutes.map((route) => (
          <Route key={route.id} path={route.path} exact>
            <ProtectedRouter title={route.title} description={route.description}>
              {route.children}
            </ProtectedRouter>
          </Route>
        ))}
      </Switch>
    </Router>
  </>
);

export default Routes;
