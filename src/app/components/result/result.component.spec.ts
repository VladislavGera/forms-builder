import { TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('Result component testing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ResultComponent, provideMockStore({})],
    });
  });

  it('should create the result component', () => {
    const fixture = TestBed.createComponent(ResultComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
