import React from 'react';
import { RoutesInterface } from 'routes';

const publicRoutes: RoutesInterface[] = [
  { id: 'publicroutes-home', title: 'ReactJS Advance Practical Assignment', path: '/', children: React.lazy(() => import('pages/home/PageHome')) },
  {
    id: 'publicroutes-login',
    title: 'ReactJS Advance Practical Assignment: Login',
    path: '/login',
    children: React.lazy(() => import('pages/login/PageLogin')),
  },
];

export default publicRoutes;
