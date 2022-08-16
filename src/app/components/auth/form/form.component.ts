import { Component, OnInit, Input } from '@angular/core';
import { inputValueState } from 'src/models/input.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() userInputValue!: (data: inputValueState) => void;
  @Input() title!: string;

  hide = true;
  email: string = '';
  password: string = '';
  data!: inputValueState;

  getValue() {
    this.data = { email: this.email, password: this.password };
    this.userInputValue(this.data);
    this.email = '';
    this.password = '';
  }
}
