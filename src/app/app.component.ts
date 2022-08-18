import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { ApiUserService } from './shared/api.service';
import { authUser } from './components/auth/state/auth.action';
import { SetUser } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user!: SetUser;
  localStorageStringData: any = localStorage.getItem('user');

  constructor(
    private store: Store<AppState>,
    private api: ApiUserService,
    private router: Router
  ) {}

  checkUserAuth(user: SetUser) {
    this.store.dispatch(authUser({ user }));
  }

  authUser = () => {
    if (!!JSON.parse(this.localStorageStringData)) {
      this.api.authUser().subscribe((user) => {
        this.user = {
          email: user.eamil,
          id: user.id,
        };

        this.checkUserAuth(user);

        this.router.navigate(['main']);
      });
    }
  };

  ngOnInit(): void {
    this.authUser();
  }
}
