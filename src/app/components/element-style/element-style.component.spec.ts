import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ElementStyleComponent } from './element-style.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.state';
import { Option } from 'src/models/option.model';

describe('Element component testing', () => {
  let fixture: ComponentFixture<ElementStyleComponent>;
  let component: ElementStyleComponent;
  let store: MockStore<AppState>;

  let option: Option = {
    id: '1',
    elementId: '1',
    value: 'option',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
      ],
      providers: [ElementStyleComponent, provideMockStore({})],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ElementStyleComponent);
    component = fixture.componentInstance;
  });

  it('should create the element component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getElementStyle', () => {
    spyOn(store, 'dispatch');
    component.getElementStyle();
  });

  it('should dispatch postOption', () => {
    spyOn(store, 'dispatch');
    component.postOption();
  });

  it('should dispatch updateOption', () => {
    spyOn(store, 'dispatch');
    component.updateOption(option);
  });

  it('should dispatch deleteOption', () => {
    spyOn(store, 'dispatch');
    component.deleteOption('1');
  });
});
