import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logOutUser } from '../auth/state/auth.action';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
import { logOutForm } from '../form-style/state/form.action';
import { logOutElements } from '../builder/state/elements.action';
import { getUser } from '../auth/state/auth.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  email!: String;
  getUserSubscription!: Subscription;

  constructor(private store: Store<AppState>, private router: Router) {}

  logOut = () => {
    localStorage.removeItem('user');
    this.store.dispatch(logOutUser());
    this.store.dispatch(logOutForm());
    this.store.dispatch(logOutElements());
    this.router.navigate(['login']);
  };

  ngOnInit(): void {
    this.getUserSubscription = this.store.select(getUser).subscribe((res) => {
      this.email = res.user.email;
    });
  }

  ngOnDestroy() {
    this.getUserSubscription.unsubscribe();
  }
}
