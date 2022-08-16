import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getForm } from './state/form.selectors';
import { updateForm } from './state/form.action';
import { FormStyle } from 'src/models/form.model';

@Component({
  selector: 'app-form-style',
  templateUrl: './form-style.component.html',
  styleUrls: ['../builder/builder.component.css'],
})
export class FormStyleComponent implements OnInit {
  width!: Number;
  height!: Number;
  background!: String;
  borderWidth!: Number;
  borderType!: String;
  borderColor!: String;

  constructor(private store: Store<AppState>) {}

  getFormStyle = () => {
    const form: FormStyle = {
      width: this.width,
      height: this.height,
      background: this.background,
      borderWidth: this.borderWidth,
      borderType: this.borderType,
      borderColor: this.borderColor,
    };

    this.store.dispatch(updateForm({ form }));
  };

  ngOnInit(): void {
    this.store.select(getForm).subscribe((form: FormStyle) => {
      this.width = form.width;
      this.height = form.height;
      this.background = form.background;
      this.borderWidth = form.borderWidth;
      this.borderType = form.borderType;
      this.borderColor = form.borderColor;
    });
  }
}
