import { Component, OnInit, Input } from '@angular/core';
import { UserState } from 'src/app/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() userInputValue!: (data: UserState) => void;

  @Input() title!: string;
  inputValue!: () => void;

  hide = true;
  email: string = '';
  password: string = '';
  data!: UserState;

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
