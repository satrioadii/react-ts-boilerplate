import { combineReducers } from 'redux';
import GameplayReducer from 'reducers/gameplay.reducer';
import UserReducer from './user.reducer';

const rootReducer = combineReducers({
  user: UserReducer,
  gameplay: GameplayReducer,
});

export default rootReducer;

export interface ReducerActionInterface {
  type: string;
  payload: any;
}
