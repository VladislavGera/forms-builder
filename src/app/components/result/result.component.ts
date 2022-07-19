import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input() currentElements: any;
  @Input() drop: any;
  @Input() setIdElement: any;

  constructor() {}

  ngOnInit(): void {}
}
