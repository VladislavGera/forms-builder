import { createReducer, on } from '@ngrx/store';
import {
  setElement
} from './element.action';
import { initialState } from './element.state';

const _elementsReducer = createReducer(
  initialState,
  on(setElement, (state, action) => {
    return {
      ...state,
      element: { ...action.element },
    };
  })
);

export function elementReducer(state: any, action: any) {
  return _elementsReducer(state, action);
}
