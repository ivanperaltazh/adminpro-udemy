import {RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';



const pagesRoutes: Routes = [
    {
        path:  '',
        component: PagesComponent,
        children: [
          {path:  'dashboard', component: DashboardComponent},
          {path:  'progress', component: ProgressComponent},
          {path:  'graficas1', component: Graficas1Component},
          {path:  'account-sttings', component: AccoutSettingsComponent},
          {path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
      }

];

export const PAGES_ROTERS = RouterModule.forChild(pagesRoutes);

// http://localhost:4200/#/progress
// http://localhost:4200/#/graficas1