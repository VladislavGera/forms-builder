import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.state';
import { showResult } from '../builder/state/elements.action';
import { deleteElement } from '../builder/state/elements.action';
import { setEelementId } from '../builder/state/elements.action';

describe('Result component testing', () => {
  let fixture: ComponentFixture<ResultComponent>;
  let component: ResultComponent;
  let store: MockStore<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ResultComponent, provideMockStore({})],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
  });

  it('should create the result component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch showResult', () => {
    spyOn(store, 'dispatch');
    component.showResult();
    expect(store.dispatch).toHaveBeenCalledWith(showResult());
    expect(component.elementId).toEqual('');
  });

  it('should dispatch deleteElement', () => {
    spyOn(store, 'dispatch');
    component.deleteElement();
    expect(store.dispatch).toHaveBeenCalledWith(deleteElement());
  });

  it('should dispatch getElementId', () => {
    let elementId: string = '1';
    spyOn(store, 'dispatch');
    component.getElementId(elementId);
    expect(store.dispatch).toHaveBeenCalledWith(setEelementId({ elementId }));
    expect(component.elementId).toEqual('1');
  });
});