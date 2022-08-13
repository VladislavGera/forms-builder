import { ElementStyle } from './element.model';

export interface ElementsState {
  elements: Array<ElementStyle>;
  elementId: string;
  elementIsActive: boolean;
}
