import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormStyleComponent } from './form-style.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.state';

describe('Form component testing', () => {
  let fixture: ComponentFixture<FormStyleComponent>;
  let component: FormStyleComponent;
  let store: MockStore<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [FormStyleComponent, provideMockStore({})],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(FormStyleComponent);
    component = fixture.componentInstance;
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getFormStyle', () => {
    spyOn(store, 'dispatch');
    component.getFormStyle();
  });
});
