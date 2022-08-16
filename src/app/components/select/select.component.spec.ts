import { TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';

describe('Select component testing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SelectComponent],
    });
  });

  it('should create the select component', () => {
    const fixture = TestBed.createComponent(SelectComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as select elements`, () => {
    const fixture = TestBed.createComponent(SelectComponent);
    const app = fixture.componentInstance;
    expect(app.elements.length).toEqual(6);
  });
});
