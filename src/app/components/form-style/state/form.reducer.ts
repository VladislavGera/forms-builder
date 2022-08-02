import { createReducer, on } from '@ngrx/store';
import { updateForm, logOutForm } from './form.action';
import { initialState } from './form.state';

const _formReducer = createReducer(
  initialState,
  on(updateForm, (state, action) => {
    return {
      ...state,
      form: { ...action.form },
    };
  }),
  on(logOutForm, (state) => {
    return {
      ...state,
      form: {
        background: '#F2F2F2',
        width: 500,
        height: 50,
        borderWidth: 2,
        borderColor: '#C1C1C1 ',
        borderType: 'solid',
      },
    };
  })
);

export function formReducer(state: any, action: any) {
  return _formReducer(state, action);
}
