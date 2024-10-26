import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KycComponent } from './_components/kyc/kyc.component';
import { IdrComponent } from './_components/idr/idr.component';
import { FaceCompareComponent } from './_components/face-compare/face-compare.component';

const routes: Routes = [
  {
    path: 'kyc', component: KycComponent 
  }, 
  {
    path: 'idr', component: IdrComponent 
  },
  {
    path: 'face-compare', component: FaceCompareComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
