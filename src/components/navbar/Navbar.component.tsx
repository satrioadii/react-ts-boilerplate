import React from 'react';
import { Typography } from 'antd';
import { Container } from 'components';

const { Title } = Typography;

const NavbarComponent = () => (
  <div className="scopicui-cmp-navbar-parent">
    <Container fluid>
      <Title style={{ marginBottom: '0px' }} level={2} className="scopicui-py-1">
        Card Game
      </Title>
    </Container>
  </div>
);

export default NavbarComponent;
