import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  elements: any[] = [
    { type: 'input', icon: 'input' },
    { type: 'textarea', icon: 'edit_square' },
    { type: 'button', icon: 'check_box_outline_blank' },
    { type: 'checkbox', icon: 'check_box' },
    { type: 'select', icon: 'fact_check' },
    { type: 'text', icon: 'text_fields' },
    { type: 'title', icon: 'title' },
  ];

  drop!: (args: CdkDragDrop<string[]>) => void;

  currentElements: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.drop = (event: CdkDragDrop<string[]>) => {
      event.previousContainer === event.container ||
        this.currentElements.push(this.elements[event.previousIndex].type);
    };
  }
}
