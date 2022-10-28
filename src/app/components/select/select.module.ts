import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialExampleModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule, MaterialExampleModule, ReactiveFormsModule],
  exports: [SelectComponent],
  providers: [],
})
export class SelectModule {}
