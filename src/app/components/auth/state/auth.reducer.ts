import { createReducer, on } from '@ngrx/store';
import { logOutUser, authUser } from './auth.action';
import { initialState } from './auth.state';

const _userReducer = createReducer(
  initialState,
  on(authUser, (state, action) => {
    // add user model
    return {
      ...state,
      email: action.email,
    };
  }),
  on(logOutUser, (state) => {
    return {
      ...state,
      email: '',
    };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
