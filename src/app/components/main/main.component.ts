import { Component, OnInit, SimpleChange } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AppState } from 'src/app/store/app.state';
import { updateForm } from '../form-style/state/form.action';
import { refreshForm } from '../form-style/state/form.action';
import { updateFormBorder } from '../form-style/state/form.action';
import { Store } from '@ngrx/store';
import { data } from '../elements';
import { getElements } from '../builder/state/elements.selectors';
import { deleteElement, updateElement } from '../builder/state/elements.action';
import { postElement } from '../builder/state/elements.action';
import { setElement } from '../element-style/state/element.action';
import { getElementById } from '../builder/state/elements.selectors';
import { deleteOptions } from '../builder/state/elements.action';
import { setEelementId } from '../builder/state/elements.action';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  drop!: (args: CdkDragDrop<string[]>) => void;
  setStyleElements!: (data: any) => void;
  setStyleForm!: (data: any) => void;
  getCurrentElement!: (data: any) => void;
  getOptions!: (elementId: any) => void;
  deleteElement!: () => void;
  setIdForm!: (id: String) => void;
  elementId!: any;
  currentElements!: any[];
  currentElement!: any;
  elements: any[] = data.elements;
  options!: any[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.drop = (event: CdkDragDrop<string[]>) => {
      let element = {
        ...this.elements[event.previousIndex].element,
        id: uuidv4(),
      };

      event.previousContainer === event.container ||
        this.store.dispatch(postElement({ element }));
    };

    this.setStyleElements = (elementSetting) => {
      let data: any = {
        elementSetting,
        id: this.elementId,
      };

      this.store.dispatch(updateElement({ data }));
    };

    this.setStyleForm = (form) => {
      this.store.dispatch(updateForm({ form }));
    };

    this.getCurrentElement = (elementId) => {
      this.store.dispatch(setEelementId({ elementId }));

      this.elementId = elementId;

      this.store
        .select(getElementById)
        .subscribe((element) => {
          this.currentElement = element;
        });

      this.store.dispatch(setElement({ element: this.currentElement }));
    };

    this.deleteElement = () => {
      this.store.dispatch(deleteElement({ id: this.elementId }));
      this.store.dispatch(deleteOptions({ elementId: this.elementId }));
    };

    this.store.select(getElements).subscribe((elements) => {
      this.currentElements = elements;
    });
  }
}
