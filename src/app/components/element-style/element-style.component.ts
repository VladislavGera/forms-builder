import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { updateElement } from '../builder/state/elements.action';
import { updateOption } from '../builder/state/elements.action';
import { deleteOption } from '../builder/state/elements.action';
import { getElementById } from '../builder/state/elements.selectors';
import { postOption } from '../builder/state/elements.action';
import { getElementStatus } from '../builder/state/elements.selectors';
import { ElementStyle } from 'src/models/element.model';
import { Option } from 'src/models/option.model';
import { OptionRequest } from 'src/models/optionRequest.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-element-style',
  templateUrl: './element-style.component.html',
  styleUrls: ['../builder/builder.component.css'],
})
export class ElementStyleComponent implements OnInit, OnDestroy {
  label!: String;
  width!: Number;
  height!: Number;
  content!: String;
  fontSize!: Number;
  fontWeight!: String;
  background!: String;
  position!: String;
  textColor!: String;
  lableColor!: String;
  borderWidth!: Number;
  borderColor!: String;
  borderType!: String;
  requared!: Boolean;
  isActive!: Boolean;
  type!: String;

  elementStatusSubscription!: Subscription;
  elementByIdSubscription!: Subscription;

  options!: any[];

  constructor(private store: Store<AppState>) {}

  getElementStyle = () => {
    const element: ElementStyle = {
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
      borderWidth: this.borderWidth,
      borderType: this.borderType,
      borderColor: this.borderColor,
      type: this.type,
    };

    this.store.dispatch(updateElement({ element }));
  };

  deleteOption(id: string) {
    let option: OptionRequest = {
      id,
      options: this.options,
    };

    this.store.dispatch(deleteOption({ option }));
  }

  updateOption(item: Option) {
    let option: OptionRequest = {
      id: item.id,
      options: this.options,
    };

    this.store.dispatch(updateOption({ option }));
  }

  postOption() {
    let option: OptionRequest = {
      id: uuidv4(),
      options: this.options,
    };

    this.store.dispatch(postOption({ option }));
  }

  ngOnInit(): void {
    this.elementStatusSubscription = this.store
      .select(getElementStatus)
      .subscribe((isActive) => {
        this.isActive = isActive;
      });

    this.elementByIdSubscription = this.store
      .select(getElementById)
      .subscribe((element) => {
        if (this.isActive) {
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
          this.requared = element.requared;
          this.type = element.type;
          this.options = JSON.parse(element.options);
        }
      });
  }

  ngOnDestroy() {
    this.elementStatusSubscription.unsubscribe();
    this.elementByIdSubscription.unsubscribe();
  }
}
