import * as Reducer from './elements.reducer';
import {
  postElement,
  updateElement,
  deleteElement,
  deleteOption,
  updateOption,
  postOption,
  setEelementId,
  logOutElements,
  showResult,
} from './elements.action';
import { ElementStyle } from 'src/models/element.model';
import { OptionRequest } from 'src/models/optionRequest.model';
import { ElementsState } from 'src/models/elements.model';

describe('Form set style reducer', () => {
  describe('postElement action', () => {
    // postElement
    it('should postElement', () => {
      const element: ElementStyle = {
        label: 'text',
        width: 40,
        height: 20,
        content: 'contetnt',
        fontSize: 20,
        fontWeight: 'bold',
        background: 'red',
        position: 'center',
        textColor: 'red',
        lableColor: 'green',
        borderWidth: 2,
        borderColor: 'red',
        borderType: 'solid',
        requared: false,
        type: 'text',
        id: '1',
      };

      const initialState = {
        elements: [],
        elementId: '1',
        elementIsActive: true,
      };

      const action = postElement({ element });
      const state = Reducer.elementsReducer(initialState, action);
      expect(state.elements.length).toEqual(1);
    });
  });
  describe('updateElement action', () => {
    // updateElement
    it('should update element', () => {
      const element: any = {
        lableColor: 'red',
      };

      let elements: Array<ElementStyle> = [
        {
          label: 'text',
          width: 40,
          height: 20,
          content: 'contetnt',
          fontSize: 20,
          fontWeight: 'bold',
          background: 'red',
          position: 'center',
          textColor: 'red',
          lableColor: 'green',
          borderWidth: 2,
          borderColor: 'red',
          borderType: 'solid',
          requared: false,
          type: 'text',
          id: '1',
        },
      ];

      const initialState: ElementsState = {
        elements,
        elementId: '1',
        elementIsActive: true,
      };

      const action = updateElement({ element });
      const state = Reducer.elementsReducer(initialState, action);

      expect(state.elements[0].lableColor).toEqual('red');
    });
  });
  describe('deleteElement action', () => {
    // deleteElement
    it('should delete element', () => {
      const initialState = {
        elements: [
          {
            label: 'text',
            width: 40,
            height: 20,
            content: 'contetnt',
            fontSize: 20,
            fontWeight: 'bold',
            background: 'red',
            position: 'center',
            textColor: 'red',
            lableColor: 'green',
            borderWidth: 2,
            borderColor: 'red',
            borderType: 'solid',
            requared: false,
            type: 'text',
            id: '1',
          },
        ],
        elementId: '1',
        elementIsActive: true,
      };

      const action = deleteElement();
      const state = Reducer.elementsReducer(initialState, action);
      expect(state.elements.length).toEqual(0);
    });
  });
  describe('showResult action', () => {
    // showResult
    it('should show result', () => {
      const initialState = {
        elements: [],
        elementId: '1',
        elementIsActive: true,
      };

      const action = showResult();
      const state = Reducer.elementsReducer(initialState, action);
      expect(state.elementIsActive).toEqual(false);
    });
  });
  describe('logOutElements action', () => {
    // logOutElements
    it('should logout style element', () => {
      const initialState = {
        elements: [
          {
            label: 'text',
            width: 40,
            height: 20,
            content: 'contetnt',
            fontSize: 20,
            fontWeight: 'bold',
            background: 'red',
            position: 'center',
            textColor: 'red',
            lableColor: 'green',
            borderWidth: 2,
            borderColor: 'red',
            borderType: 'solid',
            requared: false,
            type: 'text',
            id: '1',
          },
        ],
        elementId: '1',
        elementIsActive: true,
      };

      const action = logOutElements();
      const state = Reducer.elementsReducer(initialState, action);
      expect(state.elementIsActive).toEqual(false);
    });
  });
  describe('setEelementId action', () => {
    // setEelementId
    it('should set current element ID', () => {
      const initialState = {
        elements: [],
        elementId: '1',
        elementIsActive: true,
      };

      const action = setEelementId({ elementId: '2' });
      const state = Reducer.elementsReducer(initialState, action);
      expect(state.elementId).toEqual('2');
    });
  });
  describe('postOption action', () => {
    // postOption
    it('should post option ', () => {
      const option: OptionRequest = {
        id: '1',
        options: [],
      };

      const elements: Array<ElementStyle> = [
        {
          label: 'select',
          width: 40,
          height: 20,
          content: 'contetnt',
          fontSize: 20,
          fontWeight: 'bold',
          background: 'red',
          position: 'center',
          textColor: 'red',
          lableColor: 'green',
          borderWidth: 2,
          borderColor: 'red',
          borderType: 'solid',
          requared: false,
          options: '[]',
          type: 'select',
          id: '1',
        },
      ];

      const initialState: ElementsState = {
        elements,
        elementId: '1',
        elementIsActive: true,
      };

      const action = postOption({ option });
      const state = Reducer.elementsReducer(initialState, action);

      expect(state.elements[0].options).toEqual(
        '[{"value":"option","id":"1","elementId":"1"}]'
      );
    });
  });
  describe('deleteOption action', () => {
    // deleteOption
    it('should delete option', () => {
      const option: OptionRequest = {
        id: '1',
        options: [
          { value: 'option', id: '1', elementId: '1' },
          { value: 'option', id: '2', elementId: '1' },
        ],
      };

      const elements: Array<ElementStyle> = [
        {
          label: 'select',
          width: 40,
          height: 20,
          content: 'contetnt',
          fontSize: 20,
          fontWeight: 'bold',
          background: 'red',
          position: 'center',
          textColor: 'red',
          lableColor: 'green',
          borderWidth: 2,
          borderColor: 'red',
          borderType: 'solid',
          requared: false,
          options:
            '[{"value":"option","id":"1","elementId":"1"},{"value":"option","id":"2","elementId":"1"}]',
          type: 'select',
          id: '1',
        },
      ];

      const initialState: ElementsState = {
        elements,
        elementId: '1',
        elementIsActive: true,
      };

      const action = deleteOption({ option });
      const state = Reducer.elementsReducer(initialState, action);

      expect(state.elements[0].options).toEqual(
        '[{"value":"option","id":"2","elementId":"1"}]'
      );
      expect(JSON.parse(state.elements[0].options).length).toEqual(1);
    });
  });
  describe('updateOption action', () => {
    // updateOption
    it('should update option', () => {
      const option: OptionRequest = {
        id: '2',
        options: [
          { value: 'option', id: '1', elementId: '1' },
          { value: 'update-option', id: '2', elementId: '1' },
        ],
      };

      const elements: Array<ElementStyle> = [
        {
          label: 'select',
          width: 40,
          height: 20,
          content: 'contetnt',
          fontSize: 20,
          fontWeight: 'bold',
          background: 'red',
          position: 'center',
          textColor: 'red',
          lableColor: 'green',
          borderWidth: 2,
          borderColor: 'red',
          borderType: 'solid',
          requared: false,
          options:
            '[{"value":"option","id":"1","elementId":"1"},{"value":"option","id":"2","elementId":"1"}]',
          type: 'select',
          id: '1',
        },
      ];

      const initialState: ElementsState = {
        elements,
        elementId: '1',
        elementIsActive: true,
      };

      const action = updateOption({ option });
      const state = Reducer.elementsReducer(initialState, action);

      expect(state.elements[0].options).toEqual(
        '[{"value":"option","id":"1","elementId":"1"},{"value":"update-option","id":"2","elementId":"1"}]'
      );
      expect(JSON.parse(state.elements[0].options).length).toEqual(2);
    });
  });
});
