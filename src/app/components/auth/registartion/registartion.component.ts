import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/shared/user/api.service';
import { Router } from '@angular/router';
import { inputValueState } from 'src/app/models/input.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class RegistartionComponent implements OnInit {
  title: string = 'Registration';
  userRegistration!: (args: inputValueState) => void;
  saveUser!: (args: inputValueState) => void;
  showAlert!: (args: any) => void;

  constructor(
    private api: ApiUserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.showAlert = (message) => {
      this._snackBar.open(message, 'Undo', {
        duration: 4000,
      });
    };

    this.userRegistration = (data: inputValueState) => {
      this.api.apiRegisterUser(data).subscribe(
        (res) => {
          this.showAlert(res.message);
          this.router.navigate(['login']);
        },
        (err: any) => {
          this.showAlert(err.error.message);
        }
      );
    };
  }
}
