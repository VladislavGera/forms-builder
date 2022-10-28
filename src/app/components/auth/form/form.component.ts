import { Component, Input } from '@angular/core';
import { inputValueState } from 'src/models/input.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  @Input() userInputValue!: (data: any) => void;
  @Input() title!: string;

  hide = true;
  data!: inputValueState;

  getValue() {
    this.userInputValue(this.userForm.value);
    this.userForm.reset();
  }
}
