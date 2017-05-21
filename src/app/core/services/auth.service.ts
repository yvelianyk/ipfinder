import { Injectable } from '@angular/core';
import { FacebookService, LoginResponse } from 'ngx-facebook';
import { Config } from './config.service';
import { UserService } from './user.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  isConnected: Promise<string> = null;

  private authUrl = Config.serverApiUrl + '/auth';

  constructor (
    private fb: FacebookService,
    private userService: UserService,
    private http: Http
  ) {
    fb.init(Config.facebook);

    this.isConnected = this.fb.getLoginStatus().then((result: any) => {
      return result.status;
    });
  }

  // TODO: correct handle errors
  fbLogin() {
    return this.fb.login()
      .then((response: LoginResponse) => {
        localStorage.setItem('token', response.authResponse.accessToken);
      })
      .catch((error: any) => console.error(error));
  }

  login(params): Promise<any> {
    return this.http.post(this.authUrl, params)
      .toPromise()
      .then(response => {
        localStorage.setItem('token', response.json().token);
        return response.json();
      }).catch( () => {
        return {error: 'Invalid credentials'}
      })
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
