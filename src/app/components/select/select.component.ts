import { Component, OnInit, Input } from '@angular/core';
import { data } from '../elements';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { SelectElement } from 'src/app/models/selectElement.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  elements: SelectElement[] = data.elements;
  @Input() drop!: (args: CdkDragDrop<string[]>) => void;

  constructor() {}

  ngOnInit(): void {}
}
