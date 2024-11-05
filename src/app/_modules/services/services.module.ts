import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { KycComponent } from './_components/kyc/kyc.component';
import { SharedModule } from '../shared/shared.module';
import { IdrComponent } from './_components/idr/idr.component';
import { FaceCompareComponent } from './_components/face-compare/face-compare.component';
import { ServiceHeaderComponent } from './_components/service-header/service-header.component';



@NgModule({
  declarations: [
    KycComponent,
    IdrComponent,
    FaceCompareComponent,
    ServiceHeaderComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
