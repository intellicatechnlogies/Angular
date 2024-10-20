import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './_modules/shared/_components/page-not-found/page-not-found.component';
import { MainComponent } from './_modules/shared/_components/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main/dashboard', pathMatch: 'full' },
  { path: 'main', component: MainComponent , children: [
    { path: 'dashboard', loadChildren: () => import('./_modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
