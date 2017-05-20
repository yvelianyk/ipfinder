import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AuthHttp } from './authHttp.service';
import { IUser } from '../models/user';

import 'rxjs/add/operator/toPromise';
import { Config } from './config.service';

@Injectable()
export class UserResolve implements Resolve<any> {

  private userUrl = Config.serverApiUrl + '/user';

  constructor(private authHttp: AuthHttp) {}

  resolve(route: ActivatedRouteSnapshot): Promise<IUser> {
    return this.authHttp.get(this.userUrl)
      .toPromise()
      .then(response => {
        return response.json();
      }).catch( () => {
        return {connected: false}
      })
  }
}
