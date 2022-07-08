import { Component, OnInit, Input } from '@angular/core';
import { inputValueState } from 'src/app/models/input.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() userInputValue!: (data: inputValueState) => void;

  @Input() title!: string;
  inputValue!: () => void;

  hide = true;
  email: string = '';
  password: string = '';
  data!: inputValueState;

  getValue = () => {
    this.data = { email: this.email, password: this.password };

    this.userInputValue(this.data);
  };

  ngOnInit() {
    this.inputValue = () => {
      this.getValue();
      this.email = '';
      this.password = '';
    };
  }
}
