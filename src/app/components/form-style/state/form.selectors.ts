import { createFeatureSelector, createSelector } from '@ngrx/store';

const getFormState = createFeatureSelector<any>('form');

export const getForm = createSelector(getFormState, (state) => {
  return state;
});