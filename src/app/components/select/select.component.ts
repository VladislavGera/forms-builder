import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() elements: any;
  @Input() drop: any;

  constructor() {}

  ngOnInit(): void {}
}

// <!-- deleteItem!: (args: Number) => void; -->
