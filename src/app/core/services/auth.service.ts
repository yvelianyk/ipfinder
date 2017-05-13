import { Injectable } from '@angular/core';
import { FacebookService, LoginResponse } from 'ngx-facebook';
import { Config } from './config.service';

@Injectable()
export class AuthService {

  isConnected: Promise<string> = null;

  constructor(private fb: FacebookService) {
    fb.init(Config.facebook);

    this.isConnected = this.fb.getLoginStatus().then((result: any) => {
      return result.status;
    });
  }

  login() {
    return this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }

}
