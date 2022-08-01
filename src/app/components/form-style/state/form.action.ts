import { createAction, props } from '@ngrx/store';

export const updateForm = createAction('updateForm', props<{ form: any }>());
export const updateFormBorder = createAction('updateFormBorder', props<{ data: any }>());
export const refreshForm = createAction('refreshForm');