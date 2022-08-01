import { createAction, props } from '@ngrx/store';

export const postElement = createAction(
  'postElement',
  props<{ element: any }>()
);
export const deleteElement = createAction(
  'deleteElement',
  props<{ id: any }>()
);
export const updateElement = createAction(
  'updateElement',
  props<{ data: any }>()
);

export const deleteOption = createAction(
  'deleteOption',
  props<{ option: any }>()
);
export const updateOption = createAction(
  'updateOption',
  props<{ option: any }>()
);
export const getOptionbyId = createAction(
  'getOptionbyId',
  props<{ elementId: any }>()
);
export const setEelementId = createAction(
  'setEelementId',
  props<{ elementId: any }>()
);
export const deleteOptions = createAction(
  'deleteOptions',
  props<{ elementId: any }>()
);