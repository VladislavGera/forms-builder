import { createReducer, on } from '@ngrx/store';
import { updateForm, refreshForm, updateFormBorder } from './form.action';
import { initialState } from './form.state';

const _formReducer = createReducer(
  initialState,
  on(updateForm, (state, action) => {
    return {
      ...state,
      form: { ...action.form },
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


