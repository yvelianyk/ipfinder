import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FacebookModule } from 'ngx-facebook';

// ---------------------------------------------------------------------------------------------------------
// SERVICES:
// ---------------------------------------------------------------------------------------------------------

import { AuthService } from './core/services/auth.service';

// ---------------------------------------------------------------------------------------------------------
// MODULES:
// ---------------------------------------------------------------------------------------------------------

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';

// ---------------------------------------------------------------------------------------------------------
// COMPONENTS:
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
    AppRoutingModule,
    HomeModule,
    AdminModule,
    FacebookModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
