import React, { Suspense } from 'react';

export interface ComponentSuspenserInterface {
  children: any;
  fallback: any;
}

const ComponentSuspenser = (props: ComponentSuspenserInterface) => {
  const { children, fallback } = props;
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default ComponentSuspenser;
