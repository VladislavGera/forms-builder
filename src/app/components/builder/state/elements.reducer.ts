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
  showResult,
} from './elements.action';
import { initialState } from './elements.state';
import { ElementStyle } from 'src/models/element.model';
import { Option } from 'src/models/option.model';

const _elementsReducer = createReducer(
  initialState,
  on(postElement, (state: any, action: any) => {
    return {
      ...state,
      elements: [...state.elements, action.element],
    };
  }),
  on(updateElement, (state: any, action) => {
    let elements = state.elements.map((item: ElementStyle) => {
      return item.id === state.elementId
        ? { ...item, ...action.element }
        : item;
    });

    return {
      ...state,
      elements,
    };
  }),
  on(deleteElement, (state: any) => {
    let elements: Array<ElementStyle> = state.elements.filter(
      (item: ElementStyle) => {
        return item.id !== state.elementId;
      }
    );

    return {
      ...state,
      elementIsActive: false,
      elements,
    };
  }),
  on(updateOption, (state: any, action: any) => {
    let elementSetting = { options: JSON.stringify(action.option.options) };

    let elements = state.elements.map((item: ElementStyle) => {
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
    const newOption: Option = {
      value: 'option',
      id: action.option.id,
      elementId: state.elementId,
    };

    const elementSetting = JSON.stringify([
      ...action.option.options,
      newOption,
    ]);

    let elements = state.elements.map((item: Option) => {
      return item.id === state.elementId
        ? { ...item, options: elementSetting }
        : item;
    });

    return {
      ...state,
      elements,
    };
  }),
  on(deleteOption, (state: any, action: any) => {
    let value = action.option.options.filter((item: Option) => {
      return item.id !== action.option.id;
    });

    let elementSetting = { options: JSON.stringify(value) };

    let elements = state.elements.map((item: Option) => {
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
  on(logOutElements, (state: any) => {
    return {
      ...state,
      elements: [],
      elementId: '',
      elementIsActive: false,
    };
  }),
  on(showResult, (state: any) => {
    return {
      ...state,
      elementIsActive: false,
    };
  })
);

export function elementsReducer(state: any, action: any) {
  return _elementsReducer(state, action);
}
