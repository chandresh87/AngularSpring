import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './itmp-browser/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './itmp-browser/components/page-not-found/page-not-found.component';

const routes: Routes = [
  
  // Dashboard
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },

  // Child Benefits
  { 
    path: 'child-benefits',
    loadChildren: './child-benefits/child-benefits.module#ChildBenefitsModule',
    data: { title: 'Child Benefits', preload: true }
  },

  // 404
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
