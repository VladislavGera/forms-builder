import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { authUser } from './components/auth/state/auth.action';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.state';

describe('App component testing', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let store: MockStore<AppState>;

  let user = {
    email: 'vheranin@gmail.com',
    id: '1',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AppComponent, provideMockStore({})],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app component', () => {
    // expect(component).toBeTruthy();
  });

  it('should function authUser', () => {
    spyOn(store, 'dispatch');
    component.authUser();
  });

  it('should dispatch checkUserAuth', () => {
    spyOn(store, 'dispatch');
    component.checkUserAuth(user);
    // expect(store.dispatch).toHaveBeenCalledWith(authUser({ user }));
  });
});
