import { userReducer } from '../components/auth/state/auth.reducer';
import { formReducer } from '../components/form-style/state/form.reducer';
import { elementsReducer } from '../components/builder/state/elements.reducer';
import { AuthUser } from '../models/auth.model';
import { Form } from '../components/form-style/state/form.state'
import { ElementsState } from '../models/elements.model';

export interface AppState {
  user: AuthUser;
  form: Form;
  elements: ElementsState;
}

export const appReducer = {
  user: userReducer,
  form: formReducer,
  elements: elementsReducer,
};
