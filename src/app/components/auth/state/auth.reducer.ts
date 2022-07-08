import { createReducer, on } from '@ngrx/store';
import { logOutUser, authUser } from './auth.action';
import { initialState } from './auth.state';

const _userReducer = createReducer(
  initialState,
  on(authUser, (state, action) => {
    console.log("work")
    return {
      ...state,
      user: action.user,
      isAuth: true,
    };
  }),
  on(logOutUser, (state) => {
    console.log("logIn");
    return {
      ...state,
      user: {},
      isAuth: false,
    };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
