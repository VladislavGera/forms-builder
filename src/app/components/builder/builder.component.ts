import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
})
export class BuilderComponent implements OnInit {
  @Input() setStyleElements: any;
  @Input() setStyleForm: any;
  @Input() elementId: any;
  @Input() options: any;
  @Input() element: any;

  constructor() {}

  ngOnInit(): void {}
}
