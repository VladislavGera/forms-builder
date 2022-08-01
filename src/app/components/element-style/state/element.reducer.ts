import { createReducer, on } from '@ngrx/store';
import { setElement, setOptions } from './element.action';
import { initialState } from './element.state';

const _elementsReducer = createReducer(
  initialState,
  on(setElement, (state, action) => {
    return {
      ...state,
      element: { ...action.element },
    };
  }),
  on(setOptions, (state, action) => {
    return {
      ...state,
      element: { ...state.element, values: action.option.values },
    };
  })
);

export function elementReducer(state: any, action: any) {
  return _elementsReducer(state, action);
}
