import { TestBed } from '@angular/core/testing';
import { FormStyleComponent } from './form-style.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('Form component testing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [FormStyleComponent, provideMockStore({})],
    });
  });

  it('should create the form component', () => {
    const fixture = TestBed.createComponent(FormStyleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
