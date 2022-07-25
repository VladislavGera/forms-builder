import { Component, OnInit, Input } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getElement } from './state/element.selectors';

@Component({
  selector: 'app-element-style',
  templateUrl: './element-style.component.html',
  styleUrls: ['../builder/builder.component.css'],
})
export class ElementStyleComponent implements OnInit {
  @Input() setBorderElements: any;
  @Input() setStyleElements: any;
  getBorderStyle!: any;
  getElementStyle!: any;
  label!: String;
  width!: String;
  height!: String;
  content!: String;
  fontSize!: String;
  fontWidth!: String;
  background!: String;
  position!: String;
  textColor!: String;
  lableColor!: String;
  borderWidth!: String;
  borderType!: String;
  borderColor!: String;
  values!: any[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getElement).subscribe((res) => {
      this.width = res.element.width;
      this.height = res.element.height;
      this.position = res.element.position;
      this.label = res.element.label;
      this.content = res.element.content;
      this.background = res.element.background;
      this.lableColor = res.element.lableColor;
      this.textColor = res.element.textColor;
      this.borderWidth = res.element.borderWidth;
      this.borderType = res.element.borderType;
      this.borderColor = res.element.borderColor;
      this.fontSize = res.element.fontSize;
      this.fontWidth = res.element.fontWidth;
      this.values = res.element.values;
      console.log(this.background, this.lableColor, this.textColor, 'COLOR');
    });

    this.getElementStyle = () => {
      const data = {
        width: this.width,
        height: this.height,
        fontSize: this.fontSize,
        fontWidth: this.fontWidth,
        label: this.label,
        content: this.content,
        background: this.background,
        textColor: this.textColor,
        lableColor: this.lableColor,
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
  }
}
