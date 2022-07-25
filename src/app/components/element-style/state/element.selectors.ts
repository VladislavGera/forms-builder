import { createFeatureSelector, createSelector } from '@ngrx/store';

const getElementState = createFeatureSelector<any>('element');

export const getElement = createSelector(getElementState, (state) => {
  return state;
});
