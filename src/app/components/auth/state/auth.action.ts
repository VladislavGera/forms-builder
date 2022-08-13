import { createAction, props } from '@ngrx/store';
import { SetUser } from 'src/models/user.model';

export const logOutUser = createAction('logOut');
export const authUser = createAction('authUser', props<{ user: SetUser }>());