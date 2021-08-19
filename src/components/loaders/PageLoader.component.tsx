import React from 'react';
import { Spin } from 'antd';

const ComponentLoaderPage = () => (
  <Spin spinning>
    <div className="cmp-loader" />
  </Spin>
);

export default ComponentLoaderPage;
