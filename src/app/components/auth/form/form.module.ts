import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormComponent } from './form.component';

import { MaterialExampleModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, MaterialExampleModule, ReactiveFormsModule],
  exports: [FormComponent],
  providers: [],
})
export class FormModule {}
