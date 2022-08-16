import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiUserService } from 'src/app/shared/api.service';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
import { authUser } from '../state/auth.action';
import { Observable } from 'rxjs';
import { inputValueState } from 'src/models/input.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class LoginComponent {
  user$!: Observable<inputValueState>;
  title: string = 'Login';

  constructor(
    private store: Store<AppState>,
    private api: ApiUserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  showAlert(message: string): void {
    this._snackBar.open(message, 'Undo', {
      duration: 4000,
    });
  }

  userLogin = (data: inputValueState) => {
    this.api.apiLoginUser(data).subscribe(
      async (res) => {
        await this.store.dispatch(authUser({ user: res.user }));
        this.router.navigate(['main']);
        localStorage.setItem('user', JSON.stringify(res));
        this.showAlert(res.message);
      },
      (err: any) => {
        this.showAlert(err.error.message);
      }
    );
  };
}
