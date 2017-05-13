import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}         from '@angular/forms';
import {SharedModule}         from '../shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';

import {AdminComponent} from './admin.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ImagesComponent } from './dashboard/images/images.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { ExportComponent } from './dashboard/export/export.component';
import { UsersComponent } from './dashboard/users/users.component';


@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    SidebarComponent,
    ImagesComponent,
    ReportsComponent,
    ExportComponent,
    UsersComponent
  ],
  exports: [
    FormsModule,
    CommonModule,
    AdminComponent,
    DashboardComponent,
    SidebarComponent,
    ImagesComponent,
    ReportsComponent,
    ExportComponent,
    UsersComponent
  ]
})
export class AdminModule {
}
