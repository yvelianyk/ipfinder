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
import { SharedModule } from  './shared/shared.module';

// ---------------------------------------------------------------------------------------------------------
// RESOLVERS:
// ---------------------------------------------------------------------------------------------------------

import { UserResolve } from './core/services/user.resolve';

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
    SharedModule,
    AppRoutingModule,
    FacebookModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    UserResolve
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
