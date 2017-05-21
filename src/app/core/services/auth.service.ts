import { Injectable } from '@angular/core';
import { FacebookService, LoginResponse } from 'ngx-facebook';
import { Config } from './config.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  isConnected: Promise<string> = null;

  constructor (
    private fb: FacebookService,
    private userService: UserService
  ) {
    fb.init(Config.facebook);

    this.isConnected = this.fb.getLoginStatus().then((result: any) => {
      return result.status;
    });
  }

  login() {
    return this.fb.login()
      .then((response: LoginResponse) => {
        localStorage.setItem('token', response.authResponse.accessToken);
      })
      .catch((error: any) => console.error(error));
  }

  isLoggedIn(): Promise<boolean> {
    return this.userService.getUserInfo().then((info) => {
      return info.connected;
    });
  }

  isAdmin(): Promise<boolean> {
    return this.userService.getUserInfo().then((info) => {
      return info.connected ? info.isAdmin : false;
    });
  }

}
