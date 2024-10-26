import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './_modules/shared/_components/page-not-found/page-not-found.component';
import { MainComponent } from './_modules/shared/_components/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing-page/home', pathMatch: 'full' },
  { path: 'landing-page', loadChildren: () => import('./_modules/landing/landing.module').then(m => m.LandingModule) },
  { path: 'main', component: MainComponent , children: [
    { path: 'dashboard', loadChildren: () => import('./_modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'services', loadChildren: () => import('./_modules/services/services.module').then(m => m.ServicesModule) },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
