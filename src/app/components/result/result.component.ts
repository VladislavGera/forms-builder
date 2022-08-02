import { Component, OnInit, Input } from '@angular/core';
import { getForm } from '../form-style/state/form.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getElements } from '../builder/state/elements.selectors';
import { deleteElement } from '../builder/state/elements.action';
import { setEelementId } from '../builder/state/elements.action';
import { showResult } from '../builder/state/elements.action';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input() drop: any;

  deleteElement!: any;
  getElementId!: any;
  currentElements!: any[];
  formStyle!: any;
  showResult!: any;

  elementId!: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getForm).subscribe((res) => {
      this.formStyle = res;
    });

    this.store.select(getElements).subscribe((elements) => {
      this.currentElements = elements.map((item: any) => {
        return { ...item, values: JSON.parse(item.values) };
      });
    });

    this.showResult = () => {
      this.store.dispatch(showResult());
      this.elementId = '';
    };

    this.deleteElement = () => {
      this.store.dispatch(deleteElement());
    };

    this.getElementId = async (elementId: string) => {
      await this.store.dispatch(setEelementId({ elementId }));
      this.elementId = elementId;
    };
  }
}
