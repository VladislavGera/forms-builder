import { createAction, props } from '@ngrx/store';

export const logOutUser = createAction('logOut');
export const setUser = createAction('setUser', props<{ user: any }>());
