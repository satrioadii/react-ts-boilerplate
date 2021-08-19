import GameplayActions from 'actions/gameplay.action';
import { ReducerActionInterface } from 'reducers';

const initState = {
  turn: 'player',
  deckId: '',
  status: 'new',
  remaining: 0,
  winner: '',
  player: {
    score: 0,
    currentCard: 0,
  },
  opponent: {
    score: 0,
    currentCard: 0,
  },
  loadingStatus: {
    initGame: 'idle',
    drawCard: 'idle',
  },
};

const gameplayAction = new GameplayActions();
const GameplayReducer = (state = initState, action: ReducerActionInterface) => {
  const { payload, type } = action;
  switch (type) {
    case gameplayAction.types.SETSTATE:
      return {
        ...state,
        ...payload,
      };
    case gameplayAction.types.PLAYERTURN:
      return {
        ...state,
        turn: 'player',
      };
    case gameplayAction.types.OPPONENTTURN:
      return {
        ...state,
        turn: 'opponent',
      };
    case gameplayAction.types.SETLOADING:
      return {
        ...state,
        loadingStatus: {
          ...state.loadingStatus,
          ...payload,
        },
      };
    default:
      return state;
  }
};

export default GameplayReducer;
