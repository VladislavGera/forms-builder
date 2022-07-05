import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logOutUser } from '../auth/state/auth.action';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  inputValue: string = '';

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  logOut = () => {
    this.store.dispatch(logOutUser());
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  };

  ngOnInit(): void {}
}
