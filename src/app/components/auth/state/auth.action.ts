import { createAction, props } from '@ngrx/store';
import { UserState } from '../../../models/user.model'

export const logOutUser = createAction('logOut');
export const setUser = createAction('setUser', props<{ user: UserState }>());
