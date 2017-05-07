import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Injectable()
export class AuthService {

  isConnected: Promise<string> = null;

  // TODO: move init params to config file
  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      appId: '299527913813041',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

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
