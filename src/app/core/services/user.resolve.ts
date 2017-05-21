import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IUser } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class UserResolve implements Resolve<any> {

  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<IUser> {
    return this.userService.getUserInfo();
  }
}
