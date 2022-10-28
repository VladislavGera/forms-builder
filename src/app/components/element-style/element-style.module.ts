import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialExampleModule } from 'src/material.module';

import { SelectModule } from '../select/select.module';
import { FormsModule } from '@angular/forms';

import { ElementStyleComponent } from './element-style.component';

@NgModule({
  declarations: [ElementStyleComponent],
  imports: [CommonModule, MaterialExampleModule, SelectModule, FormsModule],
  exports: [ElementStyleComponent],
  providers: [],
})
export class ElementStyleModule {}
