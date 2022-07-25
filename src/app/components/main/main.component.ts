import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AppState } from 'src/app/store/app.state';
import { updateForm } from '../form-style/state/form.action';
import { refreshForm } from '../form-style/state/form.action';
import { updateFormBorder } from '../form-style/state/form.action';
import { Store } from '@ngrx/store';
import { getElements } from '../builder/state/elements.selectors';
import {
  deleteElement,
  updateElement,
} from '../builder/state/elements.action';
import { postElement } from '../builder/state/elements.action';
import { setElement } from '../element-style/state/element.action';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  drop!: (args: CdkDragDrop<string[]>) => void;
  setStyleElements!: (data: any) => void;
  setStyleForm!: (data: any) => void;
  setBorderForm!: (data: any) => void;
  getCurrentElement!: (data: any) => void;
  deleteElement!: () => void;
  setIdForm!: (id: String) => void;
  elementId!: String;
  currentElements!: any[];
  elements!: any[];

  constructor(private store: Store<AppState>, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('/assets/elements.json').subscribe((res: any) => {
      this.elements = res.elements;
    });

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

    this.setStyleForm = (data) => {
      this.store.dispatch(updateForm({ data }));
    };

    this.setBorderForm = (data) => {
      this.store.dispatch(updateFormBorder({ data }));
    };

    this.getCurrentElement = (element) => {
      this.store.dispatch(setElement({ element }));
      this.elementId = element.id;
    };

    this.deleteElement = () => {
      this.store.dispatch(deleteElement({ id: this.elementId }));
    };

    this.store.select(getElements).subscribe((res) => {
      this.currentElements = res.elements;
    });
  }
}
