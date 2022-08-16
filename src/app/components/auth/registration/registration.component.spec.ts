import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegistartionComponent } from './registration.component';
import { inputValueState } from 'src/models/input.model';

describe('Registration component testing', () => {
  let component: RegistartionComponent;
  let initialState: inputValueState = {
    email: 'vheranin@gmail.com',
    password: 'plkiu123',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
      ],
      providers: [RegistartionComponent, provideMockStore({})],
    });
  });

  it('should create the registration component', () => {
    const fixture = TestBed.createComponent(RegistartionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title`, () => {
    const fixture = TestBed.createComponent(RegistartionComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Registration');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RegistartionComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-title')?.textContent).toContain(
      'REGISTRATION'
    );
  });
});
