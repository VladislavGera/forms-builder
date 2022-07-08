import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistartionComponent } from './components/auth/registartion/registartion.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BuilderComponent } from './components/builder/builder.component';
import { ResultComponent } from './components/result/result.component';
import { SelectComponent } from './components/select/select.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'style',
    component: ResultComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'select',
    component: SelectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'build',
    component: BuilderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registartion',
    component: RegistartionComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
