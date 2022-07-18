import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  drop!: (args: CdkDragDrop<string[]>) => void;
  setStyleElements!: (data: any) => void;
  setBorderElements!: (data: any) => void;
  setStyleForm!: (data: any) => void;
  setBorderForm!: (data: any) => void;
  setIdElemtn!: (id: String) => void;
  setIdForm!: (id: String) => void;
  elementId!: String;
  formId!: String;
  currentElements: any[] = [];
  elements: any[] = [
    { type: 'input', icon: 'input' },
    { type: 'textarea', icon: 'edit_square' },
    { type: 'button', icon: 'check_box_outline_blank' },
    { type: 'checkbox', icon: 'check_box' },
    { type: 'select', icon: 'fact_check' },
    { type: 'text', icon: 'text_fields' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.drop = (event: CdkDragDrop<string[]>) => {
      event.previousContainer === event.container ||
        this.currentElements.push({
          type: this.elements[event.previousIndex].type,
          id: uuidv4(),
        });
    };

    this.setStyleElements = (data) => {
      console.log(data);
    };

    this.setBorderElements = (data) => {
      console.log(data);
    };

    this.setStyleForm = (data) => {
      console.log(data);
    };

    this.setBorderForm = (data) => {
      console.log(data);
    };
  }
}
