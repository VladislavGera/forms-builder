import { createReducer, on } from '@ngrx/store';
import { updateForm, refreshForm, updateFormBorder } from './form.action';
import { initialState } from './form.state';

const _formReducer = createReducer(
  initialState,
  on(updateForm, (state, action) => {
    const data = action.data;
    let background = data.background;
    let height = data.height;
    let width = data.width;

    return {
      ...state,
      width,
      height,
      background,
    };
  }),
  on(updateFormBorder, (state, action) => {
    const data = action.data;

    let borderWidth = data.borderWidth;
    let borderColor = data.borderColor;
    let borderType = data.borderType;

    return {
      ...state,
      borderWidth,
      borderColor,
      borderType,
    };
  }),
  on(refreshForm, (state) => {
    return {
      ...state,
    };
  })
);

export function formReducer(state: any, action: any) {
  return _formReducer(state, action);
}


