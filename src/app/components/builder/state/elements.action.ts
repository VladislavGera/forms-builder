import { createAction, props } from '@ngrx/store';

export const postElement = createAction('postElement', props<{ element: any }>());
export const deleteElement = createAction('deleteElement', props<{ id: any }>());
export const updateElement = createAction('updateElement', props<{ data: any }>());