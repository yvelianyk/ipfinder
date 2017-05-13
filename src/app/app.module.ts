import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FacebookModule } from 'ngx-facebook';

// ---------------------------------------------------------------------------------------------------------
// MODULES:
// ---------------------------------------------------------------------------------------------------------

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from  './core/core.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';

// ---------------------------------------------------------------------------------------------------------
// APP COMPONENT:
// ---------------------------------------------------------------------------------------------------------

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    FacebookModule.forRoot(),
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
