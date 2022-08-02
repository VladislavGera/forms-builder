import { createReducer, on } from '@ngrx/store';
import {
  postElement,
  updateElement,
  deleteElement,
  deleteOption,
  updateOption,
  postOption,
  setEelementId,
  logOutElements,
  showResult
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
    let elements = state.elements.map((item: any) => {
      return item.id === state.elementId
        ? { ...item, ...action.element }
        : item;
    });

    return {
      ...state,
      elements,
    };
  }),
  on(deleteElement, (state) => {
    let elements = state.elements.filter((item: any) => {
      return item.id !== state.elementId;
    });

    return {
      ...state,
      elementIsActive: false,
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
  on(postOption, (state: any, action: any) => {
    const newOption = {
      value: action.option.value,
      id: action.option.id,
      elementId: state.elementId,
    };

    const elementSetting = JSON.stringify([...action.option.values, newOption]);

    let elements = state.elements.map((item: any) => {
      return item.id === state.elementId
        ? { ...item, values: elementSetting }
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
      return item.id === state.elementId
        ? { ...item, ...elementSetting }
        : item;
    });

    return {
      ...state,
      elements,
    };
  }),
  on(setEelementId, (state: any, action) => {
    return {
      ...state,
      elementId: action.elementId,
      elementIsActive: true,
    };
  }),
  on(logOutElements, (state: any, action) => {
    return {
      ...state,
      elements: [],
      elementId: '',
      elementIsActive: false,
    };
  }),
  on(showResult, (state: any, action) => {
    return {
      ...state,
      elementIsActive: false,
    };
  })
);

export function elementsReducer(state: any, action: any) {
  return _elementsReducer(state, action);
}
