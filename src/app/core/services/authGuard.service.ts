import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.isLoggedIn();
  }

  canLoad() {
    return this.authService.isAdmin();
  }
}
