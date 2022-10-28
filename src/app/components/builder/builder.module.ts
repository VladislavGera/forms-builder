import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialExampleModule } from 'src/material.module';

import { SelectModule } from '../select/select.module';
import { ElementStyleModule } from '../element-style/element-style.module';
import { FormStyleModule } from '../form-style/form_style.module';
import { BuilderComponent } from './builder.component';

@NgModule({
  declarations: [BuilderComponent],
  imports: [
    CommonModule,
    MaterialExampleModule,
    SelectModule,
    ElementStyleModule,
    FormStyleModule,
  ],
  exports: [BuilderComponent],
  providers: [],
})
export class BuilderModule {}
