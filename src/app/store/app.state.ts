import { User } from '../components/auth/state/auth.state';
import { userReducer } from '../components/auth/state/auth.reducer';

export interface AppState {
  user: User;
}

export const appReducer = {
  user: userReducer,
};
