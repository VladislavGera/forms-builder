import { Component, OnInit, Input } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getForm } from './state/form.selectors';

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
  width!: String;
  height!: String;
  background!: String;
  borderWidth!: String;
  borderType!: String;
  borderColor!: String;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getForm).subscribe((form) => {
      this.width = form.width;
      this.height = form.height;
      this.background = form.background;
      this.borderWidth = form.borderWidth;
      this.borderType = form.borderType;
      this.borderColor = form.borderColor;
    });

    this.getFormStyle = () => {
      const data = {
        width: this.width,
        height: this.height,
        background: this.background,
      };
      this.setStyleForm(data);
    };

    this.getBorderStyle = () => {
      const data = {
        borderWidth: this.borderWidth,
        borderType: this.borderType,
        borderColor: this.borderColor,
      };
      this.setBorderForm(data);
    };
  }
}
