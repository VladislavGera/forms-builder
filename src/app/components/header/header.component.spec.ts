import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { AppState } from 'src/app/store/app.state';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { logOutForm } from '../form-style/state/form.action';
import { logOutElements } from '../builder/state/elements.action';
import { logOutUser } from '../auth/state/auth.action';
import { Router } from '@angular/router';

describe('Header component testing', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let store: MockStore<AppState>;

  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        HeaderComponent,
        provideMockStore(),
        { provide: Router, useValue: routerSpy },
      ],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create the app header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as inputValue`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app.inputValue).toEqual('');
  });

  it('should dispatch logOut', () => {
    spyOn(store, 'dispatch');
    component.logOut();
    expect(store.dispatch).toHaveBeenCalledWith(logOutForm());
    expect(store.dispatch).toHaveBeenCalledWith(logOutElements());
    expect(store.dispatch).toHaveBeenCalledWith(logOutUser());
  });
});
