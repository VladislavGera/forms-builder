import { TestBed } from '@angular/core/testing';
import { BuilderComponent } from './builder.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('Builder component testing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [BuilderComponent, provideMockStore({})],
    });
  });

  it('should create the app builder', () => {
    const fixture = TestBed.createComponent(BuilderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
