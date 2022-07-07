import { createAction, props } from '@ngrx/store';

export const logOutUser = createAction('logOut');
export const authUser = createAction('authUser', props<{ email: any }>());
