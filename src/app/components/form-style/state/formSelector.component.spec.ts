import * as fromSelectors from './form.selectors';
import { FormStyle } from 'src/models/form.model';
import { Form } from './form.state';

describe('Selectors Auth', () => {
  it('should select the favorite shows', () => {
    const form: FormStyle = {
      background: '#F2F2F2',
      width: 500,
      height: 50,
      borderWidth: 2,
      borderColor: '#C1C1C1',
      borderType: 'solid',
    };

    const initialState: Form = {
      form,
    };

    const result = fromSelectors.getForm.projector(initialState);

    expect(result).toEqual(initialState.form);
  });
});
