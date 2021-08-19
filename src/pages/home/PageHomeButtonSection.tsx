import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';

import { useReduxSelector } from 'hooks';
import { GameplayActions } from 'actions';

const PageHomeButtonSection = () => {
  const dispatch = useDispatch();
  const gameplayActions = new GameplayActions();
  const { status, loadingStatus } = useReduxSelector('gameplay');

  const handleOpenCardClick = () => {
    dispatch(gameplayActions.doOpenCard());
  };

  const handleDrawMoreCard = () => {
    dispatch(gameplayActions.doDrawMoreCard());
  };

  const handleInitGame = () => {
    dispatch(gameplayActions.doInitGame());
  };

  const gameButton = (
    <>
      <div className="scopicui-mb-2">
        <Button
          disabled={loadingStatus.drawCard === 'loading'}
          onClick={handleOpenCardClick}
          className="scopic-pagehome-button-content"
          type="primary"
          block
          shape="round"
          size="large">
          Open Card
        </Button>
      </div>
      <div>
        <Button
          loading={loadingStatus.drawCard === 'loading'}
          onClick={handleDrawMoreCard}
          className="scopic-pagehome-button-content"
          type="default"
          block
          shape="round"
          size="large">
          Draw Again
        </Button>
      </div>
    </>
  );

  const initButton = (
    <Button
      loading={loadingStatus.initGame === 'loading'}
      onClick={handleInitGame}
      className="scopic-pagehome-button-content"
      type="primary"
      block
      shape="round"
      size="large">
      New Game
    </Button>
  );

  return <div className="scopic-pagehome-button-container">{status === 'new' || status === 'finish' ? initButton : gameButton}</div>;
};

export default PageHomeButtonSection;
