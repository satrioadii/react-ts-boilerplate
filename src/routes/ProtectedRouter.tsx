import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { RoutesInterface } from 'routes';
import { LoaderPage, Suspenser } from 'components';

export interface ProtectedRouterInterface extends Pick<RoutesInterface, 'children' | 'title' | 'description'> {
  user?: any;
}

const ProtectedRouter = (props: ProtectedRouterInterface) => {
  const { children, user, title, description } = props;
  if (!user?.id) return <Redirect push to="/login" />;

  const Child = children;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        {description && <meta name="description" content="description" />}
      </Helmet>
      <Suspenser fallback={<LoaderPage />}>
        <Child />
      </Suspenser>
    </>
  );
};

export default ProtectedRouter;
