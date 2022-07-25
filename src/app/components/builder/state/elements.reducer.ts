import { createReducer, on } from '@ngrx/store';
import {
  postElement,
  updateElement,
  deleteElement
} from './elements.action';
import { initialState } from './elements.state';

const _elementsReducer = createReducer(
  initialState,
  on(postElement, (state: any, action: any) => {
    return {
      ...state,
      elements: [...state.elements, action.element],
    };
  }),
  on(updateElement, (state: any, action) => {
    let elementSetting = action.data.elementSetting;
    let id = action.data.id;

    let elements = state.elements.map((item: any) => {
      return item.id === id ? { ...item, ...elementSetting } : item;
    });

    return {
      ...state,
      elements,
    };
  }),
  on(deleteElement, (state, action) => {
    let elements = state.elements.filter((item: any) => {
      return item.id !== action.id;
    });

    return {
      ...state,
      elements,
    };
  })
);

export function elementsReducer(state: any, action: any) {
  return _elementsReducer(state, action);
}
