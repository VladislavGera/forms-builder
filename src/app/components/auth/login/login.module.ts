import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialExampleModule } from 'src/material.module';
import { LoginComponent } from './login.component';
import { FormModule } from '../form/form.module';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MaterialExampleModule, FormModule, LoginRoutingModule],
  providers: [],
})
export class LoginModule {}
