import { ElementStyle } from './element.model';

export interface ElementsState {
  elements: ElementStyle[];
  elementId: string;
  elementIsActive: boolean;
}
