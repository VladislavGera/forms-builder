import { userReducer } from '../components/auth/state/auth.reducer';
import { AuthUser } from '../models/auth.model';

export interface AppState {
  user: AuthUser;
}

export const appReducer = {
  user: userReducer,
};
