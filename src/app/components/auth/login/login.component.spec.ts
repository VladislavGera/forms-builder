import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.state';
import { LoginComponent } from './login.component';
import { authUser } from '../state/auth.action';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let store: MockStore<AppState>;

  let user: any = {
    email: 'vheranin@gmail.com',
    password: 'plkiu123',
    id: '1',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
      ],
      providers: [provideMockStore({})],
      declarations: [LoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it(`should have as title`, () => {
    expect(component.title).toEqual('Login');
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch authUser', () => {
    spyOn(store, 'dispatch');
    component.authUser(user);
    expect(store.dispatch).toHaveBeenCalledWith(authUser({ user }));
  });

  it('should dispatch showAlert message', () => {
    component.showAlert('message');
  });
});
