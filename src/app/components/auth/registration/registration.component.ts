import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inputValueState } from 'src/models/input.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiUserService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class RegistrationComponent {
  title: string = 'Registration';
  saveUser!: (args: inputValueState) => void;

  constructor(
    private api: ApiUserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  showAlert(message: string) {
    this._snackBar.open(message, 'Undo', {
      duration: 4000,
    });
  }

  userRegistration = (data: inputValueState) => {
    this.api.apiRegisterUser(data).subscribe(
      (res) => {
        this.showAlert(res.message);
        this.router.navigate(['']);
      },
      (err: any) => {
        this.showAlert(err.error.message);
      }
    );
  };
}
