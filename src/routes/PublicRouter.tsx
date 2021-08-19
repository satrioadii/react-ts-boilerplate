import React from 'react';
import { Helmet } from 'react-helmet';

import { RoutesInterface } from 'routes';
import { LoaderPage, Suspenser } from 'components';

export interface PublicRouterInterface extends Pick<RoutesInterface, 'children' | 'title' | 'description'> {}

const PublicRouter = (props: PublicRouterInterface) => {
  const { children, title, description } = props;
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

export default PublicRouter;
