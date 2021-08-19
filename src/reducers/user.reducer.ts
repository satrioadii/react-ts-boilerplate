import { userActions } from 'actions';
import { ReducerActionInterface } from 'reducers';

const initState = {
  user: {
    id: '',
    email: '',
    token: '',
  },
  userLoginState: 'idle',
};

const UserReducer = (state = initState, action: ReducerActionInterface) => {
  const { payload, type } = action;
  switch (type) {
    case userActions.SETSTATE:
      return {
        ...state,
        ...payload,
      };
    case userActions.LOGIN:
      return {
        ...state,
        user: payload,
      };
    case userActions.LOGOUT:
      return {
        ...state,
        user: initState.user,
        userLoginState: initState.userLoginState,
      };
    default:
      return state;
  }
};

export default UserReducer;
