import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  elements = [
    { type: 'input', icon: 'input' },
    { type: 'textarea', icon: 'edit_square' },
    { type: 'button', icon: 'check_box_outline_blank' },
    { type: 'checkbox', icon: 'check_box' },
    { type: 'select', icon: 'fact_check' },
    { type: 'text', icon: 'text_fields' },
    { type: 'title', icon: 'title' },
  ];

  currentElements = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
