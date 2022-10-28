import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialExampleModule } from 'src/material.module';
import { MainComponent } from './main.component';
// import { HeaderModule } from '../header/header.module';
// import { BuilderComponent } from '../builder/builder.component';
import { MainRoutingModule } from './main-routing.module';

// import { SelectComponent } from '../select/select.component';
// import { ResultComponent } from '../result/result.component';
// import { FormStyleComponent } from '../form-style/form-style.component';
import { SelectModule } from '../select/select.module';
import { HeaderModule } from '../header/header.module';
import { ResultModule } from '../result/result.module';
import { BuilderModule } from '../builder/builder.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ResultModule,
    MaterialExampleModule,
    MainRoutingModule,
    SelectModule,
    BuilderModule,
    HeaderModule,
  ],
  providers: [],
})
export class MainModule {}
