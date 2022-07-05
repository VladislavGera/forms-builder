import { createReducer, on } from '@ngrx/store';
import {logOutUser, setUser } from './auth.action';
import { initialState } from './auth.state';

const _userReducer = createReducer(
  initialState,
  on(setUser, (state, action) => {
    let user = action.user;

    return {
      ...state,
      user,
    };
  }),
  on(logOutUser, (state) => {

    return {
      ...state,
      user: {},
    };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
