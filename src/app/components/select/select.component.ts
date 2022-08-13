import { Component, OnInit, Input } from '@angular/core';
import { data } from '../../data/elements';
import { SelectElement } from 'src/models/selectElement.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  elements: SelectElement[] = data.elements;

  constructor() {}

  ngOnInit(): void {}
}
