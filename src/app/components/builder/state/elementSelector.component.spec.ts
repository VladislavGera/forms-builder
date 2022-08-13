import * as elementSelector from './elements.selectors';
import { ElementStyle } from 'src/models/element.model';

describe('Selectors Element', () => {
  it('should select elements', () => {
    const initialState = {
      elements: [],
      elementId: '1',
      elementIsActive: false,
    };

    const result = elementSelector.getElements.projector(initialState);

    expect(result).toEqual(initialState.elements);
  });

  it('should select current element', () => {
    const initialState = {
      elements: [
        {
          content: 'text',
          position: 'center',
          textColor: '#6E6E6E',
          type: 'text',
          width: 100,
          height: 20,
          fontSize: 20,
          fontWeight: 'lighter',
          options: '[]',
          id: '1',
        },
      ],
      elementId: '1',
      elementIsActive: true,
    };

    const result: ElementStyle =
      elementSelector.getElementById.projector(initialState);

    expect(result.id).toEqual('1');
  });

  it('should select element status', () => {
    const initialState = {
      elements: [],
      elementId: '1',
      elementIsActive: false,
    };

    const result = elementSelector.getElementStatus.projector(initialState);

    expect(result).toEqual(false);
  });
});
