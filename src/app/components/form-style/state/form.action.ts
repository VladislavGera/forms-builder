import { createAction, props } from '@ngrx/store';

export const updateForm = createAction('updateForm', props<{ form: any }>());
export const logOutForm = createAction('logOutForm');