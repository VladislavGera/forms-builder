import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialExampleModule } from 'src/material.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registartion-routing.module';

import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    MaterialExampleModule,
    FormModule,
    RegistrationRoutingModule,
  ],
  providers: [],
})
export class RegistrationModule {}
