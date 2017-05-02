import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { ImagesComponent }    from './admin/dashboard/images/images.component';
import { ReportsComponent }    from './admin/dashboard/reports/reports.component';
import { ExportComponent }    from './admin/dashboard/export/export.component';
import { UsersComponent }    from './admin/dashboard/users/users.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'images',  component: ImagesComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'export', component: ExportComponent },
      { path: 'users', component: UsersComponent },
      {
        path: '',
        redirectTo: '/admin/images',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
