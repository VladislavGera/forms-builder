import { updateForm, logOutForm } from './form.action';
import * as Reducer from './form.reducer';
import { FormStyle } from 'src/models/form.model';

describe('Form set style reducer', () => {
  describe('updateForm action', () => {
    it('should update the style form', () => {
      const form: FormStyle = {
        background: '#F2F2F2',
        width: 500,
        height: 50,
        borderWidth: 2,
        borderColor: '#C1C1C1 ',
        borderType: 'solid',
      };

      const action = updateForm({ form });
      const state = Reducer.formReducer(form, action);
      expect(state.form).toEqual(form);
    });
  });
  describe('logOutForm action', () => {
    it('should logOut form style the state user log out', () => {
        const form: FormStyle = {
            background: '#F2F2F2',
            width: 500,
            height: 50,
            borderWidth: 2,
            borderColor: '#C1C1C1 ',
            borderType: 'solid',
          };
    
          const action = logOutForm();
          const state = Reducer.formReducer(form, action);
          expect(state.form).toEqual(form);
    });
  });
});
