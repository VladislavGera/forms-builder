import { Component, OnInit, Input } from '@angular/core';
import { getForm } from '../form-style/state/form.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input() getCurrentElement: any;
  @Input() currentElements: any;
  @Input() deleteElement: any;
  @Input() elementId: any;

  @Input() drop: any;
  @Input() getOptions: any;

  formStyle!: any;
  options!: any;
  optionsValue!: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getForm).subscribe((res) => {
      this.formStyle = res;
    });
  }
}
