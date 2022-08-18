import { initialState } from './auth.state';
import { logOutUser, authUser } from './auth.action';
import { SetUser } from 'src/models/user.model';
import * as fromReducer from './auth.reducer';

describe('Auth reducers', () => {
  describe('authUser action', () => {
    it('should state user auth', () => {
      let user: SetUser = {
        email: 'vheranin@gmail.com',
        id: '1',
      };

      const action = authUser({ user });
      const state = fromReducer.userReducer(initialState, action);
      expect(state.isAuth).toEqual(true);
      expect(state.user).toEqual(user);
    });
  });
  describe('logOutUser action', () => {
    it('should state user log out', () => {
      const action = logOutUser();
      const state = fromReducer.userReducer(initialState, action);
      expect(state.isAuth).toEqual(false);
      expect(state.user).toEqual({});
    });
  });
});
