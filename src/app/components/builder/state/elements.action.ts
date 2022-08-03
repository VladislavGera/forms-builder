import { createAction, props } from '@ngrx/store';
import { ElementStyle } from 'src/app/models/element.model';
import { OptionRequest } from 'src/app/models/optionRequest.model';


export const postElement = createAction(
  'postElement',
  props<{ element: ElementStyle }>()
);
export const deleteElement = createAction('deleteElement');
export const logOutElements = createAction('logOutElements');
export const showResult = createAction('logOutshowResultElements');
export const updateElement = createAction(
  'updateElement',
  props<{ element: ElementStyle }>()
);
export const deleteOption = createAction(
  'deleteOption',
  props<{ option: OptionRequest }>()
);
export const updateOption = createAction(
  'updateOption',
  props<{ option: OptionRequest }>()
);
export const postOption = createAction('postOption', props<{ option: OptionRequest }>());
export const setEelementId = createAction(
  'setEelementId',
  props<{ elementId: string }>()
);
