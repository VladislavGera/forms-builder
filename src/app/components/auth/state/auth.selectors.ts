import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from './auth.state';

const getUserState = createFeatureSelector<User>('user');

export const getUser = createSelector(getUserState, (state) => {
  return state.user;
});