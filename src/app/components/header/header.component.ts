import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { logOutUser } from '../auth/state/auth.action';
import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
import { getUser } from '../auth/state/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  inputValue: string = '';

  @Input() email!: String;

  constructor(private store: Store<AppState>, private router: Router) {}

  logOut = () => {
    localStorage.removeItem('user');
    this.store.dispatch(logOutUser());
    this.router.navigate(['login']);
  };

  ngOnInit(): void {}
}
