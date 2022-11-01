import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { inputValueState } from '../models/input.model';
import { AuthUser } from 'src/models/auth.model';
import { Observable, Subscription } from 'rxjs';
import { getUser } from '../app/components/auth/state/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user$!: Observable<inputValueState>;
  auth!: AuthUser;
  getUserSubscription!: Subscription;

  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.getUserSubscription = this.store.select(getUser).subscribe((auth) => {
      this.auth = auth;
    });

    if (this.auth.isAuth) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }

  ngOnDestroy() {
    this.getUserSubscription.unsubscribe();
  }
}
