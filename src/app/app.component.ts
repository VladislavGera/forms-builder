import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { ApiUserService } from './shared/user/api.service';
import { authUser } from './components/auth/state/auth.action';
// import { getUser } from './components/auth/state/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user!: any;
  constructor(private store: Store<AppState>, private api: ApiUserService) {}

  ngOnInit(): void {
    this.api.authUser().subscribe((user) => {
      this.store.dispatch(authUser({ email: user[0].email }));
    });

    // / to do - add more felds and implement this function on guard routing
    // this.store.select(getUser).subscribe((user) => {
    //   this.user = user;
    // });
  }
}
