import { createAction, props } from '@ngrx/store';

export const postElement = createAction(
  'postElement',
  props<{ element: any }>()
);
export const deleteElement = createAction('deleteElement');
export const logOutElements = createAction('logOutElements');
export const showResult = createAction('logOutshowResultElements');
export const updateElement = createAction(
  'updateElement',
  props<{ element: any }>()
);
export const deleteOption = createAction(
  'deleteOption',
  props<{ option: any }>()
);
export const updateOption = createAction(
  'updateOption',
  props<{ option: any }>()
);
export const postOption = createAction('postOption', props<{ option: any }>());
export const setEelementId = createAction(
  'setEelementId',
  props<{ elementId: any }>()
);
