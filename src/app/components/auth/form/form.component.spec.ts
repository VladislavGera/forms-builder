import { TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe('Form component testing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [FormComponent],
    });
  });

  it('should create the login component', () => {
    const fixture = TestBed.createComponent(FormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as email`, () => {
    const fixture = TestBed.createComponent(FormComponent);
    const app = fixture.componentInstance;
    expect(app.email).toEqual('');
  });

  it(`should have as password`, () => {
    const fixture = TestBed.createComponent(FormComponent);
    const app = fixture.componentInstance;
    expect(app.password).toEqual('');
  });

  it(`should have as hide password text`, () => {
    const fixture = TestBed.createComponent(FormComponent);
    const app = fixture.componentInstance;
    expect(app.hide).toEqual(true);
  });
});
