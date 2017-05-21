import { Injectable } from '@angular/core';
import { AuthHttp } from './authHttp.service';
import 'rxjs/add/operator/toPromise';
import { Config } from './config.service';
import { IUser } from '../models/user';


@Injectable()
export class UserService {

  private userUrl = Config.serverApiUrl + '/user';

  constructor(private authHttp: AuthHttp) {}

  getUserInfo(): Promise<IUser> {
    return this.authHttp.get(this.userUrl)
      .toPromise()
      .then(response => {
        return response.json();
      }).catch( () => {
        return {connected: false}
      })
  }
}
