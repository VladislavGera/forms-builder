import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getElement } from './state/element.selectors';
import { v4 as uuidv4 } from 'uuid';
import { setOptions } from './state/element.action';
import { updateOption } from '../builder/state/elements.action';
import { deleteOption } from '../builder/state/elements.action';
import { getElementById } from '../builder/state/elements.selectors';

@Component({
  selector: 'app-element-style',
  templateUrl: './element-style.component.html',
  styleUrls: ['../builder/builder.component.css'],
})
export class ElementStyleComponent implements OnInit {
  @Input() setBorderElements: any;
  @Input() setStyleElements: any;
  @Input() elementId: any;
  options!: any;
  currentOptions: any;
  getBorderStyle!: any;
  getElementStyle!: any;
  label!: String;
  width!: String;
  height!: String;
  content!: String;
  fontSize!: String;
  fontWeight!: String;
  background!: String;
  position!: String;
  textColor!: String;
  lableColor!: String;
  borderWidth!: String;
  borderColor!: String;
  borderType!: String;
  requared!: Boolean;
  type!: String;

  postOption!: () => void;
  updateOption!: (id: string) => void;
  deleteOption!: (id: string) => void;
  optionsItems!: () => any[];
  setSelectOptions!: any;

  values!: any[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getElementById).subscribe((element) => {
      this.width = element.width;
      this.height = element.height;
      this.position = element.position;
      this.label = element.label;
      this.content = element.content;
      this.background = element.background;
      this.lableColor = element.lableColor;
      this.textColor = element.textColor;
      this.borderWidth = element.borderWidth;
      this.borderType = element.borderType;
      this.borderColor = element.borderColor;
      this.fontSize = element.fontSize;
      this.fontWeight = element.fontWeight;
      this.elementId = element.id;
      this.requared = element.requared;
      this.type = element.type;
      this.values = JSON.parse(element.values);
    });

    this.getElementStyle = () => {
      const data = {
        width: this.width,
        height: this.height,
        fontSize: this.fontSize,
        fontWeight: this.fontWeight,
        label: this.label,
        content: this.content,
        background: this.background,
        textColor: this.textColor,
        lableColor: this.lableColor,
        position: this.position,
        requared: this.requared,
      };

      this.setStyleElements(data);
    };

    this.getBorderStyle = () => {
      const data = {
        borderType: this.borderType,
        borderWidth: this.borderWidth,
        borderColor: this.borderColor,
      };
      this.setStyleElements(data);
    };

    this.deleteOption = (id: string) => {
      let option = {
        id,
        elementId: this.elementId,
        values: this.values,
      };

      this.store.dispatch(deleteOption({ option }));
    };

    this.updateOption = (item: any) => {
      let option = {
        id: item.id,
        values: this.values,
      };

      this.store.dispatch(updateOption({ option }));
    };

    this.postOption = () => {
      let newOption = {
        elementId: this.elementId,
        value: 'option',
        id: uuidv4(),
      };

      const optionsString = JSON.stringify([...this.values, newOption]);

      const option = {
        values: optionsString,
      };

      this.setStyleElements(option);
    };
  }
}
