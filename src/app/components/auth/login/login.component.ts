import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiUserService } from 'src/app/shared/user/api.service';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
import { setUser } from '../state/auth.action';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/models/user.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class LoginComponent implements OnInit {
  userLogin!: (args: any) => void;
  setUser!: (args: any) => void;
  user$!: Observable<UserState>;
  title: string = 'Login';

  constructor(
    private store: Store<AppState>,
    private api: ApiUserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userLogin = (data) => {
      this.api.apiLoginUser(data).subscribe((user) => {
        this.store.dispatch(setUser({ user }));
        localStorage.setItem('token', user.accessToken);
        this.router.navigate(['home']);
      });
    };
  }
}
