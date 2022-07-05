import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
