import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const GeneralLayoutComponent = (props: any) => {
  const { children } = props;
  return (
    <Layout className="scopicui-layout-general-container">
      <Content>{children}</Content>
    </Layout>
  );
};

export default GeneralLayoutComponent;
