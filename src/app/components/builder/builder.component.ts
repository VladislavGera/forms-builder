import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
})
export class BuilderComponent implements OnInit {
  @Input() setStyleElements: any;
  @Input() setBorderElements: any;
  @Input() setStyleForm: any;
  @Input() setBorderForm: any;

  constructor() {}

  ngOnInit(): void {}
}
