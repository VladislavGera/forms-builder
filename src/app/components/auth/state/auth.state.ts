import { UserState } from '../../../models/user.model';

export interface User {
  user: UserState;
}

export const initialState = {
  user: {},
};