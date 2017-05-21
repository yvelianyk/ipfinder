import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolve } from './core/services/user.resolve';
import { AuthGuard } from './core/services/authGuard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    resolve: {
      user: UserResolve
    },
    canLoad: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule',
    resolve: {
      user: UserResolve
    }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
