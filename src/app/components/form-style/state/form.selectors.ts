import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Form } from './form.state'

const getFormState = createFeatureSelector<Form>('form');

export const getForm = createSelector(getFormState, (state) => {
  return state.form;
});
