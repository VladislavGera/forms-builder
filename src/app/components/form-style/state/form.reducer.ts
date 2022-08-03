import { createReducer, on } from '@ngrx/store';
import { updateForm, logOutForm } from './form.action';
import { initialState } from './form.state';
import { FormStyle } from 'src/app/models/form.model';
import { Form } from './form.state';

const _formReducer = createReducer(
  initialState,
  on(updateForm, (state , action: Form) => {
    let form: FormStyle = { ...action.form };

    return {
      ...state,
      form,
    };
  }),
  on(logOutForm, (state) => {
    let form: FormStyle = {
      background: '#F2F2F2',
      width: 500,
      height: 50,
      borderWidth: 2,
      borderColor: '#C1C1C1 ',
      borderType: 'solid',
    };

    return {
      ...state,
      form,
    };
  })
);

export function formReducer(state: any, action: any) {
  return _formReducer(state, action);
}
