import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/shared/user/api.service';
import { Router } from '@angular/router';
import { UserState } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class RegistartionComponent implements OnInit {
  title: string = 'Registration';
  userRegistration!: (args: UserState) => void;
  saveUser!: (args: UserState) => void;

  constructor(
    private api: ApiUserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userRegistration = (data: UserState) => {
      this.api.apiRegisterUser(data).subscribe(
        () => {
          this.router.navigate(['login']);
        },
        (err: any) => {
          this._snackBar.open(err.error, 'Undo', {
            duration: 4000,
          });
        }
      );
    };
  }
}
