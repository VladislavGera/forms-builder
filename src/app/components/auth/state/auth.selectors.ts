import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { User } from './auth.state';
// to do - create new model for auth user

const getUserState = createFeatureSelector<any>('user');

export const getUser = createSelector(getUserState, (state) => {
  // return state.user;
  return state
});