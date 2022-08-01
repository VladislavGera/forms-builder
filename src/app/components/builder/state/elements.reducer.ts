import { createReducer, on } from '@ngrx/store';
import {
  postElement,
  updateElement,
  deleteElement,
  deleteOption,
  updateOption,
  getOptionbyId,
  setEelementId,
  deleteOptions,
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

    console.log(elementSetting, id);

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
  }),
  on(updateOption, (state: any, action: any) => {
    let elementSetting = { values: JSON.stringify(action.option.values) };

    let elements = state.elements.map((item: any) => {
      return item.id === state.elementId
        ? { ...item, ...elementSetting }
        : item;
    });

    return {
      ...state,
      elements,
    };
  }),
  on(deleteOption, (state: any, action: any) => {
    let value = action.option.values.filter((value: any) => {
      return value.id !== action.option.id;
    });

    let elementSetting = { values: JSON.stringify(value) };

    let elements = state.elements.map((item: any) => {
      return item.id === action.option.elementId
        ? { ...item, ...elementSetting }
        : item;
    });

    return {
      ...state,
      elements,
    };
  }),
  on(deleteOptions, (state, action) => {
    let options = state.options.filter((item: any) => {
      return item.elementId !== action.elementId;
    });

    return {
      ...state,
      options,
    };
  }),
  on(getOptionbyId, (state: any, action) => {
    return {
      ...state,
    };
  }),
  on(setEelementId, (state: any, action) => {
    return {
      ...state,
      elementId: action.elementId,
    };
  })
);

export function elementsReducer(state: any, action: any) {
  return _elementsReducer(state, action);
}
