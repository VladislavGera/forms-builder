import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-style',
  templateUrl: './form-style.component.html',
  styleUrls: ['../builder/builder.component.css'],
})
export class FormStyleComponent implements OnInit {
  @Input() setStyleForm: any;
  @Input() setBorderForm: any;
  getBorderStyle!: any;
  getFormStyle!: any;
  width: String = '';
  height: String = '';
  backGroundColor: String = '#000000';
  borderWidth: String = '';
  borderType: String = '';
  borderColor: String = '#000000';

  constructor() {}

  ngOnInit(): void {
    this.getFormStyle = () => {
      // add model style
      const data = {
        width: this.width,
        height: this.height,
        backGroundColor: this.backGroundColor,
      };
      this.setStyleForm(data);
      this.width = '';
      this.height = '';
      this.backGroundColor = '#000000';
    };

    this.getBorderStyle = () => {
      // add model style
      const data = {
        width: this.borderWidth,
        type: this.borderType,
        color: this.borderColor,
      };
      this.setBorderForm(data);
      this.borderWidth = '';
      this.borderType = '';
      this.borderColor = '#000000';
    };
  }
}
