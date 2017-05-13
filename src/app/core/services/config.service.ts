import { InitParams } from 'ngx-facebook';

export class Config {
  static serverApiUrl = 'http://localhost:3000/api';
  static facebook: InitParams = {
    appId: '299527913813041',
    xfbml: true,
    version: 'v2.8'
  };
}
