import { createAction, props } from '@ngrx/store';

export const setElement = createAction('setElement', props<{ element: any }>());