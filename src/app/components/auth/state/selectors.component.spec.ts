import * as fromSelectors from './auth.selectors';
import { AuthUser } from 'src/models/auth.model';
import { SetUser } from 'src/models/user.model';

describe('Selectors Auth', () => {
  it('should select the favorite shows', () => {
    const user: SetUser = {
      email: 'vheranin@gmail.com',
      id: '1',
    };

    const initialState: AuthUser = {
      isAuth: true,
      user,
    };

    const result = fromSelectors.getUser.projector(initialState);
    expect(result).toEqual(initialState);
  });
});
