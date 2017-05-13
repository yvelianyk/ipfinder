import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
import { FacebookModule } from 'ngx-facebook';

// ---------------------------------------------------------------------------------------------------------
// SERVICES:
// ---------------------------------------------------------------------------------------------------------

import { AuthService } from './core/services/auth.service';

// ---------------------------------------------------------------------------------------------------------
// MODULES:
// ---------------------------------------------------------------------------------------------------------

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './admin/dashboard/dashboard.module';

// ---------------------------------------------------------------------------------------------------------
// COMPONENTS:
// ---------------------------------------------------------------------------------------------------------

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { JumbotronComponent } from './shared/components/jumbotron/jumbotron.component';
import { ContentComponent } from './home/content/content.component';
import { ThumbnailComponent } from './home/content/thumbnail/thumbnail.component';
import { ModalUploadFormComponent } from './shared/components/modal-upload-form/modal-upload-form.component';
import { ModalSigninFormComponent } from './shared/components/modal-signin-form/modal-signin-form.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    ContentComponent,
    ThumbnailComponent,
    ModalUploadFormComponent,
    ModalSigninFormComponent,
    HomeComponent,
    AdminComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DashboardModule,
    FacebookModule.forRoot(),
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [TranslateService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalUploadFormComponent,
    ModalSigninFormComponent
  ]
})
export class AppModule { }
