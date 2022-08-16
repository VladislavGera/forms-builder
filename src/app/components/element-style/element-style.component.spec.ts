import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ElementStyleComponent } from './element-style.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('Element component testing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
      ],
      providers: [ElementStyleComponent, provideMockStore({})],
    });
  });

  it('should create the element component', () => {
    const fixture = TestBed.createComponent(ElementStyleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
