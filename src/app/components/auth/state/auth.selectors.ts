import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthUser } from 'src/app/models/auth.model';

const getUserState = createFeatureSelector<AuthUser>('user');

export const getUser = createSelector(getUserState, (state) => {
  return state;
});