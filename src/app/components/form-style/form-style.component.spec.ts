import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStyleComponent } from './form-style.component';

describe('FormStyleComponent', () => {
  let component: FormStyleComponent;
  let fixture: ComponentFixture<FormStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
