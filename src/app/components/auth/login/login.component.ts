import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiUserService } from 'src/app/shared/user/api.service';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
import { authUser } from '../state/auth.action';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class LoginComponent implements OnInit {
  userLogin!: (args: UserState) => void;
  setUser!: (args: UserState) => void;
  user$!: Observable<UserState>;
  title: string = 'Login';
  showAlert!: (args: any) => void;

  constructor(
    private store: Store<AppState>,
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
    this.userLogin = (data) => {
      this.api.apiLoginUser(data).subscribe(
        (user: any) => {
          this.store.dispatch(authUser({ email: user.email }));
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['home']);
        },
        (err: any) => {
          this.showAlert(err.error.message);
        }
      );
    };
  }
}
