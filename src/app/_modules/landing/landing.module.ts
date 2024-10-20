import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './_component/landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './_component/login/login.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
