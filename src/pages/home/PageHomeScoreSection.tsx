import React from 'react';

import { Col, Row, Typography } from 'antd';
import { Container } from 'components';
import { useReduxSelector } from 'hooks';

const { Title } = Typography;

const PageHomeScoreSection = () => {
  const { player, opponent } = useReduxSelector('gameplay');

  return (
    <Container>
      <div className="scopic-pagehome-score-title">
        <Title level={2}>Score</Title>
      </div>

      <div className="scopic-pagehome-score-content-container">
        <div className="scopic-pagehome-score-content">
          <Row gutter={[16, 16]} justify="space-between">
            <Col span={12}>
              <Title level={4}>{player.score || 0}</Title>
            </Col>
            <Col span={12}>
              <Title level={4} className="scopicui-text-align-right">
                {opponent.score || 0}
              </Title>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default PageHomeScoreSection;
