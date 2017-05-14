import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestOptions, XHRBackend } from '@angular/http';

import { AuthService } from './services/auth.service';
import { AuthHttp } from './services/authHttp.service';

export function AuthHttpFactory(backend: XHRBackend, options: RequestOptions) {
  return new AuthHttp(backend, options);
}

@NgModule({
  imports: [
    CommonModule,

  ],
  providers: [
    AuthService,
    {
      provide: AuthHttp,
      useFactory: AuthHttpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
