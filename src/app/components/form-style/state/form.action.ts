import { createAction, props } from '@ngrx/store';

export const updateForm = createAction('updateForm', props<{ data: any }>());
export const updateFormBorder = createAction('updateFormBorder', props<{ data: any }>());
export const refreshForm = createAction('refreshForm');