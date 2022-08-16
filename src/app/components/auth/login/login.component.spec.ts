import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login.component';
import { inputValueState } from 'src/models/input.model';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.state';
import { authUser } from '../state/auth.action';
import { SetUser } from 'src/models/user.model';
import { Store } from '@ngrx/store';

describe('Login component testing', () => {
  let store: Store;
  let component: LoginComponent;
  let initialState: inputValueState = {
    email: 'vheranin@gmail.com',
    password: 'plkiu123',
  };

  let user: SetUser = {
    email: 'vheranin@gmail.com',
    id: '1',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
      ],
      providers: [LoginComponent, provideMockStore({})],
    });

    store = TestBed.inject(Store);
  });

  it('should create the login component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Login');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-title')?.textContent).toContain(
      'LOGIN'
    );
  });

  // it(`should have as hide password text`, () => {
  //   // expect(store.dispatch).toHaveBeenCalledWith(authUser({ user }));
  // });
  
});
