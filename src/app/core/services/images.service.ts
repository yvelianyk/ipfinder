import { Injectable } from '@angular/core';
import { AuthHttp } from './authHttp.service';

import 'rxjs/add/operator/toPromise';
import { Config } from './config.service';
import { Thumbnail } from "../models/thumbnail";


@Injectable()
export class ImagesService {

  private imagesUrl = Config.serverApiUrl + '/images';

  constructor(private http: AuthHttp) { }

  getImages(): Promise<Thumbnail[]> {
    return this.http.get(this.imagesUrl)
      .toPromise()
      .then(response => response.json());
  }

}
