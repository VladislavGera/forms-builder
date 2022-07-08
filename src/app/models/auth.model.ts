import { SetUser } from './user.model';

export interface AuthUser {
  isAuth?: Boolean;
  user: SetUser;
}
