import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { ApiUserService } from './shared/user/api.service';
import { authUser } from './components/auth/state/auth.action';
import { getUser } from './components/auth/state/auth.selectors';
import { SetUser } from './models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user!: SetUser;
  auth!: Boolean | undefined;
  email!: String
  constructor(
    private store: Store<AppState>,
    private api: ApiUserService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.store.select(getUser).subscribe((auth) => {
      this.auth = auth.isAuth;
      this.email = auth.user.email
    });

    this.api.authUser().subscribe(async (user) => {
      this.user = {
        email: user.eamil,
        id: user.id,
      };

      await this.store.dispatch(authUser({ user }));
      this.router.navigate(['']);
    });
  }
}
