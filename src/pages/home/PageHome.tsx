import React from 'react';

import { GeneralLayout } from 'components';

import PageHomeScoreSection from 'pages/home/PageHomeScoreSection';
import PageHomePlayFieldSection from 'pages/home/PageHomePlayFieldSection';
import PageHomeButtonSection from 'pages/home/PageHomeButtonSection';
import { useReduxSelector } from 'hooks';

const PageHome = () => {
  const gameplay = useReduxSelector('gameplay');
  return (
    <GeneralLayout>
      <PageHomeScoreSection />
      <PageHomePlayFieldSection />
      <PageHomeButtonSection />
    </GeneralLayout>
  );
};

export default PageHome;
