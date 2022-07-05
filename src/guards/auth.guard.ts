import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { ApiUserService } from '../../../app/src/app/shared/user/api.service';
import { Store } from '@ngrx/store';
import { UserState } from '../app/models/user.model';
import { Observable } from 'rxjs';
import { getUser } from '../app/components/auth/state/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, OnInit {
  user$!: Observable<UserState>;
  auth!: UserState | {};

  constructor(
    private store: Store<AppState>,
    private api: ApiUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth = this.store.select(getUser);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token: string | null = localStorage.getItem('token');

    if (!!token) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
