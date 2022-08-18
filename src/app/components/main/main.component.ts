import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { data } from '../../data/elements';
import { postElement } from '../builder/state/elements.action';
import { ElementStyle } from 'src/models/element.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  elements: any[] = data.elements;

  constructor(private store: Store<AppState>) {}

  postElement = (element: ElementStyle) => {
    this.store.dispatch(postElement({ element }));
  };

  drop = (event: CdkDragDrop<string[]>) => {
    let element = {
      ...this.elements[event.previousIndex].element,
      id: uuidv4(),
    };

    this.postElement(element);
  };
}
