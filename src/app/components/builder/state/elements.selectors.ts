import { createFeatureSelector, createSelector } from '@ngrx/store';

const getElementsState = createFeatureSelector<any>('elements');

export const getElements = createSelector(getElementsState, (state) => {
  return state;
});
