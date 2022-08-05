import { createAction, props } from '@ngrx/store';
import { FormStyle } from 'src/models/form.model';

export const updateForm = createAction('updateForm', props<{ form: FormStyle }>());
export const logOutForm = createAction('logOutForm');