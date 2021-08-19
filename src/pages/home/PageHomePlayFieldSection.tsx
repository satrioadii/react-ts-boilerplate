import React from 'react';

import { Col, Row, Typography } from 'antd';
import { Container } from 'components';
import { useReduxSelector } from 'hooks';

const { Title } = Typography;

const PageHomePlayFieldSection = () => {
  const { player, opponent } = useReduxSelector('gameplay');
  const playerCardImage = player?.currentCard?.image || '';
  const opponentCardImage = opponent?.currentCard?.image || '';

  return (
    <div className="scopicui-mt-4 scopicui-mb-6">
      <Container>
        <Row gutter={[16, 16]}>
          <Col span={24} lg={{ span: 12 }}>
            <div className="scopic-pagehome-gameplay-card-container scopicui-py-3 scopicui-px-5">
              <Title level={3} style={{ marginBottom: '0px' }}>
                Player
              </Title>
              {playerCardImage && <img className="scopic-pagehome-gameplay-card-img scopicui-my-4" src={playerCardImage} alt="player card" />}
            </div>
          </Col>
          <Col span={24} lg={{ span: 12 }} className="scopicui-text-align-right">
            <div className="scopic-pagehome-gameplay-card-container enemy-card scopicui-py-3 scopicui-px-5">
              <Title level={3} style={{ marginBottom: '0px' }}>
                Bot
              </Title>
              {opponentCardImage && <img className="scopic-pagehome-gameplay-card-img scopicui-my-4" src={opponentCardImage} alt="opponent card" />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageHomePlayFieldSection;
