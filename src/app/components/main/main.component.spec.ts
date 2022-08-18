import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainComponent } from './main.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.state';
import { postElement } from '../builder/state/elements.action';
import { ElementStyle } from 'src/models/element.model';

describe('Main component testing', () => {
  let fixture: ComponentFixture<MainComponent>;
  let component: MainComponent;
  let store: MockStore<AppState>;
  let element: ElementStyle = {
    label: 'label',
    width: 3,
    height: 5,
    content: 'content',
    fontSize: 5,
    fontWeight: 'bold',
    background: 'red',
    position: 'center',
    textColor: 'green',
    lableColor: 'green',
    borderWidth: 9,
    borderColor: 'red',
    borderType: 'solid',
    requared: true,
    type: 'text',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MainComponent, provideMockStore({})],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
  });

  it('should create the main component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch postEelement', () => {
    spyOn(store, 'dispatch');
    component.postElement(element);
    expect(store.dispatch).toHaveBeenCalledWith(postElement({ element }));
  });
});
