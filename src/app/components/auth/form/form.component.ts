import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() userInputValue!: (data: any) => void;

  @Input() title!: string;
  inputValue!: () => void;

  hide = true;
  email: string = '';
  password: string = '';

  getValue = () => {
    // add class input value data 
    let data = { email: this.email, password: this.password };

    this.userInputValue(data);
  };

  ngOnInit() {
    this.inputValue = () => {
      this.getValue();
      this.email = '';
      this.password = '';
    };
  }
}
