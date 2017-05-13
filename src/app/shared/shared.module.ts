import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';
import { RouterModule } from '@angular/router';
import {Http} from '@angular/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';

import {HeaderComponent}          from './components/header/header.component';
import {JumbotronComponent}       from './components/jumbotron/jumbotron.component';
import {ModalSigninFormComponent} from './components/modal-signin-form/modal-signin-form.component';
import {ModalUploadFormComponent} from './components/modal-upload-form/modal-upload-form.component';


export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  declarations: [
    HeaderComponent,
    JumbotronComponent,
    ModalSigninFormComponent,
    ModalUploadFormComponent
  ],
  exports: [
    HeaderComponent,
    JumbotronComponent,
    ModalSigninFormComponent,
    ModalUploadFormComponent,
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  providers: [TranslateService],
  entryComponents: [
    ModalUploadFormComponent,
    ModalSigninFormComponent
  ]
})
export class SharedModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
