import GameplayActions from 'actions/gameplay.action';
import userActions from 'actions/user.action';

export { GameplayActions, userActions };

export interface ThunkPropsInterface {
  dispatch: any;
  getState: Function;
}
