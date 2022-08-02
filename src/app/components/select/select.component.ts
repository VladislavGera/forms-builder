import { Component, OnInit, Input } from '@angular/core';
import { data } from '../elements';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  elements: any[] = data.elements;
  @Input() drop: any;

  constructor() {}

  ngOnInit(): void {}
}