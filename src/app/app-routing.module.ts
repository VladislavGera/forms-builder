import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registration',
    component: RegistrationComponent,
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
