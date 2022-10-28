import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialExampleModule } from 'src/material.module';

import { FormStyleComponent } from './form-style.component';

import { SelectModule } from '../select/select.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormStyleComponent],
  imports: [CommonModule, MaterialExampleModule, SelectModule, FormsModule],
  exports: [FormStyleComponent],
  providers: [],
})
export class FormStyleModule {}
