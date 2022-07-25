import { userReducer } from '../components/auth/state/auth.reducer';
import { formReducer } from '../components/form-style/state/form.reducer';
import { elementsReducer } from '../components/builder/state/elements.reducer';
import { elementReducer } from '../components/element-style/state/element.reducer';
import { AuthUser } from '../models/auth.model';

export interface AppState {
  user: AuthUser;
  form: any;
  elements: any;
  element: any;
}

export const appReducer = {
  user: userReducer,
  form: formReducer,
  elements: elementsReducer,
  element: elementReducer,
};
