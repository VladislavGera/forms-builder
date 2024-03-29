import { FormStyle } from 'src/models/form.model';

export interface Form {
  form: FormStyle;
}

export const initialState: Form = {
  form: {
    background: '#F2F2F2',
    width: 500,
    height: 50,
    borderWidth: 2,
    borderColor: '#C1C1C1 ',
    borderType: 'solid',
  },
};
