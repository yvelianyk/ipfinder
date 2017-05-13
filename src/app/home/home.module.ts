import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SharedModule }         from '../shared/shared.module';
import { HomeRoutingModule }         from './home-routing.module';
import { ImagesService }         from '../core/services/images.service';

import { HomeComponent }     from './home.component';
import { ContentComponent }     from './content/content.component';
import { ThumbnailComponent }     from './content/thumbnail/thumbnail.component';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ContentComponent,
    ThumbnailComponent
  ],
  exports: [
    HomeComponent,
    ContentComponent,
    ThumbnailComponent,
    CommonModule,
    FormsModule
  ],
  providers: [
    ImagesService
  ]
})
export class HomeModule {
}
