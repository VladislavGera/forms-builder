import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ElementsState } from 'src/models/elements.model';
import { ElementStyle } from 'src/models/element.model';

const getElementsState = createFeatureSelector<ElementsState>('elements');

export const getElements = createSelector(getElementsState, (state) => {
  return state.elements;
});

export const getElementById = createSelector(getElementsState, (state) => {
  let element = state.elements.filter((item: ElementStyle) => {
    return item.id === state.elementId;
  });

  return element[0];
});

export const getElementStatus = createSelector(getElementsState, (state) => {
  return state.elementIsActive;
});
