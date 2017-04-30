import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { JumbotronComponent } from './shared/components/jumbotron/jumbotron.component';
import { ContentComponent } from './content/content.component';
import { ThumbnailComponent } from './content/thumbnail/thumbnail.component';
import { ModalUploadFormComponent } from './shared/components/modal-upload-form/modal-upload-form.component';

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
    ModalUploadFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent],
  entryComponents: [ModalUploadFormComponent]
})
export class AppModule { }
