import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { getForm } from '../form-style/state/form.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getElements } from '../builder/state/elements.selectors';
import { deleteElement } from '../builder/state/elements.action';
import { setEelementId } from '../builder/state/elements.action';
import { showResult } from '../builder/state/elements.action';
import { FormStyle } from 'src/models/form.model';
import { ElementStyle } from 'src/models/element.model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit, OnDestroy {
  @Input() drop!: (args: CdkDragDrop<string[]>) => void;

  currentElements!: Array<ElementStyle>;
  formStyle!: FormStyle;
  elementId!: string;

  getFormSubscription!: Subscription;
  getElementsSubscription!: Subscription;

  constructor(private store: Store<AppState>) {}

  showResult = () => {
    this.store.dispatch(showResult());
    this.elementId = '';
  };

  deleteElement() {
    this.store.dispatch(deleteElement());
  }

  getElementId = (elementId: string) => {
    this.store.dispatch(setEelementId({ elementId }));
    this.elementId = elementId;
  };

  ngOnInit(): void {
    this.getFormSubscription = this.store.select(getForm).subscribe((res) => {
      this.formStyle = res;
    });

    this.getElementsSubscription = this.store
      .select(getElements)
      .subscribe((elements) => {
        this.currentElements = elements.map((item: any) => {
          return { ...item, options: JSON.parse(item.options) };
        });
      });
  }

  ngOnDestroy() {
    this.getFormSubscription.unsubscribe();
    this.getElementsSubscription.unsubscribe();
  }
}
