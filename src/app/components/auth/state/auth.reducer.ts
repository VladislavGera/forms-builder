import { createReducer, on, Action } from '@ngrx/store';
import { logOutUser, authUser } from './auth.action';
import { initialState } from './auth.state';

const _userReducer = createReducer(
  initialState,
  on(authUser, (state, action) => {
    return {
      ...state,
      user: action.user,
      isAuth: true,
    };
  }),
  on(logOutUser, (state) => {
    return {
      ...state,
      user: {},
      isAuth: false,
    };
  })
);

export function userReducer(state: any, action: Action) {
  return _userReducer(state, action);
}
