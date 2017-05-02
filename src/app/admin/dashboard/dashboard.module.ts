import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesComponent } from './images/images.component';
import { ReportsComponent } from './reports/reports.component';
import { ExportComponent } from './export/export.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImagesComponent,
    ReportsComponent,
    ExportComponent,
    UsersComponent
  ]
})
export class DashboardModule { }
