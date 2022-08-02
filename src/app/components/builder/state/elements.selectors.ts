import { createFeatureSelector, createSelector } from '@ngrx/store';

const getElementsState = createFeatureSelector<any>('elements');

export const getElements = createSelector(getElementsState, (state) => {
  return state.elements;
});

export const getElementById = createSelector(getElementsState, (state) => {
  let element = state.elements.filter((item: any) => {
    return item.id === state.elementId;
  });

  return element[0];
});

export const getElementStatus = createSelector(getElementsState, (state) => {
  return state.elementIsActive;
});
