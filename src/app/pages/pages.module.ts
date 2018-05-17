import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROTERS } from './pages.routes';
import { FormsModule } from '@angular/forms';
// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
// ng2-charts
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';


@NgModule({

  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccoutSettingsComponent
  ],

exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
],

imports: [
 SharedModule,
 PAGES_ROTERS,
 FormsModule,
 ChartsModule
]


})

export class PagesModule { }