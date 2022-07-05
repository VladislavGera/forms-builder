import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../../src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { FormComponent }   from './components/auth/form/form.component'
import { FormBuilder } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './store/app.state';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistartionComponent } from './components/auth/registartion/registartion.component';

@NgModule({
  declarations: [ FormComponent, AppComponent, HeaderComponent, HomeComponent, LoginComponent, RegistartionComponent],
  imports: [
    BrowserModule,
    MaterialExampleModule,
    AppRoutingModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
