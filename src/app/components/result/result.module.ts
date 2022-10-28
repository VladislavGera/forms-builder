import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResultComponent } from './result.component';

import { MaterialExampleModule } from 'src/material.module';

@NgModule({
  declarations: [ResultComponent],
  imports: [CommonModule, MaterialExampleModule],
  exports: [ResultComponent],
  providers: [],
})
export class ResultModule {}
