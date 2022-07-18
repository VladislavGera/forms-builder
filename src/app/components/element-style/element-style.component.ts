import { Component, OnInit, Input } from '@angular/core';

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
  placeholder: String = '';
  width: String = '';
  height: String = '';
  fontSize: String = '';
  fontWidth: String = '';
  iborderColornputType: String = '';
  backGroundColor: String = '#831111';
  borderWidth: String = '';
  borderType: String = '';
  borderColor: String = '#831111';

  constructor() {}

  ngOnInit(): void {
    this.getElementStyle = () => {
      const data = {
        width: this.width,
        height: this.height,
        fontSize: this.fontSize,
        fontWidth: this.fontWidth,
        // inputType: this.inputType,
        placeholder: this.placeholder,
        backGroundColor: this.backGroundColor,
      };
      this.setBorderElements(data);
      (this.width = ''),
        (this.height = ''),
        (this.fontSize = ''),
        (this.fontWidth = ''),
        // (this.inputType = ''),
        (this.placeholder = ''),
        (this.backGroundColor = '#000000');
    };

    this.getBorderStyle = () => {
      const data = {
        borderType: this.borderType,
        borderWidth: this.borderWidth,
        borderColor: this.borderColor,
      };
      this.setBorderElements(data);
      (this.borderType = ''),
        (this.borderWidth = ''),
        (this.borderColor = '#000000');
    };
  }
}
