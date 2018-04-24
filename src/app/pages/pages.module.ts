import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from "./progress/progress.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROTERS } from './pages.routes';

@NgModule({

  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],

exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
],

imports: [
 SharedModule,
 PAGES_ROTERS
]


})

export class PagesModule {
}