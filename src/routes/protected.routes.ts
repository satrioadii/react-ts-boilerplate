import React from 'react';
import { RoutesInterface } from 'routes';

const protectedRoutes: RoutesInterface[] = [
  { id: 'protectedroutes-home', title: 'Play Game', path: '/play', children: React.lazy(() => import('pages/profile/PageProfile')) },
];

export default protectedRoutes;
