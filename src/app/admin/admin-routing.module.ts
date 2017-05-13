import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent }       from './admin.component';
import { ImagesComponent } from './dashboard/images/images.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { ExportComponent } from './dashboard/export/export.component';
import { UsersComponent } from './dashboard/users/users.component';

const routes: Routes = [
  { path: '',
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
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
