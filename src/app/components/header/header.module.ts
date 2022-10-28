import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialExampleModule } from 'src/material.module';

import { HeaderComponent } from '../header/header.component';

import { SelectModule } from '../select/select.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialExampleModule, SelectModule],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
